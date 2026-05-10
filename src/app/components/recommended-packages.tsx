"use client"

import * as React from "react"
import Image from "next/image"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { Card, CardContent } from "@/components/ui/card"
import { cn } from "@/lib/utils"

const statData = [
  { 
    label: "International packages", 
    sequence: ["800 +", "950 +", "1000 +"] 
  },
  { 
    label: "Domestic packages", 
    sequence: ["150 +", "250 +", "300 +"] 
  },
  { 
    label: "Trusted Hotels", 
    sequence: ["1000 +", "2500 +", "3000 +"] 
  },
]

import { motion, AnimatePresence } from "framer-motion"

function RollingStat({ label, sequence }: { label: string, sequence: string[] }) {
  const [index, setIndex] = React.useState(0)

  React.useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % sequence.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [sequence.length])

  return (
    <div className="flex items-center gap-6 group">
      <div className="h-10 md:h-14 overflow-hidden relative min-w-[3.5em] md:min-w-[4.5em] flex items-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            transition={{ 
              duration: 0.6, 
              ease: [0.23, 1, 0.32, 1] // Custom quintic ease-out
            }}
            className="text-3xl md:text-5xl font-black text-red-600 tracking-tighter"
          >
            {sequence[index]}
          </motion.div>
        </AnimatePresence>
      </div>
      <div className="text-sm md:text-[15px] font-bold text-slate-500 uppercase tracking-widest leading-none">
        {label}
      </div>
    </div>
  )
}

const packages = [
  {
    title: "Andaman",
    subtitle: "- Buy 1 Get 1 Free",
    price: "49 999",
    image: "https://images.pexels.com/photos/1645028/pexels-photo-1645028.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    title: "Bali Split Stay",
    subtitle: "Buy 1 Get 1 Free",
    price: "35 136",
    image: "https://images.pexels.com/photos/2166559/pexels-photo-2166559.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    title: "Classic Thailand",
    subtitle: "",
    price: "39 439",
    image: "https://images.pexels.com/photos/1007657/pexels-photo-1007657.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    title: "Maldives Luxury",
    subtitle: "- Special Discount",
    price: "89 000",
    image: "https://images.pexels.com/photos/1450360/pexels-photo-1450360.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    title: "European Escape",
    subtitle: "- Best Seller",
    price: "1 25 000",
    image: "https://images.pexels.com/photos/1010639/pexels-photo-1010639.jpeg?auto=compress&cs=tinysrgb&w=600",
  }
]

export function RecommendedPackages() {
  return (
    <section className="py-8 md:py-8 bg-slate-50/50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Stats Column */}
          <div className="lg:col-span-4 space-y-10 text-center lg:text-left">
            <h2 className="text-3xl md:text-5xl font-black text-slate-800 leading-tight">
              Recommended <br className="hidden lg:block" /> Packages
            </h2>
            
            <div className="space-y-6 md:space-y-8 flex flex-col items-center lg:items-start">
              {statData.map((stat, i) => (
                <RollingStat key={i} label={stat.label} sequence={stat.sequence} />
              ))}
            </div>
          </div>

          {/* Right Carousel Column */}
          <div className="lg:col-span-8 relative group">
            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              className="w-full"
            >
              <CarouselContent className="-ml-4">
                {packages.map((pkg, index) => (
                  <CarouselItem key={index} className="pl-4 basis-[85%] sm:basis-1/2 lg:basis-1/3">
                    <div className="group/card cursor-pointer">
                      <div className="relative aspect-[4/5] rounded-[1.5rem] md:rounded-[2rem] overflow-hidden mb-4 shadow-xl border border-white/20">
                        <Image
                          src={pkg.image}
                          alt={pkg.title}
                          fill
                          className="object-cover transition-transform duration-700 group-hover/card:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity" />
                      </div>
                      
                      <div className="space-y-1 px-1">
                        <h3 className="text-lg md:text-xl font-black text-slate-900 leading-none group-hover/card:text-red-600 transition-colors">
                          {pkg.title}
                        </h3>
                        {pkg.subtitle && (
                          <p className="text-xs md:text-sm font-bold text-slate-500">
                            {pkg.subtitle}
                          </p>
                        )}
                        <div className="pt-2 flex items-center justify-between">
                          <span className="text-[9px] md:text-[10px] font-black text-slate-400 uppercase tracking-widest">Starting from</span>
                          <span className="text-base md:text-lg font-black text-slate-900">
                            ₹ {pkg.price}
                          </span>
                        </div>
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              
              {/* Custom Positioned Navigation - Consistent with other sections */}
              <div className="hidden md:block">
                <CarouselPrevious className="absolute -left-6 top-1/2 -translate-y-1/2 h-12 w-12 bg-white text-slate-900 border-none shadow-xl hover:bg-yellow-400 hover:text-slate-900 transition-all opacity-0 group-hover:opacity-100" />
                <CarouselNext className="absolute -right-6 top-1/2 -translate-y-1/2 h-12 w-12 bg-white text-slate-900 border-none shadow-xl hover:bg-yellow-400 hover:text-slate-900 transition-all opacity-0 group-hover:opacity-100" />
              </div>
              
              {/* Mobile Controls */}
              <div className="flex justify-center gap-3 mt-8 md:hidden">
                <CarouselPrevious className="static h-10 w-10 translate-y-0 bg-white shadow-md border-none" />
                <CarouselNext className="static h-10 w-10 translate-y-0 bg-white shadow-md border-none" />
              </div>
            </Carousel>
          </div>

        </div>
      </div>
    </section>
  )
}
