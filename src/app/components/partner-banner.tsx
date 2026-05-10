"use client"

import * as React from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"

const partners = [
  {
    title: "Book Experiences, Attractions, Activities in Malaysia & Beyond.",
    subtitle: "Malaysia Airlines brings you epic adventures in partnership with Tripusers.",
    image: "https://images.pexels.com/photos/2341830/pexels-photo-2341830.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    logo: "https://upload.wikimedia.org/wikipedia/en/thumb/4/41/Malaysia_Airlines_Logo.svg/1200px-Malaysia_Airlines_Logo.svg.png",
    buttonText: "Explore Tours"
  },
  {
    title: "Fly to the heart of Europe with Swiss International Air Lines.",
    subtitle: "Experience luxury in the clouds and discover the beauty of the Alps.",
    image: "https://images.pexels.com/photos/1461974/pexels-photo-1461974.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/Swiss_International_Air_Lines_Logo.svg/2560px-Swiss_International_Air_Lines_Logo.svg.png",
    buttonText: "Book Swiss Escapes"
  }
]

export function PartnerBanner() {
  const plugin = React.useMemo(
    () => Autoplay({ delay: 5000, stopOnInteraction: false }),
    []
  )

  return (
    <section className="py-4 md:py-4 bg-white overflow-hidden">
      <div className="container mx-auto px-4 md:px-8">
        <Carousel
          opts={{ loop: true }}
          plugins={[plugin]}
          className="w-full rounded-[1.5rem] md:rounded-[2.5rem] overflow-hidden shadow-2xl"
        >
          <CarouselContent className="m-0">
            {partners.map((partner, i) => (
              <CarouselItem key={i} className="p-0 relative h-[250px] md:h-[300px]">
                {/* Background Image */}
                <Image
                  src={partner.image}
                  alt={partner.title}
                  fill
                  className="object-cover"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-slate-900/80 via-slate-900/40 to-transparent" />

                {/* Content Container */}
                <div className="relative h-full container mx-auto px-6 md:px-16 flex flex-col justify-center">
                  <div className="max-w-2xl space-y-4">
                    <motion.h2 
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      className="text-xl md:text-3xl font-black text-white leading-tight"
                    >
                      {partner.title}
                    </motion.h2>
                    <motion.p 
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 }}
                      className="text-xs md:text-sm font-bold text-slate-300 max-w-lg"
                    >
                      {partner.subtitle}
                    </motion.p>
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 }}
                    >
                      <Button className="bg-yellow-400 hover:bg-yellow-500 text-slate-900 font-black px-8 py-5 md:py-6 h-auto rounded-xl shadow-xl shadow-yellow-400/20 uppercase tracking-widest text-[10px] border-none group transition-all">
                        {partner.buttonText}
                        <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </motion.div>
                  </div>
                </div>

                {/* Progress Indicator */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                  {partners.map((_, idx) => (
                    <div 
                      key={idx}
                      className={`h-1 rounded-full transition-all duration-300 ${
                        i === idx ? "w-8 bg-yellow-400" : "w-2 bg-white/30"
                      }`}
                    />
                  ))}
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          
          <CarouselPrevious className="left-4 bg-white/10 backdrop-blur-md text-white border-white/20 hover:bg-yellow-400 hover:text-slate-900 hover:border-none opacity-0 group-hover:opacity-100 transition-opacity" />
          <CarouselNext className="right-4 bg-white/10 backdrop-blur-md text-white border-white/20 hover:bg-yellow-400 hover:text-slate-900 hover:border-none opacity-0 group-hover:opacity-100 transition-opacity" />
        </Carousel>
      </div>
    </section>
  )
}
