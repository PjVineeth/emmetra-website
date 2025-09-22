"use client"

import { useState } from "react"
import "./App.css"
import Header from "./components/Header"
import Hero from "./components/Hero"
import ProductFeatures from "./components/ProductFeatures"
import CompanyOverview from "./components/CompanyOverview"
import Services from "./components/Services"
import TeamProfiles from "@/components/TeamProfiles"
import Partnership from "./components/Partnership"
import ImageQualityLab from "./components/ImageQualityLab"
import IndustrySegments from "./components/IndustrySegments"
import Careers from "./components/Careers"
import Contact from "./components/Contact"
import Footer from "./components/Footer"

function App() {
  const [darkMode, setDarkMode] = useState(false)

  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
    document.documentElement.classList.toggle("dark")
  }

  return (
    <div className={`min-h-screen ${darkMode ? "dark" : ""}`}>
      <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <main>
        <Hero />
        <CompanyOverview />
        <TeamProfiles />
        <ProductFeatures />
        <Services />
        <ImageQualityLab />
        <IndustrySegments />
        <Partnership />
        <Careers />
        <Contact />
        <Footer />
      </main>
    </div>
  )
}

export default App
