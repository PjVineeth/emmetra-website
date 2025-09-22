import type React from "react"
import { useState } from "react"
import { Users, Building2, Zap, Globe, ArrowRight, CheckCircle, X } from "lucide-react"

const Partnership: React.FC = () => {
  const partnerships = [
    {
      name: "Renesas",
      description: "Strategic collaboration for AI-driven camera technology innovation",
      logo: "/renesas-logo.jpg",
      benefits: ["Vision AI platform integration", "Hardware acceleration support", "Joint technology development"],
    },
    {
      name: "Fortune 500 OEMs",
      description: "Trusted by leading automotive and technology companies worldwide",
      logo: "/fortune-500-companies-logo.jpg",
      benefits: ["Automotive industry expertise", "Enterprise-grade solutions", "Global deployment support"],
    },
  ]

  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <section id="partnerships" className="py-8 bg-white dark:bg-black">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-primary mb-6">
            <Users className="w-4 h-4 mr-2" />
            <span className="text-sm font-medium">Strategic Partnerships</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 text-balance">
            <span className="text-gradient">Industry-Leading</span> Collaborations
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
          Partners to redefine camera technology through AI-driven innovation and accelerated development.
          </p>
        </div>

        {/* Partnership Highlight */}
        <div className="bg-card rounded-2xl p-8 lg:p-12 border border-border mb-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center py-2 mb-2">
                <img src="/Renesas.png" alt="Renesas logo" className="h-8 object-contain" />
              </div>
              {/* <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-6 text-balance">
                Powered by <span className="text-gradient">Renesas Technology</span>
              </h3> */}
              <p className="text-sm text-muted-foreground mb-6 text-pretty ">
                AUTOIQ.ai, Emmetra’s agentic AI tool, streamlines and automates camera image‑quality tuning across a
                breadth of imaging applications. It empowers camera product companies to seamlessly adapt to preferred
                hardware stacks (image sensors and lenses), reducing tuning time from months to days. Emmetra’s
                solution enhances machine‑vision performance by optimizing the ISP for sharper, more accurate images and
                faster time‑to‑market.
              </p>

              <p className="text-sm text-muted-foreground mb-8 text-pretty">
                Currently, AUTOIQ.ai supports the RZ/V2L MPU evaluation kit—a general‑purpose microprocessor featuring
                Renesas’ proprietary DRP‑AI accelerator, a 1.2GHz dual‑core Arm® Cortex®‑A55 CPU, and a 3D graphics and
                video codec engine. We’re expanding support across the Vision AI RZ/V series family.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-start space-x-4">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">DRP-AI Acceleration</h4>
                    <p className="text-sm text-muted-foreground">
                      Hardware-accelerated AI processing for real-time image quality optimization
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Dual-Core Architecture</h4>
                    <p className="text-sm text-muted-foreground">
                      Arm Cortex-A55 processors for efficient parallel processing capabilities
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">3D Graphics Support</h4>
                    <p className="text-sm text-muted-foreground">
                      Advanced graphics processing for complex image analysis and visualization
                    </p>
                  </div>
                </div>
              </div>

              <button onClick={() => setIsModalOpen(true)} className="group flex items-center text-primary hover:text-primary/80 transition-colors">
                <span className="font-medium">Learn More About Partnership</span>
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            <div className="relative">
              {/* Technology Visualization */}
              <div className="relative bg-gradient-to-br from-primary/10 to-secondary/10 rounded-xl p-8 border border-primary/20">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-xl"></div>
                <div className="relative">
                  {/* Chip Visualization */}
                  <div className="bg-card rounded-lg p-6 border border-border mb-6">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-sm font-medium text-foreground">RZ/V2L MPU</span>
                      <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-primary/20 rounded p-3 text-center">
                        <div className="text-xs text-muted-foreground mb-1">DRP-AI</div>
                        <div className="text-sm font-semibold text-foreground">Active</div>
        </div>
                      <div className="bg-secondary/20 rounded p-3 text-center">
                        <div className="text-xs text-muted-foreground mb-1">Cortex-A55</div>
                        <div className="text-sm font-semibold text-foreground">Dual Core</div>
          </div>
              </div>
            </div>

                  {/* Performance Metrics */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-card rounded-lg p-4 border border-border text-center">
                      <div className="text-lg font-bold text-primary mb-1">2.5x</div>
                      <div className="text-xs text-muted-foreground">Faster Processing</div>
              </div>
                    <div className="bg-card rounded-lg p-4 border border-border text-center">
                      <div className="text-lg font-bold text-primary mb-1">60%</div>
                      <div className="text-xs text-muted-foreground">Power Efficient</div>
            </div>
              </div>
            </div>
              </div>
            </div>
          </div>
        </div>

      </div>
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
          <div className="bg-background rounded-2xl w-full max-w-5xl max-h-[90vh] overflow-hidden border border-border shadow-2xl">
            <div className="flex justify-end items-center p-4 border-b border-border">
              <button
                onClick={() => setIsModalOpen(false)}
                className="p-2 hover:bg-muted rounded-full transition-colors"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="p-6 overflow-y-auto max-h-[80vh] space-y-6">
              <h3 className="text-2xl sm:text-3xl font-bold text-foreground">
                Emmetra Partners with Renesas to Advance Agentic AI-Powered Imaging Solutions
              </h3>

              <p className="text-muted-foreground text-pretty">
                Emmetra Inc is thrilled to announce its collaboration with Renesas Electronics Corporation, a global
                leader in the semiconductor industry. This collaboration marks a significant milestone in our mission to
                redefine high-performance imaging through AI-driven automation. Together, Emmetra is accelerating product
                development for broader market OEMs and ODMs all over the world.
              </p>

              <p className="text-muted-foreground text-pretty">
                Emmetra’s AUTOIQ.ai, an Agentic AI powered tool streamlines camera image quality tuning across a wide
                range of imaging applications. Typically, optimizing camera image quality is a time-intensive process,
                often takes months. AUTOIQ.ai changes that workflow significantly and accelerates the tuning time from
                few months to just few days. By integrating AUTOIQ.ai, Renesas broader market camera customers can
                achieve faster time-to-market, high performance image quality, and reduced overall development costs.
              </p>

              <h4 className="text-xl font-semibold text-foreground">Optimized for the RZ/V2L MPU and Beyond</h4>
              <p className="text-muted-foreground text-pretty">
                Currently, Emmetra’s AUTOIQ.ai supports the Renesas RZ/V2L MPU, a powerful general-purpose microprocessor
                for vision AI applications that comes with a powerful accelerator, 1.2GHz dual-core Arm® Cortex®-A55 CPU,
                3D graphics, video codec engine and RZ/V2L- EVKIT as the evaluation kit.
              </p>
              <p className="text-muted-foreground text-pretty">
                Moving forward, we are expanding our support to cover other suitable devices in the Vision AI RZ/V series
                family, ensuring broader accessibility to AI-powered imaging solutions.
              </p>

              <p className="text-muted-foreground text-pretty">
                By combining Renesas’ powerful silicon hardware with Emmetra’s agentic AI powered tool, we are enabling
                end customers to build better, faster, and smarter vision systems that will shape the future of imaging
                technology.
              </p>

              <blockquote className="border-l-2 border-primary pl-4 text-muted-foreground">
                “Renesas continues to expand its broad Vision AI ecosystem. Our collaboration with Emmetra allows us to
                combine the Renesas RZ/V series and Emmetra’s image quality tuning technology, enabling developers to
                bring their Vision AI applications to market faster,” said Kaushal Vora, Senior Director of Embedded
                CoreTechnologies and Ecosystem Enablement at Renesas
              </blockquote>
              <blockquote className="border-l-2 border-primary pl-4 text-muted-foreground">
                “The integration of AUTOIQ.ai will streamline and automate the development process, ensuring that Renesas
                customers can unlock the full potential of their Vision AI solutions with minimal effort, enabling
                superior image quality and accelerate time to market,” said Radhesh Bhat, Chief Technology Officer at
                Emmetra Inc.
              </blockquote>

              <h4 className="text-xl font-semibold text-foreground">About Emmetra</h4>
              <p className="text-muted-foreground text-pretty">
                Emmetra is a deeptech startup based out of California with a development center in Bangalore, India.
                Emmetra empowers camera product companies to achieve perfect vision by unlocking the potential of cameras
                using Emmetra’s AI based development tool. Learn more at <a className="underline" href="https://www.emmetra.com" target="_blank" rel="noreferrer">www.emmetra.com</a>.
              </p>
              <p className="text-muted-foreground">Stay current with the latest Emmetra updates via LinkedIn.</p>

              <h4 className="text-xl font-semibold text-foreground">Get in touch</h4>
              <p className="text-muted-foreground text-pretty">
                Have questions about how Emmetra’s AUTOIQ.ai tool enhances Renesas solutions? We’d love to connect!
              </p>
              <p className="text-muted-foreground">Contact us: <a className="underline" href="mailto:sales@emmetra.com">sales@emmetra.com</a></p>
              <div>
                <a
                  href="mailto:sales@emmetra.com?subject=AUTOIQ.ai%20Demo%20Request"
                  className="inline-flex items-center px-5 py-3 rounded-lg bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-colors"
                >
                  Sign up for a free demo
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

export default Partnership
