"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { Star, Trophy, Users, MapPin, Smile, ChevronLeft, ChevronRight, Quote } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"

const stats = [
  { icon: Smile, value: "9.5L+", label: "Happy guests" },
  { icon: Trophy, value: "74.2K+", label: "Tours completed" },
  { icon: Users, value: "325+", label: "Tour Experts" },
  { icon: MapPin, value: "2.5k+", label: "Tour destinations" },
]

const reviews = [
  {
    id: 1,
    title: "Best of Thailand - Pune",
    rating: 5,
    tag: "Family",
    quote: "It was a memorable international trip to Thailand. We enjoyed a lot... Tour manager Shreyas Sawant was enthusiastic and helpful all the way.",
    author: "Ashwini",
    date: "Apr, 2026",
    manager: "Shreyas Sawant",
    managerAvatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Shreyas"
  },
  {
    id: 2,
    title: "European Splendours",
    rating: 5,
    tag: "Family",
    quote: "Excellent Management, great care and an awesome experience. Would love to travel with Tripusers again and again!",
    author: "Venkataraman",
    date: "Apr, 2026",
    manager: "Kiran Jadhav",
    managerAvatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Kiran"
  },
  {
    id: 3,
    title: "Coorg Mysore Ooty",
    rating: 5,
    tag: "Customized Holidays",
    quote: "We went to Coorg, Mysore and Ooty customized tour arranged by Tripusers. It was awesome experience. Right from booking till end of tour...",
    author: "Hiren",
    date: "Apr, 2026",
    manager: "Rahul Sharma",
    managerAvatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Rahul"
  },
  {
    id: 4,
    title: "Japan Explorer",
    rating: 5,
    tag: "Cultural",
    quote: "Kyoto and Osaka were breathtaking. Everything was perfectly timed and the hotels were top-notch. Highly recommend Japan with them!",
    author: "Meera",
    date: "May, 2026",
    manager: "Satoshi Tanaka",
    managerAvatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Satoshi"
  },
  {
    id: 5,
    title: "Exotic Bali Stay",
    rating: 5,
    tag: "Honeymoon",
    quote: "Our honeymoon in Bali was like a dream. The private villas and island hopping were perfectly organized. Thank you Tripusers!",
    author: "Arjun & Sneha",
    date: "May, 2026",
    manager: "Wayan Putra",
    managerAvatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Wayan"
  },
  {
    id: 6,
    title: "Highlights of Kerala",
    rating: 5,
    tag: "Relaxation",
    quote: "The backwaters of Alleppey were so peaceful. The tour guide was very knowledgeable about the local culture. Great family trip.",
    author: "Rohan",
    date: "May, 2026",
    manager: "Anjali Nair",
    managerAvatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Anjali"
  }
]

export function Testimonials() {
  const plugin = React.useMemo(
    () => Autoplay({ delay: 4000, stopOnInteraction: false }),
    []
  )

  return (
    <section className="py-6 md:py-8 bg-slate-900 overflow-hidden rounded-[1.5rem] md:rounded-[2rem] mx-4 md:mx-8 my-4">
      <div className="container mx-auto px-4">
        {/* Header Title */}
        <h2 className="text-center text-white text-base md:text-lg font-black mb-4 md:mb-6 tracking-tight opacity-90 uppercase">
          Trusted by Tripusers guests across the World
        </h2>

        {/* Stats Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 mb-6 md:mb-8 max-w-4xl mx-auto">
          {stats.map((stat, i) => (
            <div key={i} className="flex flex-col items-center text-center space-y-1.5">
              <div className="h-8 w-8 rounded-lg bg-white/10 flex items-center justify-center border border-white/10">
                <stat.icon className="h-4 w-4 text-yellow-400" />
              </div>
              <div>
                <p className="text-lg md:text-xl font-black text-white">{stat.value}</p>
                <p className="text-[8px] md:text-[9px] font-bold text-slate-400 uppercase tracking-widest leading-none">
                  {stat.label}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Reviews Carousel */}
        <div className="relative group max-w-6xl mx-auto">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            plugins={[plugin]}
            className="w-full"
          >
            <CarouselContent className="-ml-3">
              {reviews.map((review) => (
                <CarouselItem key={review.id} className="pl-3 md:basis-1/2 lg:basis-1/3">
                  <div className="bg-white rounded-[1.2rem] md:rounded-[1.5rem] p-4 md:p-5 h-full flex flex-col justify-between shadow-2xl relative overflow-hidden group/card transition-all hover:-translate-y-1">
                    <Quote className="absolute -top-2 -right-2 h-12 w-12 text-slate-50 opacity-10 group-hover/card:opacity-20 transition-opacity" />
                    
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex gap-0.5">
                          {[...Array(review.rating)].map((_, i) => (
                            <Star key={i} className="h-2 w-2 fill-yellow-400 text-yellow-400" />
                          ))}
                        </div>
                        <Badge variant="outline" className="text-[7px] font-black border-red-200 text-red-600 bg-red-50 py-0 uppercase px-1">
                          {review.tag}
                        </Badge>
                      </div>

                      <button className="text-[8px] font-black text-slate-400 uppercase tracking-widest underline mb-1.5 hover:text-red-600 transition-colors text-left">
                        Upcoming Tour Dates
                      </button>
                      
                      <h3 className="text-[14px] md:text-base font-black text-slate-900 mb-1.5 md:mb-2 leading-tight line-clamp-1">
                        {review.title}
                      </h3>
                      
                      <p className="text-[12px] font-medium text-slate-500 leading-snug italic line-clamp-2 mb-3">
                        "{review.quote}"
                      </p>
                      
                      <button className="text-[8px] font-black text-slate-900 uppercase tracking-widest underline hover:text-red-600 transition-colors">
                        Read more
                      </button>
                    </div>

                    <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between">
                      <div>
                        <p className="text-[11px] font-black text-slate-900">{review.author}</p>
                        <p className="text-[8px] font-bold text-slate-400">{review.date}</p>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Avatar className="h-7 w-7 border border-slate-100 shadow-sm">
                          <AvatarImage src={review.managerAvatar} />
                          <AvatarFallback className="bg-red-50 text-red-600 font-bold text-[8px]">
                            {review.manager.charAt(0)}
                          </AvatarFallback>
                        </Avatar>
                        <div className="hidden sm:block">
                          <p className="text-[8px] font-black text-slate-400 uppercase tracking-widest leading-none mb-0.5">Manager</p>
                          <p className="text-[10px] font-black text-slate-900 whitespace-nowrap">{review.manager}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            
            <CarouselPrevious className="hidden md:flex -left-3 bg-white text-slate-900 border-none shadow-md h-8 w-8 hover:bg-yellow-400" />
            <CarouselNext className="hidden md:flex -right-3 bg-white text-slate-900 border-none shadow-md h-8 w-8 hover:bg-yellow-400" />
          </Carousel>
        </div>

        {/* Footer Button */}
        <div className="flex justify-center mt-6 md:mt-8">
          <Button className="bg-yellow-400 hover:bg-yellow-500 text-slate-900 font-black px-6 py-4 md:py-5 h-auto rounded-lg shadow-md shadow-yellow-400/20 transition-all hover:-translate-y-1 uppercase tracking-widest text-[9px] border-none">
            Read 15K+ Reviews
          </Button>
        </div>
      </div>
    </section>
  )
}
