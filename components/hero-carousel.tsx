"use client"

import { ChevronLeft, ChevronRight } from "lucide-react"
import Image from "next/image"
import { useCallback, useEffect, useRef, useState } from "react"
import useEmblaCarousel from "embla-carousel-react"
import { Button } from "./ui/button"

const images = [

    { 
        src: "/hero-carousel-images/IMG_8488.jpg", 
        alt: " Sports physiotherapist  ,  T-20 world cup cricket , Australian Cricket team playing against Nepal in Delhi , Dec 2022",
        caption: " Sports physiotherapist  ,  T-20 world cup cricket , Australian Cricket team playing against Nepal in Delhi , Dec 2022"
    },
    { 
        src: "/hero-carousel-images/IMG_8506.jpg", 
        alt: "With the captain of the vision impaired Australian Cricket team in Indore playing against India, December 2022",
        caption: "With the captain of the vision impaired Australian Cricket team in Indore playing against India, December 2022"
    },
    { 
        src: "/hero-carousel-images/IMG_8413.jpg", 
        alt: "T-20 Cricket World Cup in India, December 2022 - Sports Physiotherapist to the Australian Men's Vision Impaired team",
        caption: "T-20 Cricket World Cup in India, December 2022 - Sports Physiotherapist to the Australian Men's Vision Impaired team"
    },
    { 
        src: "/hero-carousel-images/IMG_3064.JPG", 
        alt: "Treating actor Dev Patel while he was shooting in Australia in 2015",
        caption: "Treating actor Dev Patel while he was shooting in Australia in 2015"
    },
    { 
        src: "/hero-carousel-images/IMG_4718.JPG", 
        alt: "Sports Physiotherapist for the Australian Pearls team at the Global Games - International Championship for Basketball ID teams",
        caption: "Sports Physiotherapist for the Australian Pearls team at the Global Games - International Championship for Basketball ID teams"
    },
    { 
        src: "/hero-carousel-images/IMG_1527.jpg", 
        alt: "Global Games - International Basketball Championship for ID teams around the world (Intellectual Disability), October 2019 - Sports Physiotherapist to the Australian Pearls (Girl ID Basketball team)",
        caption: "Global Games - International Basketball Championship for ID teams around the world (Intellectual Disability), October 2019 - Sports Physiotherapist to the Australian Pearls (Girl ID Basketball team)"
    },
    { 
        src: "/hero-carousel-images/IMG_0237.JPG", 
        alt: "National Basketball Championship, April 2024, Brisbane - Sports Physiotherapist to the Victorian Wheelchair Basketball team",
        caption: "National Basketball Championship, April 2024, Brisbane - Sports Physiotherapist to the Victorian Wheelchair Basketball team"
    },
    { 
        src: "/hero-carousel-images/IMG_2278.JPG", 
        alt: "National Basketball championship April 2024 , Brisbane , Sports physiotherapist to the Victorian Wheelchair Basketball team ",
        caption: "National Basketball championship April 2024 , Brisbane , Sports physiotherapist to the Victorian Wheelchair Basketball team "
    },
    { 
        src: "/Hammer-Images/IMG_8447.JPG", 
        alt: "With cricketer Yuvraj Singh. Dec 2022 for T-20 World cup",
        caption: "National Basketball championship April 2024 , Brisbane , Sports physiotherapist to the Victorian Wheelchair Basketball team "
    },
    { 
        src: "/hero-carousel-images/IMG_9647.JPG", 
        alt: "Ivorburge basketball National Championship Boys Team  - Canberra, Australian Institute of Sport, 2019",
        caption: "Ivorburge basketball National Championship Boys Team  - Canberra, Australian Institute of Sport, 2019"
    },
]

export default function HeroCarousel() {
    const [emblaRef, emblaApi] = useEmblaCarousel({ 
        loop: true,
        align: 'center',
        skipSnaps: false,
    })
    const carouselContainerRef = useRef<HTMLDivElement>(null)
    const [prevBtnEnabled, setPrevBtnEnabled] = useState(false)
    const [nextBtnEnabled, setNextBtnEnabled] = useState(false)

    const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi])
    const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi])

    const onSelect = useCallback(() => {
        if (!emblaApi) return
        setPrevBtnEnabled(emblaApi.canScrollPrev())
        setNextBtnEnabled(emblaApi.canScrollNext())
    }, [emblaApi])

    useEffect(() => {
        if (!emblaApi) return
        onSelect()
        emblaApi.on("select", onSelect)
        emblaApi.on("reInit", onSelect)

        // Autoplay with pause on hover
        let autoplayInterval: NodeJS.Timeout
        const startAutoplay = () => {
            autoplayInterval = setInterval(() => {
                if (emblaApi.canScrollNext()) {
                    emblaApi.scrollNext()
                } else {
                    emblaApi.scrollTo(0)
                }
            }, 5000)
        }

        const stopAutoplay = () => {
            clearInterval(autoplayInterval)
        }

        const carouselElement = carouselContainerRef.current
        if (carouselElement) {
            carouselElement.addEventListener('mouseenter', stopAutoplay)
            carouselElement.addEventListener('mouseleave', startAutoplay)
            startAutoplay()
        }

        return () => {
            emblaApi.off("select", onSelect)
            emblaApi.off("reInit", onSelect)
            if (carouselElement) {
                carouselElement.removeEventListener('mouseenter', stopAutoplay)
                carouselElement.removeEventListener('mouseleave', startAutoplay)
            }
            clearInterval(autoplayInterval)
        }
    }, [emblaApi, onSelect])

    return (
        <div className="relative w-full max-w-[550px] mx-auto" ref={carouselContainerRef}>
            <div className="overflow-hidden rounded-xl" ref={emblaRef}>
                <div className="flex">
                    {images.map((image, index) => (
                        <div key={index} className="flex-[0_0_100%] min-w-0">
                            <div className="relative w-full aspect-[4/3] sm:aspect-square">
                                <Image
                                    src={image.src}
                                    alt={image.alt}
                                    fill
                                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 550px"
                                    className="object-cover"
                                    priority={index === 0}
                                />
                                <div className="absolute bottom-0 left-0 right-0 bg-black/60 p-3">
                                    <p className="text-sm text-white text-center">
                                        {image.caption}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <Button
                variant="ghost"
                size="icon"
                className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full shadow-lg z-10 h-8 w-8 sm:h-10 sm:w-10 transition-opacity duration-200"
                onClick={scrollPrev}
                disabled={!prevBtnEnabled}
            >
                <ChevronLeft className="h-4 w-4 sm:h-5 sm:w-5" />
            </Button>
            <Button
                variant="ghost"
                size="icon"
                className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full shadow-lg z-10 h-8 w-8 sm:h-10 sm:w-10 transition-opacity duration-200"
                onClick={scrollNext}
                disabled={!nextBtnEnabled}
            >
                <ChevronRight className="h-4 w-4 sm:h-5 sm:w-5" />
            </Button>
        </div>
    )
} 