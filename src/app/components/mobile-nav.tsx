"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Home, Search, Luggage, Percent, User } from "lucide-react"
import { cn } from "@/lib/utils"

const navItems = [
  {
    label: "Home",
    icon: Home,
    href: "/",
  },
  {
    label: "Search",
    icon: Search,
    href: "/search",
  },
  {
    label: "Bookings",
    icon: Luggage,
    href: "/bookings",
  },
  {
    label: "Offers",
    icon: Percent,
    href: "/offers",
  },
  {
    label: "Account",
    icon: User,
    href: "/account",
  },
]

export function MobileNav() {
  const pathname = usePathname()

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 block md:hidden bg-white border-t border-slate-200 pb-safe shadow-[0_-2px_10px_rgba(0,0,0,0.05)]">
      <div className="flex items-center justify-around h-16">
        {navItems.map((item) => {
          const Icon = item.icon
          const isActive = pathname === item.href

          return (
            <Link
              key={item.label}
              href={item.href}
              className={cn(
                "flex flex-col items-center justify-center gap-1 w-full h-full transition-colors",
                isActive ? "text-red-600" : "text-slate-500 hover:text-slate-900"
              )}
            >
              <Icon className={cn("h-6 w-6", isActive ? "stroke-[2.5px]" : "stroke-[2px]")} />
              <span className="text-[11px] font-bold tracking-tight">
                {item.label}
              </span>
            </Link>
          )
        })}
      </div>
    </nav>
  )
}
