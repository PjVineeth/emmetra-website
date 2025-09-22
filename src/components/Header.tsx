"use client"

import React from "react"
import { Menu, X, Sun, Moon } from "lucide-react"

interface HeaderProps {
  darkMode: boolean
  toggleDarkMode: () => void
}

const Header: React.FC<HeaderProps> = ({ darkMode, toggleDarkMode }) => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false)

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">Emmetra</div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#company-overview" className="text-foreground hover:text-primary transition-colors">
              Overview
            </a>
            <a href="#team" className="text-foreground hover:text-primary transition-colors">
              Team
            </a>
            <a href="#autoiq" className="text-foreground hover:text-primary transition-colors">
              Product
            </a>
            <a href="#services" className="text-foreground hover:text-primary transition-colors">
              Services
            </a>
            <a href="#partnerships" className="text-foreground hover:text-primary transition-colors">
              Partnerships
            </a>
            <a href="#careers" className="text-foreground hover:text-primary transition-colors">
              Careers
            </a>
            <a href="#contact" className="text-foreground hover:text-primary transition-colors">
              Contact Us
            </a>
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-md hover:bg-muted transition-colors"
              aria-label="Toggle dark mode"
            >
              {darkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-2">
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-md hover:bg-muted transition-colors"
              aria-label="Toggle dark mode"
            >
              {darkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </button>
            <button
              onClick={toggleMenu}
              className="p-2 rounded-md hover:bg-muted transition-colors"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 border-t border-border">
              <a onClick={() => setIsMenuOpen(false)} href="#company-overview" className="block px-3 py-3 text-base text-foreground hover:text-primary transition-colors">
                Overview
              </a>
              <a onClick={() => setIsMenuOpen(false)} href="#team" className="block px-3 py-3 text-base text-foreground hover:text-primary transition-colors">
                Team
              </a>
              <a onClick={() => setIsMenuOpen(false)} href="#autoiq" className="block px-3 py-3 text-base text-foreground hover:text-primary transition-colors">
                Product
              </a>
              <a onClick={() => setIsMenuOpen(false)} href="#services" className="block px-3 py-3 text-base text-foreground hover:text-primary transition-colors">
                Services
              </a>
              <a onClick={() => setIsMenuOpen(false)} href="#partnerships" className="block px-3 py-3 text-base text-foreground hover:text-primary transition-colors">
                Partnerships
              </a>
              <a onClick={() => setIsMenuOpen(false)} href="#careers" className="block px-3 py-3 text-base text-foreground hover:text-primary transition-colors">
                Careers
              </a>
              <a onClick={() => setIsMenuOpen(false)} href="#contact" className="block px-3 py-3 text-base text-foreground hover:text-primary transition-colors">
                Contact Us
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}

export default Header
