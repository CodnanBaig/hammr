import { Metadata } from "next"
import Image from "next/image"
import { 
  Activity, 
  Armchair, 
  Hand, 
  Move, 
  Bone, 
  Footprints, 
  ChevronRight 
} from "lucide-react"

export const metadata: Metadata = {
  title: "Who is Online Physiotherapy For? | Hammr Sports Physiotherapy",
  description: "Discover if online physiotherapy is right for you. Learn about the conditions we treat and who can benefit from our virtual physiotherapy services.",
}

export default function WhoIsItFor() {
  const bodyRegions = [
    {
      title: "Back and Neck",
      icon: Activity,
      conditions: [
        "Back strain / spasm",
        "Wry neck",
        "Spinal canal stenosis",
        "Mechanical low back pain",
        "Tailbone pain / coccyxdynia",
        "SI joint dysfunction / sacroiliac joint pain",
        "Postural back pain",
        "Medial scapula pain / Claude's syndrome",
        "Sciatic pain"
      ]
    },
    {
      title: "Shoulder and Elbow",
      icon: Armchair,
      conditions: [
        "Adhesive capsulitis / frozen shoulder",
        "Rotator cuff tears",
        "Shoulder instability / dislocations",
        "AC joint strains / injury",
        "Biceps tendinopathy",
        "Biceps tendon tear",
        "Tennis elbow",
        "Radial head fractures"
      ]
    },
    {
      title: "Wrist and Fingers",
      icon: Hand,
      conditions: [
        "Skier's thumb injury",
        "Scaphoid fracture",
        "Metatarsal fractures",
        "Finger injuries"
      ]
    },
    {
      title: "Hip and Leg",
      icon: Move,
      conditions: [
        "Hip joint labrum tears / impingement injuries",
        "Gluteal tendinopathy",
        "Hamstring tendinopathy",
        "Groin pain",
        "Adductor muscle strain",
        "Quadriceps strain",
        "Hamstrings muscle strain",
        "Calf sprain",
        "Shin splints"
      ]
    },
    {
      title: "Knee Injury",
      icon: Bone,
      conditions: [
        "ACL injuries",
        "Meniscal injuries",
        "MCL injuries",
        "Patella subluxation / dislocation",
        "Osteochondral disse",
        "Patellofemoral pain",
        "Patella tendinopathy",
        "Osgoodschlatters injury",
        "ITB / runners knee pain",
        "Pre and Post-operative ACL Rehabilitation",
        "Patella fracture",
        "Patella tendon rupture rehabilitation"
      ]
    },
    {
      title: "Ankle and Foot Injury",
      icon: Footprints,
      conditions: [
        "Ankle sprain / fibula avulsion fractures",
        "Plantar fasciitis",
        "Lisfranc injury",
        "Stress fractures",
        "Cuboid syndrome",
        "Sever's disease"
      ]
    }
  ]

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full py-20 md:py-28 lg:py-36 overflow-hidden bg-gradient-to-r from-teal-900 to-teal-700 text-white">
        <div className="absolute inset-0 opacity-10">
          <Image src="/interconnected-healing.png" alt="Background pattern" fill className="object-cover" />
        </div>
        <div className="container relative px-4 md:px-6 z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none mb-6">
              Who is Online Physiotherapy For?
            </h1>
            <p className="text-xl text-teal-100 mb-8 max-w-2xl mx-auto">
              Whether you're an athlete, office worker, or someone dealing with chronic pain, our online physiotherapy services are designed to help you achieve your health and wellness goals from the comfort of your home.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="container py-12 md:py-16">
        <div className="max-w-5xl mx-auto">
          <div className="prose prose-lg max-w-none">
            <div className="space-y-8">
              <section>
                <h2 className="text-2xl font-semibold text-white-700 mb-8 text-center">Conditions We Treat</h2>
                
                <div className="grid md:grid-cols-2 gap-6">
                  {bodyRegions.map((region, index) => (
                    <div 
                      key={index}
                      className="group relative bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden border border-teal-100"
                    >
                      <div className="absolute inset-0 bg-gradient-to-br from-teal-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      
                      <div className="p-6">
                        <div className="flex items-center gap-4 mb-4">
                          <div className="w-12 h-12 rounded-lg bg-teal-100 flex items-center justify-center text-teal-700 group-hover:scale-110 transition-transform duration-300">
                            <region.icon className="w-6 h-6" />
                          </div>
                          <h3 className="text-xl font-semibold text-teal-800">{region.title}</h3>
                        </div>
                        
                        <div className="space-y-2">
                          {region.conditions.map((condition, idx) => (
                            <div 
                              key={idx}
                              className="flex items-center gap-2 text-gray-600 group/item hover:text-teal-700 transition-colors duration-200"
                            >
                              <ChevronRight className="w-4 h-4 text-teal-500 opacity-0 group-hover:opacity-100 group-hover/item:opacity-100 transition-opacity duration-200" />
                              <span className="text-sm">{condition}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            </div>

            <div className="mt-12 p-6 bg-teal-50 rounded-lg">
              <h2 className="text-2xl font-semibold text-teal-700 mb-4">Not Sure If Online Physiotherapy is Right for You?</h2>
              <p className="text-gray-600 mb-4">
                We understand that online physiotherapy might be new to you. That's why we offer a free 15-minute consultation to discuss your needs and determine if our virtual services are the right fit for your situation.
              </p>
              <a 
                href="/contact" 
                className="inline-block bg-teal-600 text-white px-6 py-3 rounded-md hover:bg-teal-700 transition-colors"
              >
                Book a Free Consultation
              </a>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
} 