"use client"

import * as React from "react"
import Image from "next/image"
import { MapPin, Calendar, Search, ChevronRight } from "lucide-react"
import Autoplay from "embla-carousel-autoplay"

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { cn } from "@/lib/utils"

const slides = [
  {
    image: "https://images.pexels.com/photos/338515/pexels-photo-338515.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    title: "Welcome to Tripusers!",
    subtitle: "Experience luxury redefined. Your journey of a thousand miles begins with a single step.",
    price: "From ₹70,000",
    tagline: "All-Inclusive Luxury Tours",
    color: "from-blue-900/40",
  },
  {
    image: "https://images.pexels.com/photos/1450360/pexels-photo-1450360.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    title: "Adventure Awaits with Tripusers!",
    subtitle: "From the peaks of the Himalayas to the depths of the Pacific, discover the unknown.",
    price: "Starting at ₹60,000",
    tagline: "Global Expedition Experts",
    color: "from-emerald-900/40",
  },
  {
    image: "https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    title: "Cultural Wonders by Tripusers!",
    subtitle: "Immerse yourself in history. Walk the streets of ancient civilizations and taste the world.",
    price: "Packages from ₹80,000",
    tagline: "Deep Cultural Immersion",
    color: "from-amber-900/40",
  },
]

const categories = [
  { title: "Northern Europe", packages: 22, startPrice: "$1,274", icon: "🏰" },
  { title: "Western Europe", packages: 98, startPrice: "$1,219", icon: "🚠" },
  { title: "Central & Eastern Europe", packages: 22, startPrice: "$1,883", icon: "💒" },
  { title: "Mediterranean Europe", packages: 53, startPrice: "$1,939", icon: "🏖️" }
]

export function HeroSection() {
  const [selectedMonth, setSelectedMonth] = React.useState<string | null>(null)
  const [api, setApi] = React.useState<CarouselApi>()
  const [current, setCurrent] = React.useState(0)

  const plugins = React.useMemo(() => [
    Autoplay({ delay: 5000, stopOnInteraction: false, stopOnMouseEnter: true })
  ], [])

  React.useEffect(() => {
    if (!api) return
    setCurrent(api.selectedScrollSnap())
    api.on("select", () => {
      setCurrent(api.selectedScrollSnap())
    })
  }, [api])

  const months2026 = ["May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
  const months2027 = ["Jan", "Feb", "Mar", "Apr"]

  return (
    <section className="relative w-full h-screen md:h-[550px] lg:h-[650px] overflow-hidden group">
      {/* Background Carousel */}
      <Carousel
        setApi={setApi}
        plugins={plugins}
        className="w-full h-full"
        opts={{
          loop: true,
        }}
      >
        <CarouselContent className="h-full ml-0 ">
          {slides.map((slide, index) => (
            <CarouselItem key={index} className="relative h-full pl-0">
              <div className="absolute inset-0 w-full">
                <Image
                  src={slide.image}
                  alt={slide.title}
                  fill
                  className="object-cover w-full h-full"
                  priority={index === 0}
                />
                <div className={cn("absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/70", slide.color)} />
              </div>

              {/* Slide Content */}
              <div className="relative h-full w-full px-4 md:px-12 flex flex-col items-center justify-start pt-16 md:justify-center text-center text-white pb-0 md:pb-115">
                <div className="max-w-5xl w-full space-y-4 md:space-y-6 animate-in fade-in slide-in-from-bottom-10 duration-1000">
                  <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold italic leading-[1.1] tracking-tight drop-shadow-2xl">
                    {slide.title.split('Tripusers!')[0]}
                    <span className="text-yellow-400">Tripusers!</span>
                  </h1>
                  <div className="space-y-4 md:space-y-6">
                    <p className="text-sm md:text-xl lg:text-2xl font-medium text-slate-100 drop-shadow-md opacity-90">
                      {slide.subtitle}
                    </p>
                    <div className="flex flex-col md:flex-row items-center justify-center gap-3">
                      <div className="bg-white/10 backdrop-blur-md px-5 py-1.5 rounded-full border border-white/20">
                        <span className="text-lg md:text-2xl font-bold">{slide.price}</span>
                      </div>
                      <span className="text-[10px] md:text-sm text-slate-200 font-medium bg-black/20 backdrop-blur-sm px-4 py-1.5 rounded-full border border-white/10">
                        {slide.tagline}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        {/* Navigation Buttons */}
        <div className="hidden md:block">
          <CarouselPrevious className="left-4 z-50 bg-white/20 hover:bg-white/40 border-white/30 text-white h-12 w-12 opacity-0 group-hover:opacity-100 transition-all duration-300 backdrop-blur-md pointer-events-auto" />
          <CarouselNext className="right-4 z-50 bg-white/20 hover:bg-white/40 border-white/30 text-white h-12 w-12 opacity-0 group-hover:opacity-100 transition-all duration-300 backdrop-blur-md pointer-events-auto" />
        </div>

        {/* Carousel Dots */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-30 opacity-100 md:opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          {slides.map((_, index) => (
            <button
              key={index}
              className={cn(
                "w-1.5 h-1.5 rounded-full transition-all duration-500",
                current === index ? "bg-white w-6" : "bg-white/30 hover:bg-white/60"
              )}
              onClick={() => api?.scrollTo(index)}
            />
          ))}
        </div>
      </Carousel>

      {/* Overlaid UI Container */}
      <div className="absolute inset-x-0 bottom-0 pb-6 md:pb-10 bg-gradient-to-t from-black/60 via-black/20 to-transparent pt-20">
        <div className="container mx-auto px-4 md:px-0 space-y-6 md:space-y-8">

          {/* Search Bar - Premium Glassmorphism */}
          <div className="bg-white/95 backdrop-blur-2xl rounded-2xl md:rounded-full p-2 md:p-1.5 shadow-[0_20px_50px_rgba(0,0,0,0.5)] flex flex-col md:flex-row items-center gap-2 max-w-4xl mx-auto border border-white transition-all duration-500">
            <div className="flex-1 w-full flex items-center px-4 py-3 md:py-1.5 gap-3 border-b md:border-b-0 md:border-r border-slate-200/60">
              <div className="bg-red-50 p-2 rounded-full shrink-0">
                <MapPin className="h-5 w-5 md:h-4 md:h-4 text-red-600" />
              </div>
              <div className="flex flex-col flex-1">
                <span className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">Destination</span>
                <Input
                  placeholder="Where to?"
                  className="border-none focus-visible:ring-0 text-slate-900 placeholder:text-slate-400 h-8 md:h-6 p-0 text-lg md:text-base font-bold bg-transparent"
                />
              </div>
            </div>

            <div className="flex-[1.2] w-full flex items-center px-4 py-3 md:py-1.5 gap-3">
              <Popover>
                <PopoverTrigger asChild>
                  <button className="flex items-center gap-3 w-full text-left focus:outline-none group/btn">
                    <div className="bg-slate-50 p-2 rounded-full group-hover/btn:bg-red-50 transition-colors shrink-0">
                      <Calendar className="h-5 w-5 md:h-4 md:h-4 text-slate-500 group-hover/btn:text-red-600 transition-colors" />
                    </div>
                    <div className="flex flex-col flex-1">
                      <span className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">Month of travel</span>
                      <div className="flex items-center justify-between">
                        <span className={cn(
                          "font-bold text-lg md:text-base transition-colors",
                          selectedMonth ? "text-slate-900" : "text-slate-400"
                        )}>
                          {selectedMonth || "Select Month"}
                        </span>
                        <ChevronRight className={cn("h-5 w-5 md:h-4 md:h-4 text-slate-300 transition-transform group-hover/btn:text-red-400", "rotate-90")} />
                      </div>
                    </div>
                  </button>
                </PopoverTrigger>
                <PopoverContent className="w-screen max-w-[350px] md:w-80 p-4 rounded-3xl shadow-2xl border border-white/20 bg-white/95 backdrop-blur-xl" align="center" sideOffset={10}>
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <h4 className="text-[11px] font-black text-slate-300 px-1 uppercase tracking-[0.2em]">2026 Season</h4>
                      <div className="grid grid-cols-4 gap-2">
                        {months2026.map((month) => (
                          <Button
                            key={month}
                            variant="ghost"
                            size="sm"
                            className={cn(
                              "h-10 text-xs rounded-xl font-bold transition-all border border-transparent",
                              selectedMonth === `${month} 2026` 
                                ? "bg-red-600 text-white shadow-lg shadow-red-200" 
                                : "hover:bg-red-50 hover:text-red-600 hover:border-red-100"
                            )}
                            onClick={() => setSelectedMonth(`${month} 2026`)}
                          >
                            {month.substring(0, 3)}
                          </Button>
                        ))}
                      </div>
                    </div>
                    <div className="space-y-2">
                      <h4 className="text-[11px] font-black text-slate-300 px-1 uppercase tracking-[0.2em]">2027 Season</h4>
                      <div className="grid grid-cols-4 gap-2">
                        {months2027.map((month) => (
                          <Button
                            key={month}
                            variant="ghost"
                            size="sm"
                            className={cn(
                              "h-10 text-xs rounded-xl font-bold transition-all border border-transparent",
                              selectedMonth === `${month} 2027` 
                                ? "bg-red-600 text-white shadow-lg shadow-red-200" 
                                : "hover:bg-red-50 hover:text-red-600 hover:border-red-100"
                            )}
                            onClick={() => setSelectedMonth(`${month} 2027`)}
                          >
                            {month.substring(0, 3)}
                          </Button>
                        ))}
                      </div>
                    </div>
                  </div>
                </PopoverContent>
              </Popover>
            </div>

            <Button className="w-full md:w-auto bg-red-600 hover:bg-red-700 text-white rounded-xl md:rounded-full px-10 py-5 md:py-4 h-auto text-base md:text-sm font-black shadow-xl shadow-red-600/20 transition-all hover:scale-[1.02] md:hover:scale-105 active:scale-95 uppercase tracking-wider">
              <Search className="mr-2 h-5 w-5 md:h-4 md:h-4 stroke-[3]" />
              Find Tours
            </Button>
          </div>

          {/* Trust Bar - Integrated Pill Style */}
          <div className="flex flex-row flex-wrap justify-center items-center gap-x-4 md:gap-x-6 gap-y-3 py-2.5 px-6 bg-white/10 backdrop-blur-md rounded-2xl md:rounded-full max-w-fit mx-auto border border-white/20">
            <div className="flex items-center gap-2">
              <div className="bg-red-500 rounded-full p-1 shadow-lg shadow-red-500/20">
                <Search className="h-2.5 w-2.5 text-white fill-current" />
              </div>
              <span className="text-[9px] md:text-[10px] font-extrabold text-white uppercase tracking-widest opacity-90">India's Favourite</span>
            </div>
            <div className="h-1 w-1 bg-white/30 rounded-full hidden sm:block" />
            <div className="flex items-center gap-2">
              <div className="bg-red-500 rounded-full p-1 shadow-lg shadow-red-500/20">
                <Calendar className="h-2.5 w-2.5 text-white fill-current" />
              </div>
              <span className="text-[9px] md:text-[10px] font-extrabold text-white uppercase tracking-widest opacity-90">1M+ Happy Souls</span>
            </div>
            <div className="h-1 w-1 bg-white/30 rounded-full hidden sm:block" />
            <div className="flex items-center gap-2">
              <div className="bg-red-500 rounded-full p-1 shadow-lg shadow-red-500/20">
                <MapPin className="h-2.5 w-2.5 text-white fill-current" />
              </div>
              <span className="text-[9px] md:text-[10px] font-extrabold text-white uppercase tracking-widest opacity-90">24/7 Concierge</span>
            </div>
          </div>

          {/* Quick Categories - Simple Premium Cards */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 md:gap-3 max-w-5xl mx-auto px-4 md:px-0 py-5 items-stretch">
            {categories.map((cat, i) => (
              <div
                key={i}
                className="bg-white/95 backdrop-blur-2xl rounded-2xl p-2.5 md:p-3 shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-white relative overflow-hidden flex flex-col h-full"
              >
                <div className="flex justify-between items-start mb-2">
                  <div className="space-y-0.5 flex-1 min-w-0">
                    <h3 className="font-black text-slate-900 text-[10px] md:text-[12px] uppercase tracking-tight leading-tight min-h-[2.2em] flex items-center truncate">
                      {cat.title}
                    </h3>
                    <div className="flex flex-col">
                      <span className="text-[7px] md:text-[9px] text-slate-500 font-extrabold uppercase tracking-widest opacity-70">
                        {cat.packages} Packages
                      </span>
                      <span className="text-[8px] md:text-[10px] text-red-600 font-black uppercase tracking-widest">
                        From {cat.startPrice}
                      </span>
                    </div>
                  </div>
                  <div className="bg-slate-50 p-1.5 rounded-xl text-xl md:text-2xl shadow-sm border border-slate-100 shrink-0 ml-2">
                    {cat.icon}
                  </div>
                </div>

                <div className="mt-auto pt-2">
                  <Button className="w-full bg-yellow-400 hover:bg-[#0a1121] text-[#0a1121] hover:text-white text-[8px] md:text-[10px] font-black h-7 md:h-9 rounded-xl border-none shadow-sm transition-colors duration-200">
                    EXPLORE NOW
                  </Button>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}
