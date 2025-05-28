"use client"

import { useEffect, useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { Search, Trash2, AlertCircle } from "lucide-react"
import { Input } from "@/components/ui/input"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog"
import { toast } from "@/components/ui/use-toast"
import { Toaster } from "@/components/ui/toaster"
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"

// Define the Contact interface
interface Contact {
  id: number
  name: string
  email: string
  phone: string
  message: string
  createdAt: string
}

export default function ContactsPage() {
  const [contacts, setContacts] = useState<Contact[]>([])
  const [searchTerm, setSearchTerm] = useState("")
  const [deleteId, setDeleteId] = useState<number | null>(null)
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false)
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 5

  // Fetch contacts from API
  useEffect(() => {
    const fetchContacts = async () => {
      try {
        const response = await fetch("/api/contact")
        const data = await response.json()
        setContacts(data.data) // Replace initialData with API response
      } catch (error) {
        console.error("Failed to fetch contacts:", error)
      }
    }

    fetchContacts()
  }, [])

  // Filter contacts based on search term
  const filteredContacts: Contact[] = contacts?.filter(
    (contact) =>
      contact.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      contact.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      contact.phone.includes(searchTerm),
  )

  // Pagination logic
  const indexOfLastContact = currentPage * itemsPerPage
  const indexOfFirstContact = indexOfLastContact - itemsPerPage
  const currentContacts = filteredContacts.slice(indexOfFirstContact, indexOfLastContact)
  const totalPages = Math.ceil(filteredContacts.length / itemsPerPage)

  // Handle page change
  const handlePageChange = (page: number) => {
    setCurrentPage(page)
  }

  // Handle delete confirmation
  const handleDeleteClick = (id: number) => {
    setDeleteId(id)
    setIsDeleteDialogOpen(true)
  }

  // Delete contact
  const deleteContact = async () => {
    if (deleteId) {
      try {
        const response = await fetch(`/api/contact?id=${deleteId}`, {
          method: "DELETE",
        })

        if (response.ok) {
          setContacts(contacts.filter((contact) => contact.id !== deleteId))
          toast({
            title: "Contact deleted",
            description: "The contact has been successfully deleted.",
          })
          setIsDeleteDialogOpen(false)
          setDeleteId(null)
        } else {
          const errorData = await response.json()
          toast({
            title: "Error",
            description: errorData.message || "Failed to delete the consultation.",
            variant: "destructive",
          })
        }
      } catch (error) {
        console.error("Failed to delete consultation:", error)
        toast({
          title: "Error",
          description: "An error occurred while deleting the consultation.",
          variant: "destructive",
        })
      } finally {
        setIsDeleteDialogOpen(false)
        setDeleteId(null)
      }
    }
  }

  // Format date
  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    })
  }

  // Reset pagination when search term changes
  useEffect(() => {
    setCurrentPage(1)
  }, [searchTerm])

  return (
    <div className="flex-1 space-y-4 p-8 pt-6">
      <div className="flex items-center justify-between space-y-2">
        <h2 className="text-3xl font-bold tracking-tight text-[#0D8B7D]">Contact Information</h2>
      </div>
      <Card>
        <CardHeader>
          <CardTitle className="text-[#0D8B7D]">Contact Form Submissions</CardTitle>
          <CardDescription>View and manage all contact form submissions.</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-between space-y-2 mb-4">
            <div className="flex items-center space-x-2 w-full max-w-sm">
              <div className="relative w-full">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Search contacts..."
                  className="w-full pl-8"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </div>
          </div>
          <div className="rounded-md border">
            <Table>
              <TableHeader>
                <TableRow className="bg-[#e8f7f5]">
                  <TableHead className="text-[#0D8B7D]">Id</TableHead>
                  <TableHead className="text-[#0D8B7D]">Name</TableHead>
                  <TableHead className="text-[#0D8B7D]">Email</TableHead>
                  <TableHead className="text-[#0D8B7D]">Phone</TableHead>
                  <TableHead className="text-[#0D8B7D]">Message</TableHead>
                  <TableHead className="text-[#0D8B7D]">Date</TableHead>
                  <TableHead className="text-[#0D8B7D] text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {currentContacts.length > 0 ? (
                  currentContacts.map((contact) => (
                    <TableRow key={contact.id}>
                      <TableCell className="font-medium">{contact.id}</TableCell>
                      <TableCell className="font-medium">{contact.name}</TableCell>
                      <TableCell>{contact.email}</TableCell>
                      <TableCell className="">{contact.phone}</TableCell>
                      <TableCell className="max-w-[200px] break-words text-wrap">{contact.message}</TableCell>
                      <TableCell>{formatDate(contact.createdAt)}</TableCell>
                      <TableCell className="text-right">
                        <Button
                          variant="ghost"
                          size="icon"
                          className="text-red-500 hover:text-red-700 hover:bg-red-50"
                          onClick={() => handleDeleteClick(contact.id)}
                        >
                          <Trash2 className="h-4 w-4" />
                          <span className="sr-only">Delete contact</span>
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))
                ) : (
                  <TableRow>
                    <TableCell colSpan={6} className="h-24 text-center">
                      <div className="flex flex-col items-center justify-center text-muted-foreground">
                        <AlertCircle className="h-8 w-8 mb-2" />
                        <p>No contacts found</p>
                        {searchTerm && <p className="text-sm">Try adjusting your search term</p>}
                      </div>
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </div>
          <div className="flex justify-center mt-4">
            <Pagination>
              <PaginationContent>
                <PaginationItem>
                  <PaginationPrevious
                    href="#"
                    onClick={(e) => {
                      e.preventDefault()
                      if (currentPage > 1) handlePageChange(currentPage - 1)
                    }}
                    className={currentPage === 1 ? "pointer-events-none opacity-50" : ""}
                  />
                </PaginationItem>

                {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                  <PaginationItem key={page}>
                    <PaginationLink
                      href="#"
                      onClick={(e) => {
                        e.preventDefault()
                        handlePageChange(page)
                      }}
                      isActive={page === currentPage}
                    >
                      {page}
                    </PaginationLink>
                  </PaginationItem>
                ))}

                {totalPages > 5 && currentPage < totalPages - 2 && (
                  <PaginationItem>
                    <PaginationEllipsis />
                  </PaginationItem>
                )}

                <PaginationItem>
                  <PaginationNext
                    href="#"
                    onClick={(e) => {
                      e.preventDefault()
                      if (currentPage < totalPages) handlePageChange(currentPage + 1)
                    }}
                    className={currentPage === totalPages ? "pointer-events-none opacity-50" : ""}
                  />
                </PaginationItem>
              </PaginationContent>
            </Pagination>
          </div>
        </CardContent>
      </Card>

      {/* Delete Confirmation Dialog */}
      <AlertDialog open={isDeleteDialogOpen} onOpenChange={setIsDeleteDialogOpen}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you sure?</AlertDialogTitle>
            <AlertDialogDescription>
              This action cannot be undone. This will permanently delete the contact and remove the data from our
              servers.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction onClick={deleteContact} className="bg-red-500 text-white hover:bg-red-600">
              Delete
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>

      <Toaster />
    </div>
  )
}
