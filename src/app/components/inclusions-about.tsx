"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { Building2, UtensilsCrossed, Bus, Users, Map, Plane, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"

const inclusions = [
  {
    icon: Building2,
    title: "Accommodation",
    description: "Comfortable & convenient hotels cherry picked by our hotel management team"
  },
  {
    icon: UtensilsCrossed,
    title: "All meals",
    description: "Eat to your heart's content Breakfast. Lunch. Dinner."
  },
  {
    icon: Bus,
    title: "On-tour transport",
    description: "Our itineraries include all rail, sea and road transport as part of the itinerary so you can enjoy tension free"
  },
  {
    icon: Users,
    title: "Tour managers",
    description: "We have an exclusive team of 350 tour managers specialising in India and World tours"
  },
  {
    icon: Map,
    title: "Best value itinerary",
    description: "Our dedicated product & destination research team spends hours curating the best value for money itineraries"
  },
  {
    icon: Plane,
    title: "To and fro airfare",
    description: "Tripusers tours are inclusive of airfare from many hubs within India unless you pick the joining-leaving option"
  }
]

export function InclusionsAndAbout() {
  const [isExpanded, setIsExpanded] = React.useState(false)

  return (
    <div className="flex flex-col">
      {/* Inclusions Section */}
      <section className="py-4 md:py-4 bg-slate-50 border-t border-slate-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-2xl md:text-3xl font-black text-slate-900 mb-2 relative inline-block">
              All inclusive tours, <span className="text-red-600">Chalo Bag Bharo Nikal Pado!</span>
              <div className="absolute -bottom-2 left-0 w-full h-1 bg-red-600/20 rounded-full" />
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-12">
            {inclusions.map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="flex items-start gap-6 group"
              >
                <div className="h-14 w-14 rounded-2xl bg-white shadow-lg shadow-slate-200/50 flex items-center justify-center shrink-0 border border-slate-100 group-hover:scale-110 group-hover:bg-yellow-400 transition-all duration-300">
                  <item.icon className="h-6 w-6 text-red-600 group-hover:text-slate-900 transition-colors" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-lg font-black text-slate-900 leading-tight">
                    {item.title}
                  </h3>
                  <p className="text-sm font-bold text-slate-500 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About SEO Section */}
      <section className="py-4 md:py-4 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="space-y-6">
            <h2 className="text-2xl md:text-3xl font-black text-slate-900">
              Find the best travel packages at Tripusers
            </h2>
            
            <div className={`space-y-4 text-sm md:text-base font-medium text-slate-600 leading-loose transition-all duration-500 overflow-hidden ${isExpanded ? "max-h-[2000px]" : "max-h-[300px] md:max-h-[250px] relative"}`}>
              <p>
                Booking a travel package when it comes to travelling to new parts of the country or the world is a practice that has slowly gained a lot of popularity. Today, whenever it is about planning a holiday trip, many people have a preferred travel portal in India that is best for their specific needs. Owing to the faith bestowed in our travel services by our patrons, Tripusers has established its niche and is counted among the top 10 travel agencies.
              </p>
              <p>
                We at Tripusers understand that nowadays, travelling has become much more than just visiting a new destination. That is why each of our vacation packages offers you the respite that you anticipate from a holiday. As a well-informed traveller, it is only right to expect more from your travel company in India - we strive to ensure the same for our customers. It is no longer about only conveyance and accommodation. For those who enjoy travelling, the best travel packages are those which can offer them holistic holiday experiences. That is exactly what you get when you opt for the best travel company - Tripusers.
              </p>
              <p>
                Counted among the top 10 travel agencies, Tripusers has all the travel services under one roof. In our constant endeavour to be the best travel company in India, everything that we do is based on creating and setting new benchmarks. With extensive travel know-how, end-to-end travel planning and a wide assortment of travel packages, we are counted among the best travel agents in India that ensure the best holiday experiences.
              </p>
              <p className="font-bold text-slate-900 mt-8">
                What makes us one of the best travel companies in India?
              </p>
              <p>
                Our commitment to excellence and customer satisfaction is what sets us apart. We believe in transparency, quality, and creating memories that last a lifetime. Whether it's a family vacation, a romantic getaway, or a corporate retreat, our team of experts is dedicated to planning the perfect itinerary for you. We handle everything from flights and hotels to local tours and transfers, so you can just "Chalo, Bag Bharo, Nikal Pado!"
              </p>

              {!isExpanded && (
                <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-white to-transparent pointer-events-none" />
              )}
            </div>

            <Button 
              variant="ghost" 
              onClick={() => setIsExpanded(!isExpanded)}
              className="group text-slate-900 font-black hover:bg-slate-50 transition-all p-0 hover:p-4 rounded-xl"
            >
              {isExpanded ? "Read Less" : "Read More"}
              <ChevronDown className={`ml-2 h-4 w-4 transition-transform duration-300 ${isExpanded ? "rotate-180" : "group-hover:translate-y-1"}`} />
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
