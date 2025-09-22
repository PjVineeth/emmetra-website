import type React from "react"
import { Cpu, Zap, MapPin, Microscope, ArrowRight, CheckCircle, Layers } from "lucide-react"

const Services: React.FC = () => {
  const platformFeatures = [
    {
      icon: Zap,
      title: "Sensor, Optics, and ISP Calibration",
      description:
        "End-to-end calibration and tuning of sensors, optics, and ISP pipelines to deliver consistently superior image quality across scenes and lighting.",
      features: [
        // "Factory bring-up and golden calibration",
        // "Lens shading, color, and noise optimization",
        // "Benchmarking against target KPIs",
      ],
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      icon: Microscope,
      title: "Image Quality Testing and Benchmarking",
      description:
        "Objective and subjective IQ evaluation with standardized charts and scene libraries, plus competitive benchmarking and deep-dive analysis.",
      features: [
        // "ISO/IEEE-aligned test methods",
        // "Perceptual and metric-based scoring",
        // "Actionable tuning reports",
      ],
      gradient: "from-purple-500 to-pink-500",
    },
    {
      icon: Cpu,
      title: "Camera Driver and Software Development",
      description:
        "Development and integration of sensor drivers, CSI/ISP interfaces, and control software on SoC and ISP platforms for reliable production deployments.",
      features: [
        // "Sensor/ISP bring-up on target SoCs",
        // "Robust control and parameter management",
        // "Performance and stability validation",
      ],
      gradient: "from-green-500 to-teal-500",
    },
    {
      icon: Layers,
      title: "Camera Imaging Algorithm Development",
      description:
        "Custom imaging algorithms and ML enhancements—AE/AWB/AF, de-noising, HDR, and computational photography—tailored for your use case.",
      features: [
        // "Classical + ML hybrid pipelines",
        // "Domain-adapted training and tuning",
        // "On-device optimization",
      ],
      gradient: "from-orange-500 to-red-500",
    },
  ]

  return (
    <section id="services" className="py-8 bg-white dark:bg-black">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-500 to-blue-600 text-white mb-6">
            <Cpu className="w-4 h-4 mr-2" />
            <span className="text-sm font-medium">Services</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 text-balance">
            Key Camera <span className="text-gradient">Service Offerings</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            Practical, production-ready services covering calibration, testing, software integration, and algorithm
            development—focused on measurable image quality gains and faster time‑to‑market.
          </p>
        </div>

        {/* Platform Features - 4 columns matching CompanyOverview style */}
        <div className="grid lg:grid-cols-4 gap-8 mb-4">
          {platformFeatures.map((feature, index) => (
            <div
              key={index}
              className={`group bg-card rounded-xl p-8 border border-border hover:border-transparent transition-all duration-300 card-hover relative overflow-hidden`}
            >
              <div className={`absolute inset-0 rounded-xl bg-gradient-to-r ${feature.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10`}></div>
              <div className="absolute inset-[1px] bg-card rounded-xl -z-10"></div>

              <div className="flex justify-center mb-6">
                <div className={`w-16 h-16 rounded-lg bg-gradient-to-r ${feature.gradient} p-0.5`}>
                  <div className="w-full h-full bg-card rounded-md flex items-center justify-center">
                    <feature.icon className="w-8 h-8 text-foreground" />
                  </div>
                </div>
              </div>

              <h3 className="text-xl font-bold text-foreground mb-4 text-center">{feature.title}</h3>
              <p className="text-muted-foreground mb-6 text-pretty leading-relaxed text-center">{feature.description}</p>
              <ul className="space-y-3">
                {feature.features.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default Services
