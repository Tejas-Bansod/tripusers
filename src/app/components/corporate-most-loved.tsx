"use client"

import * as React from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { Users, Star, ArrowRight, Heart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"

const corporateImages = [
  "https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=600",
  "https://images.pexels.com/photos/1181396/pexels-photo-1181396.jpeg?auto=compress&cs=tinysrgb&w=600",
  "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=600",
]

const lovedTours = [
  { title: "Best of Kashmir", price: "₹ 24,999", guests: "17.7k", image: "https://images.pexels.com/photos/2444403/pexels-photo-2444403.jpeg?auto=compress&cs=tinysrgb&w=400" },
  { title: "Highlights of Kerala", price: "₹ 18,500", guests: "10.6k", image: "https://images.pexels.com/photos/1450360/pexels-photo-1450360.jpeg?auto=compress&cs=tinysrgb&w=400" },
  { title: "Best of Andaman", price: "₹ 32,000", guests: "8k", image: "https://images.pexels.com/photos/1078983/pexels-photo-1078983.jpeg?auto=compress&cs=tinysrgb&w=400" },
  { title: "Shimla Manali", price: "₹ 15,999", guests: "9.1k", image: "https://images.pexels.com/photos/2356045/pexels-photo-2356045.jpeg?auto=compress&cs=tinysrgb&w=400" },
  { title: "Singapore Thailand", price: "₹ 85,000", guests: "29k", image: "https://images.pexels.com/photos/1007657/pexels-photo-1007657.jpeg?auto=compress&cs=tinysrgb&w=400" },
  { title: "Best of Thailand", price: "₹ 45,000", guests: "24.3k", image: "https://images.pexels.com/photos/2166559/pexels-photo-2166559.jpeg?auto=compress&cs=tinysrgb&w=400" },
  { title: "European Jewels", price: "₹ 2,10,000", guests: "12.1k", image: "https://images.pexels.com/photos/1461974/pexels-photo-1461974.jpeg?auto=compress&cs=tinysrgb&w=400" },
  { title: "Singapore Malaysia", price: "₹ 72,000", guests: "14.7k", image: "https://images.pexels.com/photos/2341830/pexels-photo-2341830.jpeg?auto=compress&cs=tinysrgb&w=400" },
]

export function CorporateAndMostLoved() {
  const plugin = React.useMemo(
    () => Autoplay({ delay: 3000, stopOnInteraction: false }),
    []
  )

  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-8">
          
          {/* Left Side: Corporate Tours */}
          <div className="lg:w-[35%] bg-slate-900 rounded-[2.5rem] overflow-hidden flex flex-col relative group">
            <div className="p-8 md:p-10 flex-1">
              <h2 className="text-3xl md:text-4xl font-black text-yellow-400 leading-tight mb-4 uppercase tracking-tighter">
                Corporate <br /> Tours <span className="text-white opacity-50">(MICE)</span>
              </h2>
              <p className="text-slate-300 font-bold text-sm md:text-base leading-relaxed mb-8 max-w-[280px]">
                End-to-end travel for your teams, clients & partners.
              </p>
              
              <div className="relative aspect-video rounded-3xl overflow-hidden mb-8 border-4 border-slate-800">
                <Carousel
                  opts={{ loop: true }}
                  plugins={[plugin]}
                  className="w-full h-full"
                >
                  <CarouselContent className="m-0 h-full">
                    {corporateImages.map((img, i) => (
                      <CarouselItem key={i} className="p-0 h-full">
                        <div className="relative w-full h-full">
                          <Image
                            src={img}
                            alt="Corporate Tour"
                            fill
                            className="object-cover"
                          />
                        </div>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                </Carousel>
              </div>

              <div className="space-y-4">
                <Button className="w-full bg-yellow-400 hover:bg-yellow-500 text-slate-900 font-black py-6 rounded-2xl shadow-xl shadow-yellow-400/10 uppercase tracking-widest text-xs border-none transition-all hover:-translate-y-1">
                  Plan Your Corporate Tour
                </Button>
                <div className="flex items-center justify-center gap-2 text-[10px] font-black text-slate-400 uppercase tracking-widest">
                  <Users className="h-3 w-3" />
                  Trusted by 50+ corporates
                </div>
              </div>
            </div>
            

          </div>

          {/* Right Side: Most Loved */}
          <div className="lg:w-[65%] bg-slate-50/50 border border-slate-100 rounded-[2.5rem] p-8 md:p-10">
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-10 gap-4">
              <div className="flex items-start gap-4">
                <div className="h-12 w-12 rounded-2xl bg-white shadow-md flex items-center justify-center border border-slate-100">
                  <Heart className="h-6 w-6 text-red-600 fill-red-600" />
                </div>
                <div>
                  <h2 className="text-2xl md:text-3xl font-black text-slate-900 leading-tight">
                    Most Loved by Our Guests
                  </h2>
                  <p className="text-slate-500 font-bold text-sm">
                    <span className="text-red-600">1,25,585</span> guest's have travelled so far.
                  </p>
                </div>
              </div>
              <Button variant="ghost" className="text-red-600 font-black uppercase tracking-widest text-[10px] hover:bg-red-50 hover:text-red-700">
                View All <ArrowRight className="h-3 w-3 ml-2" />
              </Button>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {lovedTours.map((tour, i) => (
                <motion.div
                  key={i}
                  whileHover={{ y: -5 }}
                  className="group cursor-pointer"
                >
                  <div className="relative aspect-[4/3] rounded-2xl overflow-hidden mb-3 shadow-md border border-white">
                    <Image
                      src={tour.image}
                      alt={tour.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute top-2 left-2">
                      <Badge className="bg-black/60 backdrop-blur-md text-white border-none text-[9px] font-bold px-2 py-0.5">
                        From {tour.price}
                      </Badge>
                    </div>
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-xs md:text-[13px] font-black text-slate-900 leading-tight group-hover:text-red-600 transition-colors line-clamp-1">
                      {tour.title}
                    </h3>
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-tight">
                      {tour.guests} guests travelled
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
