"use client"

import { MapPin, Phone, Mail, Facebook, Twitter, Linkedin, Instagram } from "lucide-react"
import Image from "next/image"

export default function Footer() {
  const menuLinks = ["Overview", "Products", "Services", "Team", "Partnerships", "Careers", "Contact"]

  const sectionMap: { [key: string]: string } = {
    "Products": "autoiq",
    "Overview": "company-overview",
    "Services": "services",
    "Team": "team",
    "Partnerships": "partnerships",
    "Careers": "careers",
    "Contact": "contact"
  }

  const handleMenuClick = (link: string) => {
    const sectionId = sectionMap[link]
    const section = document.querySelector(`#${sectionId}`)
    section?.scrollIntoView({ behavior: 'smooth' })
  }

  const socialLinks = [
    { icon: Facebook, href: "https://facebook.com/emmetra", label: "Facebook" },
    { icon: Twitter, href: "https://twitter.com/emmetra", label: "Twitter" },
    { icon: Linkedin, href: "https://www.linkedin.com/company/emmetra", label: "LinkedIn" },
    { icon: Instagram, href: "https://instagram.com/emmetra", label: "Instagram" },
  ]

  return (
    <footer className="bg-white dark:bg-black text-foreground py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 lg:gap-12">
          {/* Logo and Description */}
          <div className="space-y-4 lg:space-y-6">
            <div className="flex items-center">
              <div className="text-2xl lg:text-3xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                Emmetra
              </div>
            </div>
            <p className="text-muted-foreground text-sm lg:text-base leading-relaxed max-w-sm">
              Transforming camera technology through AI-driven image quality, calibration, and automation for innovative business solutions in vision systems.
            </p>
          </div>

          {/* Location */}
          <div className="space-y-4 lg:space-y-6">
            <h3 className="text-lg lg:text-xl font-semibold text-white">Location</h3>
            <div className="space-y-3 lg:space-y-4 text-sm text-muted-foreground">
              <div className="flex items-start gap-3">
                <MapPin size={18} className="mt-1 flex-shrink-0 text-blue-400" />
                <span className="leading-relaxed">
                  Emmetra Technology Private Limited, #55<br />
                  SLV Heights, Panduranga Nagar, BG Road, Bannerghatta Road<br />
                  Bangalore South, Karnataka, India - 560076
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={18} className="text-blue-400" />
                <span>+91-XXXXXXXXXX</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={18} className="text-blue-400" />
                <a href="mailto:sales@emmetra.com" className="hover:underline">sales@emmetra.com</a>
              </div>
            </div>
          </div>

          {/* Menu */}
          <div className="space-y-4 lg:space-y-6">
            <h3 className="text-lg lg:text-xl font-semibold text-white">Menu</h3>
            <ul className="space-y-2 lg:space-y-3 text-sm text-muted-foreground">
              {menuLinks.map((link) => (
                <li key={link}>
                  <button
                    onClick={() => handleMenuClick(link)}
                    className="hover:text-blue-400 transition-colors text-left py-1"
                  >
                    {link}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div className="space-y-4 lg:space-y-6">
            <h3 className="text-lg lg:text-xl font-semibold text-foreground">Social Links</h3>
            <div className="flex space-x-3 lg:space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground border border-border"
                  aria-label={social.label}
                >
                  <social.icon size={20} />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border mt-12 lg:mt-16 pt-6 lg:pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; 2025 Emmetra Technology Private Limited. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
