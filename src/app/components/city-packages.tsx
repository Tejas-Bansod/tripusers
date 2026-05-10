"use client"

import * as React from "react"
import Image from "next/image"
import Link from "next/link"
import { ChevronLeft, ChevronRight, Info } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"

const cities = [
  { name: "Bangalore", tours: 14, departures: 37, price: "₹ 74,999", image: "https://images.pexels.com/photos/1010519/pexels-photo-1010519.jpeg?auto=compress&cs=tinysrgb&w=400" },
  { name: "Mumbai", tours: 200, departures: 642, price: "₹ 28,500", image: "https://images.pexels.com/photos/2444403/pexels-photo-2444403.jpeg?auto=compress&cs=tinysrgb&w=400" },
  { name: "Pune", tours: 19, departures: 85, price: "₹ 32,000", image: "https://images.pexels.com/photos/1659438/pexels-photo-1659438.jpeg?auto=compress&cs=tinysrgb&w=400" },
  { name: "Kolkata", tours: 102, departures: 344, price: "₹ 45,999", image: "https://images.pexels.com/photos/459225/pexels-photo-459225.jpeg?auto=compress&cs=tinysrgb&w=400" },
  { name: "Ahmedabad", tours: 102, departures: 349, price: "₹ 45,999", image: "https://images.pexels.com/photos/1878293/pexels-photo-1878293.jpeg?auto=compress&cs=tinysrgb&w=400" },
  { name: "Delhi", tours: 107, departures: 378, price: "₹ 45,999", image: "https://images.pexels.com/photos/378570/pexels-photo-378570.jpeg?auto=compress&cs=tinysrgb&w=400" },
  { name: "Chennai", tours: 45, departures: 120, price: "₹ 39,999", image: "https://images.pexels.com/photos/1007657/pexels-photo-1007657.jpeg?auto=compress&cs=tinysrgb&w=400" },
  { name: "Hyderabad", tours: 62, departures: 185, price: "₹ 34,500", image: "https://images.pexels.com/photos/1181396/pexels-photo-1181396.jpeg?auto=compress&cs=tinysrgb&w=400" },
  { name: "Jaipur", tours: 28, departures: 92, price: "₹ 22,000", image: "https://images.pexels.com/photos/3581368/pexels-photo-3581368.jpeg?auto=compress&cs=tinysrgb&w=400" },
  { name: "Lucknow", tours: 15, departures: 48, price: "₹ 19,999", image: "https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=400" },
]

export function CityPackages() {
  const plugin = React.useMemo(
    () => Autoplay({ delay: 3000, stopOnInteraction: false }),
    []
  )

  return (
    <section className="py-4 md:py-4 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <div className="mb-10 max-w-4xl">
          <h2 className="text-2xl md:text-3xl font-black text-slate-900 mb-4 leading-tight">
            Tripusers offers <span className="text-red-600">∞</span> <span className="underline decoration-slate-900 underline-offset-4">All Inclusive</span> tour packages
          </h2>
          <p className="text-slate-500 font-bold text-sm md:text-base leading-relaxed mb-6">
            No matter where you are in India or around the World, Choose from a wide range of tours, conveniently departing from your city.
          </p>
          <p className="text-[10px] md:text-xs font-black text-slate-400 uppercase tracking-widest italic">
            Explore tour packages from
          </p>
        </div>

        {/* City Carousel */}
        <div className="relative group">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            plugins={[plugin]}
            className="w-full"
          >
            <CarouselContent className="-ml-4">
              {cities.map((city, i) => (
                <CarouselItem key={i} className="pl-4 basis-[70%] sm:basis-1/3 md:basis-1/4 lg:basis-1/6">
                  <Link href={`/tours/${city.name.toLowerCase()}`} className="block group/card">
                    <div className="border border-slate-100 rounded-2xl overflow-hidden bg-white shadow-sm transition-all hover:shadow-xl hover:border-red-100 hover:-translate-y-1">
                      <div className="relative aspect-[4/3] overflow-hidden">
                        <Image
                          src={city.image}
                          alt={city.name}
                          fill
                          className="object-cover transition-transform duration-500 group-hover/card:scale-110"
                        />
                      </div>
                      <div className="p-4 space-y-2">
                        <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest">
                          Tour Packages From
                        </p>
                        <h3 className="text-lg font-black text-slate-900 group-hover/card:text-red-600 transition-colors">
                          {city.name}
                        </h3>
                        <div className="flex items-center gap-2 text-[9px] font-bold text-slate-500 uppercase tracking-tight">
                          <span>{city.tours} tours</span>
                          <span className="text-slate-200">|</span>
                          <span>{city.departures} departures</span>
                        </div>
                        <p className="text-xs font-black text-slate-900 pt-1">
                          Starts from <span className="text-red-600">{city.price}</span>
                        </p>
                      </div>
                    </div>
                  </Link>
                </CarouselItem>
              ))}
            </CarouselContent>
            
            <CarouselPrevious className="hidden md:flex -left-4 bg-white text-slate-900 border-none shadow-xl hover:bg-yellow-400" />
            <CarouselNext className="hidden md:flex -right-4 bg-white text-slate-900 border-none shadow-xl hover:bg-yellow-400" />
          </Carousel>
        </div>

        {/* Footer Info */}
        <div className="mt-12 p-6 bg-slate-50 rounded-2xl border border-slate-100">
          <div className="flex items-start gap-4">
            <div className="h-8 w-8 rounded-full bg-red-600/10 flex items-center justify-center shrink-0">
              <Info className="h-4 w-4 text-red-600" />
            </div>
            <div className="space-y-2">
              <h4 className="text-sm md:text-base font-black text-slate-900">
                Can't find tours from your city?
              </h4>
              <p className="text-xs md:text-sm font-bold text-slate-600 leading-relaxed">
                Check our <span className="text-red-600">Joining & leaving option.</span> Book your own flights and join directly at the first destination of the tour.{" "}
                <Link href="/know-more" className="text-slate-900 underline font-black hover:text-red-600 transition-colors">
                  Know more
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
