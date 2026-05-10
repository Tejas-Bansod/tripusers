"use client"

import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import { 
  Share2, 
  Video, 
  Users, 
  Camera, 
  MapPin, 
  Phone, 
  Mail, 
  Lock,
  ChevronRight
} from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export function Footer() {
  return (
    <footer className="w-full">
      {/* Top Contact Bar */}
      <div className="bg-slate-900 border-t border-slate-800 py-6 md:py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {/* Our Offices */}
            <div className="flex items-start gap-3">
              <div className="h-9 w-9 rounded-full bg-slate-800 flex items-center justify-center shrink-0 border border-slate-700">
                <MapPin className="h-4 w-4 text-white" />
              </div>
              <div className="space-y-0.5">
                <h4 className="text-xs font-black text-white uppercase tracking-widest">Our Offices</h4>
                <p className="text-[10px] font-bold text-slate-400 leading-relaxed">
                  Located across the country, ready to plan your dream vacation today!
                </p>
                <Link href="#" className="text-[10px] font-black text-white underline underline-offset-4 hover:text-red-600 transition-colors">
                  Locate Us
                </Link>
              </div>
            </div>

            {/* Call Us */}
            <div className="flex items-start gap-3">
              <div className="h-9 w-9 rounded-full bg-slate-800 flex items-center justify-center shrink-0 border border-slate-700">
                <Phone className="h-4 w-4 text-white" />
              </div>
              <div className="space-y-0.5">
                <h4 className="text-xs font-black text-white uppercase tracking-widest">Call us</h4>
                <p className="text-[10px] font-bold text-slate-400 leading-relaxed">
                  Request a quote or chat - we're here to help anytime!
                </p>
                <p className="text-[10px] font-black text-white">+91 903 648 5240</p>
              </div>
            </div>

            {/* Write to Us */}
            <div className="flex items-start gap-3">
              <div className="h-9 w-9 rounded-full bg-slate-800 flex items-center justify-center shrink-0 border border-slate-700">
                <Mail className="h-4 w-4 text-white" />
              </div>
              <div className="space-y-0.5">
                <h4 className="text-xs font-black text-white uppercase tracking-widest">Write to us</h4>
                <p className="text-[10px] font-bold text-slate-400 leading-relaxed">We're always happy to help!</p>
                <div className="flex flex-col gap-0.5">
                  <p className="text-[9px] font-bold text-slate-500">For Feedback: <span className="text-white font-black">feedback@tripusers.com</span></p>
                  <p className="text-[9px] font-bold text-slate-500">For Enquiries: <span className="text-white font-black">usa@tripusers.com</span></p>
                </div>
              </div>
            </div>

            {/* Connect with Us */}
            <div className="flex items-start gap-3">
              <div className="h-9 w-9 rounded-full bg-slate-800 flex items-center justify-center shrink-0 border border-slate-700">
                <Share2 className="h-4 w-4 text-white" />
              </div>
              <div className="space-y-2">
                <h4 className="text-xs font-black text-white uppercase tracking-widest">Connect with us</h4>
                <div className="flex gap-2.5">
                  {[Share2, Video, Users, Camera].map((Icon, i) => (
                    <Link key={i} href="#" className="h-7 w-7 rounded-full bg-white flex items-center justify-center text-slate-900 hover:bg-red-600 hover:text-white transition-all">
                      <Icon className="h-3.5 w-3.5" />
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="bg-white text-slate-500 py-8 md:py-12 border-t border-slate-100">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Logo & Newsletter */}
            <div className="space-y-6 lg:col-span-1">
              <div className="space-y-3">
                <div className="relative w-32 h-12">
                  <Image
                    src="/logo.png"
                    alt="Tripusers Logo"
                    fill
                    className="object-contain object-left"
                  />
                </div>
                <p className="text-[9px] font-black uppercase tracking-widest text-slate-400">Travel. Explore. Celebrate Life</p>
              </div>

              <div className="space-y-4">
                <div>
                  <h5 className="text-xs font-black text-slate-900 mb-0.5">Keep travelling all year round!</h5>
                  <p className="text-[9px] font-bold">Subscribe to our newsletter to find inspiration.</p>
                </div>
                
                <div className="space-y-2">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    <Input placeholder="Full Name*" className="bg-slate-50 border-slate-100 text-slate-900 h-9 text-[10px] rounded-lg focus:ring-red-600" />
                    <Input placeholder="Email ID*" className="bg-slate-50 border-slate-100 text-slate-900 h-9 text-[10px] rounded-lg focus:ring-red-600" />
                  </div>
                  <div className="flex gap-2">
                    <div className="flex items-center gap-1.5 bg-slate-50 border border-slate-100 px-2 rounded-lg h-9">
                      <span className="text-[10px] text-slate-900 font-bold">+91</span>
                    </div>
                    <Input placeholder="Mobile No.*" className="bg-slate-50 border-slate-100 text-slate-900 h-9 text-[10px] rounded-lg focus:ring-red-600" />
                  </div>
                  <Button className="w-full bg-yellow-400 hover:bg-yellow-500 text-slate-900 font-black h-9 rounded-lg shadow-sm uppercase tracking-widest text-[10px]">
                    Subscribe
                  </Button>
                </div>
              </div>
            </div>

            {/* Links Columns */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:col-span-3 gap-6 md:gap-8">
              {/* Discover Us */}
              <div className="space-y-4">
                <h4 className="text-xs font-black text-slate-900 uppercase tracking-widest">Discover us</h4>
                <ul className="space-y-2">
                  {["Guests Reviews", "About Us", "Our Team", "Tour Managers", "Sales Partners", "Become A Sales Partner", "Careers We're Hiring!", "Create Your Travel Portfolio"].map((item, i) => (
                    <li key={i}>
                      <Link href="#" className="text-[10px] font-bold text-slate-500 hover:text-red-600 transition-colors flex items-center group">
                        {item}
                        {item.includes("Hiring") && <span className="ml-1 text-[7px] bg-red-600 text-white px-1 py-0.5 rounded font-black">NEW</span>}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Support */}
              <div className="space-y-4">
                <h4 className="text-xs font-black text-slate-900 uppercase tracking-widest">Support</h4>
                <ul className="space-y-2">
                  {["Contact Us", "Leave Your Feedback", "How To Book", "FAQ", "Travel Deals", "COVID-19 Public Notice"].map((item, i) => (
                    <li key={i}>
                      <Link href="#" className="text-[10px] font-bold text-slate-500 hover:text-red-600 transition-colors">
                        {item}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Resources */}
              <div className="space-y-4">
                <h4 className="text-xs font-black text-slate-900 uppercase tracking-widest">Resources</h4>
                <ul className="space-y-2">
                  {["Tour Status", "Blog", "Podcasts", "Video Blogs", "Articles By Veena Patil", "Articles By Sunila Patil", "Articles By Neil Patil", "Travel Planners"].map((item, i) => (
                    <li key={i}>
                      <Link href="#" className="text-[10px] font-bold text-slate-500 hover:text-red-600 transition-colors">
                        {item}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="mt-8 pt-6 border-t border-slate-100 space-y-6">
            <p className="text-[9px] font-bold leading-relaxed text-slate-400 italic max-w-4xl">
              *Caution: Beware of Fake Promotions or Offers *Please do not believe or engage with any promotional emails, SMS or Web-link which ask you to click on a link and fill in your details. All Tripusers authorized email communications are delivered from domain @tripusers.com or @tripusers.in or SMS from TRIPU or 741324.
            </p>

            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="flex flex-col md:flex-row items-center gap-4">
                <p className="text-[9px] font-bold text-slate-400">
                  © 2013 - 26 Tripusers Inc. All Rights Reserved.
                </p>
                <div className="flex gap-4">
                  {["Privacy Policy", "Terms & Conditions", "Site Map"].map((item, i) => (
                    <Link key={i} href="#" className="text-[9px] font-black text-slate-400 hover:text-slate-900 transition-colors uppercase tracking-widest">
                      {item}
                    </Link>
                  ))}
                </div>
              </div>
              
              <div className="flex items-center gap-1.5 text-slate-400">
                <Lock className="h-2.5 w-2.5" />
                <span className="text-[9px] font-bold">Payments on website are secure</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer >
  )
}
