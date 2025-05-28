"use client"

import { useState } from "react"
import Image from "next/image"
import { Dialog, DialogContent } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { X, ChevronLeft, ChevronRight } from "lucide-react"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { DialogTitle } from "@radix-ui/react-dialog"

interface ImageCarouselProps {
  images: string[]
}

export function ImageCarousel({ images }: ImageCarouselProps) {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  const openLightbox = (index: number) => {
    setSelectedImage(index)
  }

  const closeLightbox = () => {
    setSelectedImage(null)
  }

  const goToPrevious = () => {
    if (selectedImage === null) return
    setSelectedImage((prev) => {
      if (prev === null) return images.length - 1
      return prev === 0 ? images.length - 1 : prev - 1
    })
  }

  const goToNext = () => {
    if (selectedImage === null) return
    setSelectedImage((prev) => {
      if (prev === null) return 0
      return prev === images.length - 1 ? 0 : prev + 1
    })
  }

  return (
    <div className="px-4 py-6">
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-full max-w-5xl mx-auto"
      >
        <CarouselContent>
          {images.map((image, index) => (
            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/4">
              <div className="p-1">
                <div
                  className="relative aspect-square overflow-hidden rounded-lg cursor-pointer hover:opacity-90 transition-opacity"
                  onClick={() => openLightbox(index)}
                >
                  <Image
                    src={`/Hammer-Images/${image}` || "/placeholder.svg"}
                    alt={`Gallery image ${index + 1}`}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="flex justify-center mt-4">
          <CarouselPrevious className="relative mr-2" />
          <CarouselNext className="relative ml-2" />
        </div>
      </Carousel>

      <Dialog open={selectedImage !== null} onOpenChange={closeLightbox}>
        <DialogContent className="max-w-5xl p-0 bg-transparent border-none">
            <DialogTitle></DialogTitle>
          <div className="relative bg-black/90 rounded-lg overflow-hidden">
            <Button
              variant="ghost"
              size="icon"
              className="absolute top-2 right-2 z-10 text-white hover:bg-black/20"
              onClick={closeLightbox}
            >
              <X className="h-6 w-6" />
              <span className="sr-only">Close</span>
            </Button>

            <div className="relative h-[80vh] w-full">
              {selectedImage !== null && (
                <Image
                  src={`/Hammer-Images/${images[selectedImage]}` || "/placeholder.svg"}
                  alt={`Gallery image ${selectedImage + 1}`}
                  fill
                  className="object-contain"
                />
              )}
            </div>

            <div className="absolute inset-y-0 left-0 flex items-center">
              <Button
                variant="ghost"
                size="icon"
                className="text-white hover:bg-black/20 h-12 w-12 rounded-full ml-2"
                onClick={goToPrevious}
              >
                <ChevronLeft className="h-8 w-8" />
                <span className="sr-only">Previous image</span>
              </Button>
            </div>

            <div className="absolute inset-y-0 right-0 flex items-center">
              <Button
                variant="ghost"
                size="icon"
                className="text-white hover:bg-black/20 h-12 w-12 rounded-full mr-2"
                onClick={goToNext}
              >
                <ChevronRight className="h-8 w-8" />
                <span className="sr-only">Next image</span>
              </Button>
            </div>

            <div className="absolute bottom-4 left-0 right-0 text-center text-white">
              {selectedImage !== null && (
                <p>
                  {selectedImage + 1} of {images.length}
                </p>
              )}
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  )
}
