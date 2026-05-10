"use client"

import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import { 
  Search, 
  Mic, 
  Phone, 
  User, 
  Globe, 
  ChevronDown, 
  Menu, 
  Mail, 
  Building2, 
  Headset, 
  ChevronRight,
  Compass,
  MapPin,
  Palmtree,
  Mountain,
  Heart,
  Users,
  Utensils,
  Briefcase,
  Gem,
  Anchor,
  Zap,
  Camera,
  Backpack,
  ShieldCheck,
  CreditCard,
  Plane,
  Hotel,
  Ticket,
  Luggage,
  Stethoscope,
  GraduationCap
} from "lucide-react"

import { cn } from "@/lib/utils"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const domesticCollections = [
  {
    title: "Leisure & Holiday",
    icon: <Palmtree className="h-4 w-4" />,
    items: ["Hill stations — Manali, Shimla, Darjeeling", "Beach vacations — Goa, Pondicherry", "Desert tours — Jaisalmer", "Backwater & nature — Kerala"],
    image: "https://images.pexels.com/photos/307008/pexels-photo-307008.jpeg?auto=compress&cs=tinysrgb&w=600"
  },
  {
    title: "Adventure & Wildlife",
    icon: <Mountain className="h-4 w-4" />,
    items: ["Trekking & Camping", "River rafting & Skiing", "Bike expeditions", "Wildlife safaris"],
    image: "https://images.pexels.com/photos/235922/pexels-photo-235922.jpeg?auto=compress&cs=tinysrgb&w=600"
  },
  {
    title: "Spiritual & Cultural",
    icon: <MapPin className="h-4 w-4" />,
    items: ["Kedarnath Temple", "Vaishno Devi & Golden Temple", "Char Dham Yatra", "Heritage & Food Walks"],
    image: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&w=600"
  }
]

const internationalCollections = [
  {
    title: "Popular Getaways",
    icon: <Globe className="h-4 w-4" />,
    items: ["Thailand & Dubai", "Singapore & Maldives", "Switzerland", "Japan"],
    image: "https://images.pexels.com/photos/338515/pexels-photo-338515.jpeg?auto=compress&cs=tinysrgb&w=600"
  },
  {
    title: "Luxury & Cruises",
    icon: <Anchor className="h-4 w-4" />,
    items: ["International Cruises", "River Cruises", "Yacht Vacations", "Island Resorts"],
    image: "https://images.pexels.com/photos/2404444/pexels-photo-2404444.jpeg?auto=compress&cs=tinysrgb&w=600"
  },
  {
    title: "Global Adventure",
    icon: <Zap className="h-4 w-4" />,
    items: ["Snow Adventures", "Skydiving & Scuba", "Northern Lights tours", "European Luxury tours"],
    image: "https://images.pexels.com/photos/238622/pexels-photo-238622.jpeg?auto=compress&cs=tinysrgb&w=600"
  }
]

const specialityTours = [
  {
    title: "Romance & Family",
    items: ["Honeymoon Packages", "Romantic stays & Dinners", "School/College trips", "Corporate outings"],
    image: "https://images.pexels.com/photos/1024960/pexels-photo-1024960.jpeg?auto=compress&cs=tinysrgb&w=600"
  },
  {
    title: "Events & Medical",
    items: ["Destination Weddings", "Beach & Palace Weddings", "Medical Treatment Travel", "Wellness Retreats"],
    image: "https://images.pexels.com/photos/2253879/pexels-photo-2253879.jpeg?auto=compress&cs=tinysrgb&w=600"
  },
  {
    title: "Educational & Budget",
    items: ["Study Tours", "Backpacking Europe", "Hostel stays", "Group departures"],
    image: "https://images.pexels.com/photos/1454360/pexels-photo-1454360.jpeg?auto=compress&cs=tinysrgb&w=600"
  }
]

const servicesData = [
  { title: "Visa Assistance", icon: <ShieldCheck className="h-4 w-4" /> },
  { title: "Passport Guidance", icon: <CreditCard className="h-4 w-4" /> },
  { title: "Flight Booking", icon: <Plane className="h-4 w-4" /> },
  { title: "Hotel Booking", icon: <Hotel className="h-4 w-4" /> },
  { title: "Travel Insurance", icon: <ShieldCheck className="h-4 w-4" /> },
  { title: "Local Transport", icon: <Luggage className="h-4 w-4" /> },
  { title: "Tour Guides", icon: <User className="h-4 w-4" /> },
  { title: "Currency Exchange", icon: <CreditCard className="h-4 w-4" /> },
  { title: "Content Packages", icon: <Camera className="h-4 w-4" /> },
]

const merchandiseKits = [
  { title: "Pro Trekking Kit", price: "₹4,999", image: "https://images.pexels.com/photos/1262304/pexels-photo-1262304.jpeg?auto=compress&cs=tinysrgb&w=400" },
  { title: "Travel Essentials", price: "₹2,499", image: "https://images.pexels.com/photos/615060/pexels-photo-615060.jpeg?auto=compress&cs=tinysrgb&w=400" },
]

export function Header() {
  const [isOpen, setIsOpen] = React.useState(false)

  return (
    <header className="w-full bg-white text-slate-900 shadow-sm sticky top-0 z-50">
      {/* Top Bar */}
      <div className="container mx-auto px-4 py-2 md:py-3 flex items-center justify-between gap-4">
        {/* Mobile Menu Trigger */}
        <div className="md:hidden">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="text-slate-900">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="bg-white text-slate-900 border-r border-slate-100 overflow-y-auto">
              <SheetHeader className="mb-6">
                <SheetTitle className="text-slate-900 text-left font-black flex items-center gap-2">
                  <Compass className="h-6 w-6 text-red-600" />
                  Tripusers Navigation
                </SheetTitle>
              </SheetHeader>
              
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="domestic">
                  <AccordionTrigger className="text-lg font-bold hover:text-red-600">Domestic Trips</AccordionTrigger>
                  <AccordionContent>
                    <div className="flex flex-col gap-2 pl-4 border-l-2 border-red-50 ml-1">
                      {domesticCollections.map(c => (
                        <div key={c.title} className="mb-2">
                          <p className="text-xs font-black text-slate-400 uppercase tracking-widest mb-1">{c.title}</p>
                          {c.items.map(item => (
                            <Link key={item} href="#" className="block py-1 text-sm font-bold text-slate-600 hover:text-red-600" onClick={() => setIsOpen(false)}>{item}</Link>
                          ))}
                        </div>
                      ))}
                    </div>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="international">
                  <AccordionTrigger className="text-lg font-bold hover:text-red-600">International</AccordionTrigger>
                  <AccordionContent>
                    <div className="flex flex-col gap-2 pl-4 border-l-2 border-yellow-400 ml-1">
                      {internationalCollections.map(c => (
                        <div key={c.title} className="mb-2">
                          <p className="text-xs font-black text-slate-400 uppercase tracking-widest mb-1">{c.title}</p>
                          {c.items.map(item => (
                            <Link key={item} href="#" className="block py-1 text-sm font-bold text-slate-600 hover:text-red-600" onClick={() => setIsOpen(false)}>{item}</Link>
                          ))}
                        </div>
                      ))}
                    </div>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="speciality">
                  <AccordionTrigger className="text-lg font-bold hover:text-red-600">Speciality Tours</AccordionTrigger>
                  <AccordionContent>
                    <div className="flex flex-col gap-2 pl-4 border-l-2 border-red-500 ml-1">
                      {specialityTours.map(c => (
                        <div key={c.title} className="mb-2">
                          <p className="text-xs font-black text-slate-400 uppercase tracking-widest mb-1">{c.title}</p>
                          {c.items.map(item => (
                            <Link key={item} href="#" className="block py-1 text-sm font-bold text-slate-600 hover:text-red-600" onClick={() => setIsOpen(false)}>{item}</Link>
                          ))}
                        </div>
                      ))}
                    </div>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="services">
                  <AccordionTrigger className="text-lg font-bold hover:text-red-600">Travel Services</AccordionTrigger>
                  <AccordionContent>
                    <div className="grid grid-cols-1 gap-2 pl-4">
                      {servicesData.map(s => (
                        <Link key={s.title} href="#" className="flex items-center gap-2 py-2 text-sm font-bold text-slate-700" onClick={() => setIsOpen(false)}>
                          {s.icon} {s.title}
                        </Link>
                      ))}
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>

              <div className="mt-8 pt-8 border-t border-slate-100">
                <Link href="/login" className="flex items-center gap-4 p-4 bg-slate-50 rounded-2xl mb-4" onClick={() => setIsOpen(false)}>
                  <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center border border-slate-200">
                    <User className="h-5 w-5 text-red-600" />
                  </div>
                  <div>
                    <p className="text-sm font-black text-slate-900">Sign In</p>
                    <p className="text-xs text-slate-500">Access your bookings</p>
                  </div>
                </Link>
              </div>
            </SheetContent>
          </Sheet>
        </div>

        {/* Logo */}
        <Link href="/" className="flex-shrink-0">
          <div className="relative h-10 w-36 md:h-12 md:w-48">
            <Image
              src="/logo.png"
              alt="Tripusers Logo"
              fill
              className="object-contain"
              priority
            />
          </div>
        </Link>

        {/* Search Bar */}
        <div className="flex-1 max-w-2xl hidden md:flex items-center relative">
          <div className="relative w-full">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
            <Input
              type="text"
              placeholder='Explore "Swiss Alps" or "Kerala Backwaters"...'
              className="w-full pl-11 pr-10 py-5 rounded-full bg-slate-50 text-slate-900 border border-slate-200 focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:border-red-500 placeholder:text-slate-400 h-11 transition-all"
            />
            <Mic className="absolute right-4 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400 cursor-pointer hover:text-red-600 transition-colors" />
          </div>
        </div>

        {/* Action Items */}
        <div className="flex items-center gap-2 md:gap-6">
          <HoverCard openDelay={100} closeDelay={200}>
            <HoverCardTrigger asChild>
              <div className="hidden lg:flex items-center gap-2 bg-slate-50 px-4 py-2 rounded-full border border-slate-100 hover:border-red-100 transition-colors group cursor-pointer">
                <Phone className="h-4 w-4 text-red-600" />
                <span className="text-sm font-bold text-slate-700">+1 903 648 5240</span>
                <ChevronDown className="h-3 w-3 text-slate-400 group-hover:text-red-400 transition-colors" />
              </div>
            </HoverCardTrigger>
            <HoverCardContent className="w-80 p-0 overflow-hidden rounded-2xl shadow-2xl border-slate-100" align="end">
              <div className="p-5 space-y-4">
                <h4 className="font-black text-slate-900 text-base uppercase tracking-wider border-b border-slate-50 pb-3">Contact Us</h4>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-3 group/item">
                    <Headset className="h-5 w-5 text-red-600 mt-0.5" />
                    <div className="space-y-0.5">
                      <p className="text-[11px] font-bold text-slate-400 uppercase tracking-widest">Our Toll Free Numbers:</p>
                      <p className="text-sm font-black text-slate-900 tracking-tight">+1 903 648 5240</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 group/item">
                    <Mail className="h-5 w-5 text-red-600" />
                    <Link href="mailto:support@tripusers.com" className="text-sm font-bold text-slate-900 hover:text-red-600 transition-colors underline decoration-slate-200 underline-offset-4">
                      support@tripusers.com
                    </Link>
                  </div>

                  <Link href="/offices" className="flex items-center justify-between p-3 bg-slate-50 rounded-xl hover:bg-red-50 transition-colors group/office">
                    <div className="flex items-center gap-3">
                      <Building2 className="h-5 w-5 text-red-600" />
                      <span className="text-sm font-bold text-slate-700 group-hover/office:text-red-600 transition-colors">Nearest Tripusers Office</span>
                    </div>
                    <ChevronRight className="h-4 w-4 text-slate-300 group-hover/office:text-red-400 transition-transform group-hover/office:translate-x-1" />
                  </Link>
                </div>
              </div>
            </HoverCardContent>
          </HoverCard>

          <Link href="/login" className="flex flex-col items-center group">
            <div className="p-1 rounded-full group-hover:bg-red-50 transition-colors">
              <User className="h-5 w-5 text-slate-700 group-hover:text-red-600" />
            </div>
            <span className="text-[10px] font-bold mt-0.5 text-slate-500 group-hover:text-red-600">Login</span>
          </Link>

          <Button variant="outline" size="sm" className="hidden sm:flex items-center gap-2 bg-yellow-400 text-slate-900 hover:bg-[#0a1121] hover:text-white border-none rounded-full h-9 px-4 font-black shadow-sm transition-all duration-300">
            <Globe className="h-4 w-4" />
            <span className="text-xs uppercase tracking-wider">Global</span>
            <ChevronDown className="h-3 w-3 opacity-50" />
          </Button>
        </div>
      </div>

      {/* Navigation Bar */}
      <div className="border-t border-slate-100 hidden md:block bg-slate-50/50">
        <div className="container mx-auto px-4">
          <NavigationMenu viewport={false} className="max-w-none justify-start py-1">
            <NavigationMenuList className="gap-1">
              
              {/* India Mega Menu */}
              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent hover:bg-white text-slate-700 data-[state=open]:bg-white data-[state=open]:text-red-600 h-10 text-xs uppercase tracking-widest font-black transition-all hover:text-red-600 rounded-full px-6">
                  Domestic Trips
                </NavigationMenuTrigger>
                <NavigationMenuContent className="p-0 border-none bg-transparent shadow-none pt-2">
                  <div className="w-[850px] p-7 bg-white text-slate-900 shadow-2xl animate-in fade-in zoom-in-95 slide-in-from-top-3 duration-300">
                    <div className="grid grid-cols-4 gap-8">
                      {domesticCollections.map((col) => (
                        <div key={col.title} className="space-y-4">
                          <div className="relative h-28 w-full rounded-2xl overflow-hidden group/img">
                            <Image src={col.image} alt={col.title} fill className="object-cover transition-transform duration-500 group-hover/img:scale-110" />
                            <div className="absolute inset-0 bg-black/20 group-hover/img:bg-black/10 transition-colors" />
                            <div className="absolute bottom-3 left-3 text-white font-black text-[10px] uppercase tracking-wider">{col.title}</div>
                          </div>
                          <ul className="space-y-2.5">
                            {col.items.map((item) => (
                              <li key={item} className="text-[11px] font-bold text-slate-500 hover:text-red-600 cursor-pointer flex items-center gap-2 transition-colors">
                                <div className="w-1.5 h-1.5 rounded-full bg-red-400" /> {item}
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                      <div className="bg-slate-50 rounded-[1.5rem] p-5 flex flex-col justify-between border border-slate-100">
                        <div>
                          <p className="font-black text-red-600 text-xs uppercase tracking-widest mb-2">Luxury Trains</p>
                          <p className="text-[10px] font-bold text-slate-500 leading-relaxed mb-4">Experience royalty with Maharajas' Express & more.</p>
                          <Button variant="outline" size="sm" className="w-full text-[10px] h-8 font-black rounded-full border-red-100 hover:bg-red-50 hover:text-red-600">VIEW COLLECTIONS</Button>
                        </div>
                        <Image src="https://images.pexels.com/photos/189333/pexels-photo-189333.jpeg?auto=compress&cs=tinysrgb&w=400" alt="luxury" width={200} height={80} className="rounded-xl object-cover h-24 w-full mt-4 shadow-sm" />
                      </div>
                    </div>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              {/* International Mega Menu */}
              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent hover:bg-white text-slate-700 data-[state=open]:bg-white data-[state=open]:text-red-600 h-10 text-xs uppercase tracking-widest font-black transition-all hover:text-red-600 rounded-full px-6">
                  International
                </NavigationMenuTrigger>
                <NavigationMenuContent className="p-0 border-none bg-transparent shadow-none pt-2">
                  <div className="w-[850px] p-7 bg-white text-slate-900 shadow-2xl animate-in fade-in zoom-in-95 slide-in-from-top-3 duration-300">
                    <div className="grid grid-cols-4 gap-8">
                      <div className="col-span-1 space-y-5">
                        <h3 className="font-black text-sm uppercase tracking-widest flex items-center gap-2 border-b border-slate-50 pb-2">
                          <Globe className="h-4 w-4 text-red-600" />
                          World Tour
                        </h3>
                        <div className="space-y-1.5">
                          {["Thailand", "Dubai", "Singapore", "Maldives", "Switzerland", "Japan"].map(city => (
                            <Link key={city} href="#" className="flex items-center justify-between p-2 rounded-xl hover:bg-red-50 transition-colors group/link">
                              <span className="text-xs font-bold text-slate-600 group-hover/link:text-red-600">{city}</span>
                              <ChevronRight className="h-3 w-3 text-slate-300 group-hover/link:translate-x-1 transition-transform" />
                            </Link>
                          ))}
                        </div>
                      </div>
                      {internationalCollections.map((col) => (
                        <div key={col.title} className="space-y-4">
                          <div className="relative h-28 w-full rounded-2xl overflow-hidden group/img">
                            <Image src={col.image} alt={col.title} fill className="object-cover transition-transform duration-500 group-hover/img:scale-110" />
                            <div className="absolute inset-0 bg-black/20 group-hover/img:bg-black/10 transition-colors" />
                            <div className="absolute bottom-3 left-3 text-white font-black text-[10px] uppercase tracking-wider">{col.title}</div>
                          </div>
                          <ul className="space-y-2.5">
                            {col.items.map((item) => (
                              <li key={item} className="text-[11px] font-bold text-slate-500 hover:text-red-600 cursor-pointer flex items-center gap-2 transition-colors">
                                <div className="w-1.5 h-1.5 rounded-full bg-yellow-400" /> {item}
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              {/* Speciality Mega Menu */}
              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent hover:bg-white text-slate-700 data-[state=open]:bg-white data-[state=open]:text-red-600 h-10 text-xs uppercase tracking-widest font-black transition-all hover:text-red-600 rounded-full px-6">
                  Speciality
                </NavigationMenuTrigger>
                <NavigationMenuContent className="p-0 border-none bg-transparent shadow-none pt-2">
                  <div className="w-[750px] p-7 bg-white text-slate-900 shadow-2xl animate-in fade-in zoom-in-95 slide-in-from-top-3 duration-300">
                    <div className="grid grid-cols-3 gap-10">
                      {specialityTours.map((col) => (
                        <div key={col.title} className="space-y-5">
                          <div className="relative h-40 w-full rounded-2xl overflow-hidden group/img shadow-md">
                            <Image src={col.image} alt={col.title} fill className="object-cover transition-transform duration-500 group-hover/img:scale-110" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                            <div className="absolute bottom-4 left-4 text-white font-black text-xs uppercase tracking-widest">{col.title}</div>
                          </div>
                          <ul className="space-y-3">
                            {col.items.map((item) => (
                              <li key={item} className="text-[11px] font-bold text-slate-500 hover:text-red-600 cursor-pointer transition-colors hover:translate-x-1 duration-200">
                                {item}
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              {/* Corporate & Events */}
              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent hover:bg-white text-slate-700 data-[state=open]:bg-white data-[state=open]:text-red-600 h-10 text-xs uppercase tracking-widest font-black transition-all hover:text-red-600 rounded-full px-6">
                  Business & Events
                </NavigationMenuTrigger>
                <NavigationMenuContent className="p-0 border-none bg-transparent shadow-none pt-2">
                  <div className="w-[650px] p-8 bg-white shadow-2xl animate-in fade-in zoom-in-95 slide-in-from-top-3 duration-300">
                    <div className="grid grid-cols-2 gap-10">
                      <div className="space-y-6">
                        <div className="space-y-4">
                          <div className="flex items-center gap-3 mb-2">
                            <div className="p-2 bg-red-50 rounded-full">
                              <Briefcase className="h-5 w-5 text-red-600" />
                            </div>
                            <h3 className="font-black text-sm uppercase tracking-widest">Corporate</h3>
                          </div>
                          <ul className="space-y-3.5">
                            {["MICE tours", "Corporate retreats", "Trade exhibitions"].map(item => (
                              <li key={item} className="text-xs font-bold text-slate-600 hover:text-red-600 cursor-pointer flex items-center gap-2">
                                <div className="w-1.5 h-1.5 rounded-full bg-slate-200" /> {item}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div className="pt-6 border-t border-slate-50">
                          <div className="flex items-center gap-3 mb-4">
                            <div className="p-2 bg-yellow-50 rounded-full">
                              <GraduationCap className="h-5 w-5 text-yellow-600" />
                            </div>
                            <h3 className="font-black text-sm uppercase tracking-widest">Edu & Medical</h3>
                          </div>
                          <ul className="space-y-3.5">
                            {["Study tours", "Medical treatment", "Wellness retreats"].map(item => (
                              <li key={item} className="text-xs font-bold text-slate-600 hover:text-red-600 cursor-pointer flex items-center gap-2">
                                <div className="w-1.5 h-1.5 rounded-full bg-slate-200" /> {item}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                      <div className="space-y-5 border-l border-slate-50 pl-10">
                        <div className="flex items-center gap-3 mb-2">
                          <div className="p-2 bg-pink-50 rounded-full">
                            <Heart className="h-5 w-5 text-pink-600" />
                          </div>
                          <h3 className="font-black text-sm uppercase tracking-widest">Weddings</h3>
                        </div>
                        <div className="relative h-48 w-full rounded-2xl overflow-hidden group/wedding shadow-lg">
                          <Image src="https://images.pexels.com/photos/2253879/pexels-photo-2253879.jpeg?auto=compress&cs=tinysrgb&w=400" alt="wedding" fill className="object-cover transition-transform duration-700 group-hover/wedding:scale-110" />
                          <div className="absolute inset-0 bg-black/40 flex items-center justify-center p-6 text-center">
                            <p className="text-white text-[11px] font-black uppercase tracking-[0.2em] leading-relaxed">Exclusive Palace & Beach Planning</p>
                          </div>
                        </div>
                        <ul className="space-y-2.5 mt-4">
                          {["International Planning", "Beach Weddings", "Palace Weddings"].map(item => (
                            <li key={item} className="text-xs font-bold text-slate-600 hover:text-red-600 cursor-pointer flex items-center gap-2">
                               <ChevronRight className="h-3 w-3 text-red-400" /> {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              {/* Services & Kits */}
              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent hover:bg-white text-slate-700 data-[state=open]:bg-white data-[state=open]:text-red-600 h-10 text-xs uppercase tracking-widest font-black transition-all hover:text-red-600 rounded-full px-6">
                  Services & Kits
                </NavigationMenuTrigger>
                <NavigationMenuContent className="p-0 border-none bg-transparent shadow-none pt-2">
                  <div className="w-[850px] p-8 bg-white shadow-2xl animate-in fade-in zoom-in-95 slide-in-from-top-3 duration-300">
                    <div className="grid grid-cols-3 gap-10">
                      <div className="space-y-5">
                        <h3 className="font-black text-sm uppercase tracking-widest text-red-600 flex items-center gap-2 border-b border-red-50 pb-2">
                          <ShieldCheck className="h-4 w-4" />
                          Concierge
                        </h3>
                        <div className="grid grid-cols-1 gap-1.5">
                          {servicesData.map(s => (
                            <Link key={s.title} href="#" className="flex items-center gap-3 p-2 rounded-xl hover:bg-slate-50 text-[11px] font-bold text-slate-600 transition-colors">
                              <span className="text-red-600">{s.icon}</span>
                              {s.title}
                            </Link>
                          ))}
                        </div>
                      </div>
                      <div className="space-y-6 col-span-2 border-l border-slate-50 pl-10">
                        <h3 className="font-black text-sm uppercase tracking-widest text-slate-900 flex items-center gap-2">
                          <Backpack className="h-4 w-4 text-red-600" />
                          Premium Merchandise
                        </h3>
                        <div className="grid grid-cols-2 gap-6 mt-4">
                          {merchandiseKits.map(kit => (
                            <div key={kit.title} className="group/kit cursor-pointer">
                              <div className="relative h-36 w-full rounded-[1.5rem] overflow-hidden mb-3 shadow-md border border-slate-100">
                                <Image src={kit.image} alt={kit.title} fill className="object-cover transition-transform duration-500 group-hover/kit:scale-110" />
                                <div className="absolute top-3 right-3 bg-yellow-400 text-slate-900 px-3 py-1 rounded-full text-[10px] font-black shadow-sm">NEW</div>
                              </div>
                              <p className="text-xs font-black text-slate-900 px-1">{kit.title}</p>
                              <p className="text-[11px] font-bold text-red-600 px-1">{kit.price}</p>
                            </div>
                          ))}
                        </div>
                        <div className="bg-slate-900 rounded-[1.5rem] p-5 mt-4 flex items-center justify-between shadow-xl">
                          <div className="space-y-1">
                            <p className="text-white font-black text-xs">Customized Trips</p>
                            <p className="text-slate-400 text-[10px]">Tailor-made itineraries for you</p>
                          </div>
                          <Button size="sm" className="bg-yellow-400 text-slate-900 hover:bg-white h-9 px-6 text-[10px] font-black rounded-full transition-all">GET QUOTE</Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link href="/contact-us" legacyBehavior passHref>
                  <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), "bg-transparent hover:bg-white text-slate-700 hover:text-red-600 h-9 text-xs uppercase tracking-widest font-black transition-colors")}>
                    Support
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>

            </NavigationMenuList>
          </NavigationMenu>
        </div>
      </div>
    </header>
  )
}
