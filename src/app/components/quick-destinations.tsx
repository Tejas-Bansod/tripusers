"use client"

import React from "react"
import Link from "next/link"
import Image from "next/image"
import Autoplay from "embla-carousel-autoplay"
import { cn } from "@/lib/utils"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

const destinations = [
  { name: "Europe", tours: 186, image: "https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg?auto=compress&cs=tinysrgb&w=400" },
  { name: "South East Asia", tours: 71, image: "https://images.pexels.com/photos/1659438/pexels-photo-1659438.jpeg?auto=compress&cs=tinysrgb&w=400" },
  { name: "Japan China", tours: 20, image: "https://images.pexels.com/photos/402028/pexels-photo-402028.jpeg?auto=compress&cs=tinysrgb&w=400" },
  { name: "Australia", tours: 42, image: "https://images.pexels.com/photos/1878293/pexels-photo-1878293.jpeg?auto=compress&cs=tinysrgb&w=400" },
  { name: "Africa", tours: 24, image: "https://images.pexels.com/photos/459225/pexels-photo-459225.jpeg?auto=compress&cs=tinysrgb&w=400" },
  { name: "America", tours: 42, image: "https://images.pexels.com/photos/378570/pexels-photo-378570.jpeg?auto=compress&cs=tinysrgb&w=400" },
  { name: "Jammu and Kashmir", tours: 25, image: "https://images.pexels.com/photos/2444403/pexels-photo-2444403.jpeg?auto=compress&cs=tinysrgb&w=400" },
  { name: "Leh Ladakh", tours: 25, image: "https://images.pexels.com/photos/1010519/pexels-photo-1010519.jpeg?auto=compress&cs=tinysrgb&w=400" },
  { name: "Sikkim Darjeeling", tours: 11, image: "https://images.pexels.com/photos/2356045/pexels-photo-2356045.jpeg?auto=compress&cs=tinysrgb&w=400" },
  { name: "North East", tours: 14, image: "https://images.pexels.com/photos/547115/pexels-photo-547115.jpeg?auto=compress&cs=tinysrgb&w=400" },
  { name: "Kerala", tours: 22, image: "https://images.pexels.com/photos/1450360/pexels-photo-1450360.jpeg?auto=compress&cs=tinysrgb&w=400" },
  { name: "Andaman", tours: 6, image: "https://images.pexels.com/photos/1078983/pexels-photo-1078983.jpeg?auto=compress&cs=tinysrgb&w=400" },
]

export function QuickDestinations() {
  const plugin = React.useMemo(
    () => Autoplay({ delay: 3000, stopOnInteraction: false }),
    []
  )

  return (
    <section className="w-full py-4 bg-white overflow-hidden">
      <div className="container mx-auto px-4 md:px-12 relative group">
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          plugins={[plugin]}
          className="w-full"
        >
          <CarouselContent className="-ml-2 md:-ml-4">
            {destinations.map((dest, i) => (
              <CarouselItem key={i} className="pl-2 md:pl-4 basis-1/3 sm:basis-1/4 md:basis-1/6 lg:basis-[11.11%]">
                <Link 
                  href={`/destinations/${dest.name.toLowerCase().replace(/\s+/g, '-')}`}
                  className="flex flex-col items-center gap-3 group/item"
                >
                  <div className="relative w-20 h-20 md:w-24 md:h-24 rounded-full overflow-hidden shadow-sm border-2 border-white group-hover/item:border-red-600 transition-all duration-300">
                    <Image
                      src={dest.image}
                      alt={dest.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover/item:scale-110"
                    />
                  </div>
                  <div className="text-center space-y-0.5">
                    <p className="text-[10px] md:text-xs font-black text-slate-900 uppercase tracking-tight group-hover/item:text-red-600 transition-colors truncate w-full px-1">
                      {dest.name}
                    </p>
                    <p className="text-[9px] md:text-[10px] font-bold text-slate-400 uppercase tracking-widest opacity-80 group-hover/item:text-red-500 transition-colors">
                      {dest.tours} Tours
                    </p>
                  </div>
                </Link>
              </CarouselItem>
            ))}
          </CarouselContent>
          
          <div className="hidden md:block">
            <CarouselPrevious className="left-[-20px] bg-white text-slate-900 border-slate-100 shadow-lg hover:bg-red-600 hover:text-white transition-all opacity-0 group-hover:opacity-100" />
            <CarouselNext className="right-[-20px] bg-white text-slate-900 border-slate-100 shadow-lg hover:bg-red-600 hover:text-white transition-all opacity-0 group-hover:opacity-100" />
          </div>
        </Carousel>
      </div>
    </section>
  )
}
