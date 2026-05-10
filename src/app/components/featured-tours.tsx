"use client"

import * as React from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { Star, Clock, Calendar, ShieldCheck, MapPin, ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"

const featuredTours = [
  {
    id: 1,
    title: "European Splendors",
    cities: "Paris | Lucerne | Venice | Rome",
    happyTravellers: "12L+ Happy Travellers",
    price: "₹ 2,49,999",
    priceSubtitle: "/adult on twin sharing",
    tag: "Best Seller 2024",
    features: ["Global Flights", "4-Star Hotels", "All Meals", "City Tours", "Visa Assistance"],
    duration: "12 Days",
    dates: "22 Jun, 05 Jul, 18 Aug",
    image: "https://images.pexels.com/photos/1461974/pexels-photo-1461974.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    id: 2,
    title: "Exotic Bali Retreat",
    cities: "Ubud | Seminyak | Nusa Penida",
    happyTravellers: "8L+ Happy Travellers",
    price: "₹ 1,19,000",
    priceSubtitle: "/adult on twin sharing",
    tag: "Buy 1 Get 1 Free",
    features: ["Resort Stay", "Private Villa", "Daily Breakfast", "Island Hopping", "Airport Transfers"],
    duration: "7 Days",
    dates: "Weekly Departures",
    image: "https://images.pexels.com/photos/2166559/pexels-photo-2166559.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    id: 3,
    title: "Swiss Alps Adventure",
    cities: "Zurich | Interlaken | Lucerne",
    happyTravellers: "5L+ Happy Travellers",
    price: "₹ 1,85,500",
    priceSubtitle: "/adult on twin sharing",
    tag: "Limited Time Offer",
    features: ["Mountain Train", "Skiing Lessons", "Luxury Chalet", "Cheese Tasting", "Lake Cruise"],
    duration: "8 Days",
    dates: "10 Jul, 15 Aug",
    image: "https://images.pexels.com/photos/2341830/pexels-photo-2341830.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  }
]

export function FeaturedTours() {
  const [currentIndex, setCurrentIndex] = React.useState(0)
  const [direction, setDirection] = React.useState(0)

  const tour = featuredTours[currentIndex]

  React.useEffect(() => {
    const timer = setInterval(() => {
      handleNext()
    }, 6000)
    return () => clearInterval(timer)
  }, [currentIndex])

  const handleNext = () => {
    setDirection(1)
    setCurrentIndex((prev) => (prev + 1) % featuredTours.length)
  }

  const handlePrev = () => {
    setDirection(-1)
    setCurrentIndex((prev) => (prev - 1 + featuredTours.length) % featuredTours.length)
  }

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    })
  }

  return (
    <section className="py-8 bg-slate-50 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="relative">
          <AnimatePresence initial={false} custom={direction} mode="wait">
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 }
              }}
            >
              <Card className="border-none bg-white p-0 shadow-[0_32px_64px_-12px_rgba(0,0,0,0.08)] rounded-[2rem] md:rounded-[2.5rem] overflow-hidden group min-h-0 lg:min-h-[500px]">
                <CardContent className="p-0 flex flex-col-reverse lg:flex-row">
                  {/* Content Side */}
                  <div className="flex-1 p-5 md:p-12 lg:p-16 relative flex flex-col justify-between">
                    <div>
                      <div className="flex items-center gap-2 md:gap-3 mb-6 md:mb-8">
                        <div className="flex items-center bg-yellow-400/10 text-yellow-700 px-2 py-0.5 md:px-3 md:py-1 rounded-full text-[10px] md:text-xs font-black border border-yellow-400/20">
                          <Star className="h-2.5 w-2.5 md:h-3 md:w-3 mr-1 md:mr-1.5 fill-yellow-500" />
                          {tour.happyTravellers}
                        </div>
                        <Badge className="bg-red-600 hover:bg-red-700 text-white border-none font-bold uppercase text-[8px] md:text-[10px] px-1.5 py-0 md:px-2 md:py-0.5">
                          {tour.tag}
                        </Badge>
                      </div>

                      <div className="mb-6 md:mb-10">
                        <div className="flex items-center gap-1.5 md:gap-2 text-slate-400 font-bold uppercase tracking-[0.1em] md:tracking-[0.2em] text-[9px] md:text-xs mb-2 md:mb-3">
                          <MapPin className="h-3 md:h-3.5 w-3 md:w-3.5 text-red-600" />
                          {tour.cities}
                        </div>
                        <h3 className="text-2xl md:text-5xl font-black text-slate-900 leading-tight md:leading-none tracking-tighter">
                          {tour.title}
                        </h3>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 md:gap-4 mb-8 md:mb-10">
                        {tour.features.slice(0, 6).map((feature) => (
                          <div key={feature} className="flex items-center gap-2 text-[11px] md:text-sm font-bold text-slate-600">
                            <ShieldCheck className="h-3.5 md:h-4 w-3.5 md:w-4 text-red-600 shrink-0" />
                            {feature}
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="flex flex-col sm:flex-row items-center justify-between gap-6 md:gap-8 pt-6 md:pt-8 border-t border-slate-100">
                      <div className="flex items-center justify-between w-full sm:w-auto gap-4 md:gap-8">
                        <div>
                          <p className="text-[9px] md:text-[10px] font-black text-slate-400 uppercase tracking-widest mb-0.5 md:mb-1">Starts from</p>
                          <div className="flex items-baseline gap-1">
                            <span className="text-2xl md:text-4xl font-black text-slate-900">{tour.price}</span>
                            <span className="text-[9px] md:text-xs font-bold text-slate-400">{tour.priceSubtitle}</span>
                          </div>
                        </div>
                        <div className="h-8 md:h-12 w-px bg-slate-100" />
                        <div className="space-y-1 md:space-y-1.5">
                          <div className="flex items-center gap-1.5 md:gap-2 text-[10px] md:text-xs font-black text-slate-700">
                            <Clock className="h-3.5 md:h-4 w-3.5 md:w-4 text-red-600" />
                            {tour.duration}
                          </div>
                          <div className="flex items-center gap-1.5 md:gap-2 text-[10px] md:text-xs font-black text-slate-700">
                            <Calendar className="h-3.5 md:h-4 w-3.5 md:w-4 text-red-600" />
                            {tour.dates}
                          </div>
                        </div>
                      </div>
                      <Button className="w-full sm:w-auto bg-yellow-400 hover:bg-yellow-500 text-slate-900 font-black px-6 md:px-10 py-5 md:py-7 h-auto rounded-xl md:rounded-2xl shadow-lg shadow-yellow-400/20 transition-all hover:-translate-y-1 uppercase tracking-widest text-[10px] md:text-xs border-none">
                        View Details
                      </Button>
                    </div>
                  </div>

                  {/* Image Side */}
                  <div className="relative w-full lg:w-[40%] h-[200px] sm:h-[300px] lg:h-auto overflow-hidden">
                    <Image
                      src={tour.image}
                      alt={tour.title}
                      fill
                      className="object-cover transition-transform duration-1000 group-hover:scale-110"
                      priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent lg:bg-gradient-to-l lg:from-black/20 lg:to-transparent" />
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Controls */}
          <div className="absolute inset-y-0 -left-6 lg:-left-12 flex items-center z-10">
            <Button 
              variant="outline" 
              size="icon" 
              onClick={handlePrev}
              className="h-12 w-12 rounded-full bg-white shadow-xl border-none hover:bg-yellow-400 hover:text-white transition-all"
            >
              <ChevronLeft className="h-6 w-6" />
            </Button>
          </div>
          <div className="absolute inset-y-0 -right-6 lg:-right-12 flex items-center z-10">
            <Button 
              variant="outline" 
              size="icon" 
              onClick={handleNext}
              className="h-12 w-12 rounded-full bg-white shadow-xl border-none hover:bg-yellow-400 hover:text-white transition-all"
            >
              <ChevronRight className="h-6 w-6" />
            </Button>
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-8">
            {featuredTours.map((_, idx) => (
              <button
                key={idx}
                onClick={() => {
                  setDirection(idx > currentIndex ? 1 : -1)
                  setCurrentIndex(idx)
                }}
                className={`h-2 transition-all rounded-full ${
                  idx === currentIndex ? "w-8 bg-yellow-400" : "w-2 bg-slate-200"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
