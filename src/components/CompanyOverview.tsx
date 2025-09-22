import type React from "react"
import { Lightbulb, Camera, FileCheck, Globe, ArrowRight, CheckCircle } from "lucide-react"

const CompanyOverview: React.FC = () => {
  const overviewItems = [
    {
      icon: Lightbulb,
      title: "Innovative Products",
      description:
        "Emmetra provides Innovative and proprietary AI based software tools and solutions to simplify and reduce overall camera product development.",
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      icon: Camera,
      title: "Comprehensive Camera Services",
      description:
        "Emmetra provides a broad range of services including embedded camera software, image quality calibration, tuning and benchmarking.",
      gradient: "from-purple-500 to-pink-500",
    },
    {
      icon: FileCheck,
      title: "Proven Track Record",
      description:
        "With over 20 years of experience, Emmetra's Team has credibility to build camera products and solutions for renowned camera customers across the globe.",
      gradient: "from-green-500 to-teal-500",
    },
    {
      icon: Globe,
      title: "Diverse Industry Segments",
      description:
        "Emmetra serves a wide range of industries with its embedded camera solutions, catering to various customer needs.",
      gradient: "from-orange-500 to-red-500",
    },
  ]

  return (
    <section id="company-overview" className="py-16 bg-white dark:bg-black">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-500 to-blue-600 text-white mb-6">
            <Globe className="w-4 h-4 mr-2" />
            <span className="text-sm font-medium">Company Overview</span>
          </div>
          {/* <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 mb-6">
            <div className="w-2 h-2 bg-blue-600 dark:bg-blue-400 rounded-full mr-2"></div>
            <div className="w-2 h-2 bg-blue-600 dark:bg-blue-400 rounded-full mr-2"></div>
            <div className="w-2 h-2 bg-blue-600 dark:bg-blue-400 rounded-full mr-3"></div>
            <span className="text-sm font-medium">Company Overview</span>
          </div> */}
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 text-balance">
            Empowering Vision with AI
          </h2>
          <p className="text-xl text-muted-foreground max-w-5xl mx-auto text-pretty">
            Emmetra is a leading provider of AI-powered camera development solutions, helping OEMs and ODMs accelerate their product development and reduce time-to-market.
          </p>
        </div>

        {/* Overview Cards */}
        <div className="grid lg:grid-cols-4 gap-8">
          {overviewItems.map((item, index) => (
            <div
              key={index}
              className={`group bg-card rounded-xl p-8 border border-border hover:border-transparent transition-all duration-300 card-hover relative overflow-hidden`}
            >
              <div className={`absolute inset-0 rounded-xl bg-gradient-to-r ${item.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10`}></div>
              <div className="absolute inset-[1px] bg-card rounded-xl -z-10"></div>
              
              <div className="flex justify-center mb-6">
                <div className={`w-16 h-16 rounded-lg bg-gradient-to-r ${item.gradient} p-0.5`}>
                  <div className="w-full h-full bg-card rounded-md flex items-center justify-center">
                    <item.icon className="w-8 h-8 text-foreground" />
                  </div>
                </div>
              </div>

              <h3 className="text-xl font-bold text-foreground mb-4 text-center">{item.title}</h3>
              <p className="text-muted-foreground mb-6 text-pretty leading-relaxed text-center">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom Accent Line */}
        {/* <div className="flex justify-center">
          <div className="w-full max-w-4xl h-1 rounded-full overflow-hidden">
            <div className="h-full w-full bg-gradient-to-r from-red-500 via-green-500 to-blue-500"></div>
          </div>
        </div> */}
      </div>
    </section>
  )
}

export default CompanyOverview
