import type React from "react"
import { ArrowRight, Play, Zap, Camera, Cpu } from "lucide-react"

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white dark:bg-black">
      {/* Background Gradient - Removed for white background */}

      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-32 h-32 border border-blue-200 dark:border-blue-200 rounded-full"></div>
        <div className="absolute top-40 right-32 w-24 h-24 border border-blue-200 dark:border-blue-400 rounded-full"></div>
        <div className="absolute bottom-32 left-32 w-40 h-40 border border-blue-200 dark:border-blue-400 rounded-full"></div>
        <div className="absolute bottom-20 right-20 w-28 h-28 border border-blue-200 dark:border-blue-400 rounded-full"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-500 to-blue-600 text-white mb-8 animate-fade-in shadow-lg">
            <Zap className="w-4 h-4 mr-2" />
            <span className="text-sm font-medium">Shaping the Future of Camera With AI</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 animate-fade-in text-balance">
            <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
              AI-Powered Image Quality Tuning
            </span>
            <span className="block bg-gradient-to-r from-blue-500 to-blue-700 bg-clip-text text-transparent">
              Automation
            </span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl sm:text-2xl mb-8 max-w-3xl mx-auto animate-fade-in text-pretty">
            <span className="bg-gradient-to-r from-gray-600 to-gray-800 dark:from-gray-300 dark:to-gray-100 bg-clip-text text-transparent">
              Emmetra accelerates camera development for OEMs and ODMs, reducing time-to-market from months to days
              through AI-driven automation.
            </span>
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 animate-fade-in">
            <button onClick={() => window.dispatchEvent(new CustomEvent("open-demo-modal"))} className="group bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-blue-800 transition-all duration-300 flex items-center shadow-lg">
              Schedule Demo
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="group bg-transparent border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-all duration-300 flex items-center">
              <Play className="mr-2 w-5 h-5" />
              Watch Demo
            </button>
          </div>

          {/* Feature Icons */}
          {/* <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-2xl mx-auto animate-fade-in">
            <div className="flex flex-col items-center text-white">
              <div className="w-16 h-16 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center mb-4 border border-white/20">
                <Camera className="w-8 h-8" />
              </div>
              <h3 className="font-semibold mb-2">Camera Optimization</h3>
              <p className="text-blue-200 text-sm text-center">Advanced AI algorithms for perfect image quality</p>
            </div>
            <div className="flex flex-col items-center text-white">
              <div className="w-16 h-16 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center mb-4 border border-white/20">
                <Cpu className="w-8 h-8" />
              </div>
              <h3 className="font-semibold mb-2">Hardware Adaptation</h3>
              <p className="text-blue-200 text-sm text-center">Seamless integration with any sensor and lens</p>
            </div>
            <div className="flex flex-col items-center text-white">
              <div className="w-16 h-16 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center mb-4 border border-white/20">
                <Zap className="w-8 h-8" />
              </div>
              <h3 className="font-semibold mb-2">Rapid Deployment</h3>
              <p className="text-blue-200 text-sm text-center">From months to days development cycle</p>
            </div>
          </div> */}
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-blue-300 dark:border-blue-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-blue-500 dark:bg-blue-400 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  )
}

export default Hero
