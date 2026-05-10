"use client"

import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import { Search, Mic, Phone, User, Globe, ChevronDown } from "lucide-react"

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
import { Menu, Mail, Building2, Headset, ChevronRight as ChevronRightIcon } from "lucide-react"

const navItems = [
  { title: "India", href: "/india", hasDropdown: true },
  { title: "World", href: "/world", hasDropdown: true },
  { title: "Speciality Tours", href: "/speciality-tours", hasDropdown: true },
  { title: "Customized Holidays", href: "/customized-holidays", hasDropdown: true },
  { title: "Corporate Travel", href: "/corporate-travel", hasDropdown: false },
  { title: "Inbound", href: "/inbound", hasDropdown: true },
  { title: "Gift Cards", href: "/gift-cards", hasDropdown: false },
  { title: "Contact Us", href: "/contact-us", hasDropdown: false },
]

export function Header() {
  return (
    <header className="w-full bg-white text-slate-900 shadow-sm sticky top-0 z-50">
      {/* Top Bar */}
      <div className="container mx-auto px-4 py-2 md:py-3 flex items-center justify-between gap-4">
        {/* Mobile Menu Trigger */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="text-slate-900">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="bg-white text-slate-900 border-r border-slate-100">
              <SheetHeader>
                <SheetTitle className="text-slate-900 text-left font-black">Menu</SheetTitle>
              </SheetHeader>
              <div className="mt-8 flex flex-col gap-4">
                {navItems.map((item) => (
                  <Link
                    key={item.title}
                    href={item.href}
                    className="text-lg font-bold hover:text-red-600 transition-colors"
                  >
                    {item.title}
                  </Link>
                ))}
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
              placeholder='Search "Europe"'
              className="w-full pl-11 pr-10 py-5 rounded-full bg-slate-50 text-slate-900 border border-slate-200 focus-visible:ring-2 focus-visible:ring-yellow-400 focus-visible:border-yellow-400 placeholder:text-slate-400 h-11 transition-all"
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
                    <Link href="mailto:usa@tripusers.com" className="text-sm font-bold text-slate-900 hover:text-red-600 transition-colors underline decoration-slate-200 underline-offset-4">
                      usa@tripusers.com
                    </Link>
                  </div>

                  <Link href="/offices" className="flex items-center justify-between p-3 bg-slate-50 rounded-xl hover:bg-red-50 transition-colors group/office">
                    <div className="flex items-center gap-3">
                      <Building2 className="h-5 w-5 text-red-600" />
                      <span className="text-sm font-bold text-slate-700 group-hover/office:text-red-600 transition-colors">Nearest Tripusers Office</span>
                    </div>
                    <ChevronRightIcon className="h-4 w-4 text-slate-300 group-hover/office:text-red-400 transition-transform group-hover/office:translate-x-1" />
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
          <NavigationMenu className="max-w-none justify-start py-1">
            <NavigationMenuList className="gap-1">
              {navItems.map((item) => (
                <NavigationMenuItem key={item.title}>
                  {item.hasDropdown ? (
                    <>
                      <NavigationMenuTrigger className="bg-transparent hover:bg-white text-slate-700 data-[state=open]:bg-white data-[state=open]:text-red-600 h-9 text-xs uppercase tracking-widest font-black transition-all hover:text-red-600">
                        {item.title}
                      </NavigationMenuTrigger>
                      <NavigationMenuContent>
                        <div className="w-[600px] p-6 bg-white text-slate-900 shadow-2xl rounded-b-3xl border border-slate-100 animate-in fade-in slide-in-from-top-2 duration-300">
                          <div className="flex items-center justify-between mb-4 border-b border-slate-50 pb-4">
                            <h3 className="font-black text-slate-900 uppercase tracking-widest text-sm">{item.title} Collections</h3>
                            <Link href={item.href} className="text-xs font-bold text-red-600 hover:underline">View All</Link>
                          </div>
                          <div className="grid grid-cols-3 gap-8">
                            <div className="space-y-3">
                              <p className="font-black text-[11px] text-red-600 uppercase tracking-widest">Popular</p>
                              <ul className="text-xs space-y-2 text-slate-500 font-bold">
                                <li className="hover:text-slate-900 cursor-pointer transition-colors flex items-center gap-2">
                                  <div className="w-1.5 h-1.5 rounded-full bg-yellow-400" /> Main Category 1
                                </li>
                                <li className="hover:text-slate-900 cursor-pointer transition-colors flex items-center gap-2">
                                  <div className="w-1.5 h-1.5 rounded-full bg-yellow-400" /> Main Category 2
                                </li>
                                <li className="hover:text-slate-900 cursor-pointer transition-colors flex items-center gap-2">
                                  <div className="w-1.5 h-1.5 rounded-full bg-yellow-400" /> Main Category 3
                                </li>
                              </ul>
                            </div>
                            <div className="space-y-3">
                              <p className="font-black text-[11px] text-red-600 uppercase tracking-widest">Featured</p>
                              <ul className="text-xs space-y-2 text-slate-500 font-bold">
                                <li className="hover:text-slate-900 cursor-pointer transition-colors flex items-center gap-2">
                                  <div className="w-1.5 h-1.5 rounded-full bg-red-400" /> Sub Category 1
                                </li>
                                <li className="hover:text-slate-900 cursor-pointer transition-colors flex items-center gap-2">
                                  <div className="w-1.5 h-1.5 rounded-full bg-red-400" /> Sub Category 2
                                </li>
                                <li className="hover:text-slate-900 cursor-pointer transition-colors flex items-center gap-2">
                                  <div className="w-1.5 h-1.5 rounded-full bg-red-400" /> Sub Category 3
                                </li>
                              </ul>
                            </div>
                            <div className="space-y-3">
                              <p className="font-black text-[11px] text-red-600 uppercase tracking-widest">Trending</p>
                              <ul className="text-xs space-y-2 text-slate-500 font-bold">
                                <li className="hover:text-slate-900 cursor-pointer transition-colors flex items-center gap-2">
                                  <div className="w-1.5 h-1.5 rounded-full bg-slate-300" /> Tour 1
                                </li>
                                <li className="hover:text-slate-900 cursor-pointer transition-colors flex items-center gap-2">
                                  <div className="w-1.5 h-1.5 rounded-full bg-slate-300" /> Tour 2
                                </li>
                                <li className="hover:text-slate-900 cursor-pointer transition-colors flex items-center gap-2">
                                  <div className="w-1.5 h-1.5 rounded-full bg-slate-300" /> Tour 3
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </NavigationMenuContent>
                    </>
                  ) : (
                    <NavigationMenuLink asChild>
                      <Link href={item.href} className={cn(navigationMenuTriggerStyle(), "bg-transparent hover:bg-white text-slate-700 hover:text-red-600 h-9 text-xs uppercase tracking-widest font-black transition-colors")}>
                        {item.title}
                      </Link>
                    </NavigationMenuLink>
                  )}
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </div>
      </div>
    </header>
  )
}
