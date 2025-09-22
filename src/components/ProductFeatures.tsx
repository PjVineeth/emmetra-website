import React from "react"
import { Bot, Cpu, Workflow, Zap, ArrowRight, CheckCircle } from "lucide-react"

const ProductFeatures: React.FC = () => {
  const [isDemoOpen, setIsDemoOpen] = React.useState(false)
  const [isDocsOpen, setIsDocsOpen] = React.useState(false)
  const [demoForm, setDemoForm] = React.useState({
    name: "",
    email: "",
    company: "",
    phone: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setDemoForm((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // TODO: replace with real submit action (API/email)
    console.log("Demo Request Submitted", demoForm)
    setIsDemoOpen(false)
  }

  React.useEffect(() => {
    const open = () => setIsDemoOpen(true)
    window.addEventListener('open-demo-modal', open)
    return () => {
      window.removeEventListener('open-demo-modal', open)
    }
  }, [])
  const features = [
    {
      icon: Bot,
      title: "Automated IQ Tuning",
      description:
        "Eliminates expensive trial-and-error processes through intelligent AI algorithms that optimize image quality automatically.",
      benefits: [
        "Supports various use-cases and industries",
        "Reduces manual intervention by 95%",
        "Consistent quality across all scenarios",
      ],
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      icon: Cpu,
      title: "Hardware Stack Adaptation",
      description:
        "Seamless adaptation to your preferred sensors and lenses with fast optimization for any hardware combination.",
      benefits: ["Universal sensor compatibility", "Rapid hardware integration", "Optimized performance tuning"],
      gradient: "from-purple-500 to-pink-500",
    },
    {
      icon: Workflow,
      title: "AI-Optimized Pipeline",
      description:
        "Complete camera pipeline optimization with advanced tuning and calibration services powered by cutting-edge AI.",
      benefits: ["End-to-end pipeline management", "Advanced calibration algorithms", "Real-time quality monitoring"],
      gradient: "from-green-500 to-teal-500",
    },
  ]

  return (
    <>
    <section id="autoiq" className="py-8 bg-white dark:bg-black">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-primary mb-6">
            <Bot className="w-4 h-4 mr-2" />
            <span className="text-sm font-medium">AutoIQ.ai Platform</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 text-balance">
            Meet AutoIQ.ai - Your AI-Powered
            <span className="text-gradient"> Image Quality Assistant</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            Revolutionary AI technology that transforms how camera systems are developed, tuned, and optimized for
            maximum performance.
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`group bg-card rounded-xl p-8 border border-border hover:border-transparent transition-all duration-300 card-hover relative overflow-hidden`}
            >
              <div className={`absolute inset-0 rounded-xl bg-gradient-to-r ${feature.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10`}></div>
              <div className="absolute inset-[1px] bg-card rounded-xl -z-10"></div>
              {/* Icon with Gradient Background */}
              <div className={`w-16 h-16 rounded-lg bg-gradient-to-r ${feature.gradient} p-0.5 mb-6`}>
                <div className="w-full h-full bg-card rounded-lg flex items-center justify-center">
                  <feature.icon className="w-8 h-8 text-foreground" />
                </div>
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-foreground mb-4">{feature.title}</h3>
              <p className="text-muted-foreground mb-6 text-pretty">{feature.description}</p>

              {/* Benefits List */}
              <ul className="space-y-3 mb-6">
                {feature.benefits.map((benefit, benefitIndex) => (
                  <li key={benefitIndex} className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-muted-foreground">{benefit}</span>
                  </li>
                ))}
              </ul>

              {/* Learn More Link */}
              <button className="group/btn flex items-center text-primary hover:text-primary/80 transition-colors" onClick={() => setIsDocsOpen(true)}>
                <span className="font-medium">Learn More</span>
                <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
              </button>
            </div>
          ))}
        </div>

        {/* Technology Showcase */}
        <div className="bg-card rounded-2xl p-8 lg:p-12 border border-border">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-primary mb-6">
                <Zap className="w-4 h-4 mr-2" />
                <span className="text-sm font-medium">Advanced AI Technology</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-6 text-balance">
                Powered by State-of-the-Art
                <span className="text-gradient"> Machine Learning</span>
              </h3>
              <p className="text-muted-foreground mb-8 text-pretty">
                Our proprietary AI algorithms have been trained on millions of image samples, enabling unprecedented
                accuracy in image quality optimization across diverse hardware configurations and use cases.
              </p>

              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-4">
                  <div className="text-2xl font-bold text-primary mb-2">1M+</div>
                  <div className="text-sm text-muted-foreground">Training Images</div>
                </div>
                <div className="text-center p-4">
                  <div className="text-2xl font-bold text-primary mb-2">50+</div>
                  <div className="text-sm text-muted-foreground">Sensor Types</div>
                </div>
                <div className="text-center p-4">
                  <div className="text-2xl font-bold text-primary mb-2">99.9%</div>
                  <div className="text-sm text-muted-foreground">Accuracy Rate</div>
                </div>
                <div className="text-center p-4">
                  <div className="text-2xl font-bold text-primary mb-2">24/7</div>
                  <div className="text-sm text-muted-foreground">Processing</div>
                </div>
              </div>
            </div>

            <div className="relative">
              {/* AI Visualization */}
              <div className="relative rounded-xl overflow-hidden">
                <img
                  src="/Product.png"
                  alt="AutoIQ.ai architecture"
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <h3 className="text-2xl font-bold text-foreground mb-4">Ready to Experience AutoIQ.ai?</h3>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            See how our AI-powered platform can transform your camera development process and accelerate your
            time-to-market.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => setIsDemoOpen(true)}
              className="bg-black dark:bg-white text-white dark:text-black px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-blue-800 transition-all duration-300 flex items-center shadow-lg"
            >
              Request Demo
            </button>
            <button
              onClick={() => setIsDocsOpen(true)}
              className="border border-border text-foreground px-8 py-3 rounded-lg font-semibold hover:bg-muted transition-colors"
            >
              View Documentation
            </button>
          </div>
        </div>
      </div>
    </section>
    {/* Demo Request Modal */}
    {isDemoOpen && (
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="bg-card rounded-2xl w-full max-w-2xl border border-border shadow-2xl overflow-hidden">
          <div className="flex items-center justify-between p-6 border-b border-border">
            <h4 className="text-xl font-bold">Book a Free Demo</h4>
            <button
              aria-label="Close modal"
              onClick={() => setIsDemoOpen(false)}
              className="p-2 rounded-md hover:bg-muted transition-colors"
            >
              ✕
            </button>
          </div>
          <form onSubmit={handleSubmit} className="p-6 space-y-5">
            <div>
              <label className="block text-sm font-medium mb-2" htmlFor="name">Name <span className="text-red-500">*</span></label>
              <input id="name" name="name" value={demoForm.name} onChange={handleChange} required className="w-full rounded-lg border border-border bg-background px-4 py-3 outline-none focus:ring-2 focus:ring-primary" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2" htmlFor="email">Email <span className="text-red-500">*</span></label>
              <input id="email" type="email" name="email" value={demoForm.email} onChange={handleChange} required className="w-full rounded-lg border border-border bg-background px-4 py-3 outline-none focus:ring-2 focus:ring-primary" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2" htmlFor="company">Company Name</label>
              <input id="company" name="company" value={demoForm.company} onChange={handleChange} className="w-full rounded-lg border border-border bg-background px-4 py-3 outline-none focus:ring-2 focus:ring-primary" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2" htmlFor="phone">Phone Number</label>
              <input id="phone" name="phone" value={demoForm.phone} onChange={handleChange} className="w-full rounded-lg border border-border bg-background px-4 py-3 outline-none focus:ring-2 focus:ring-primary" />
            </div>
            <div className="pt-2">
              <button type="submit" className="bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors">Submit</button>
            </div>
          </form>
        </div>
      </div>
    )}

    {/* Documentation Modal */}
    {isDocsOpen && (
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="bg-card rounded-2xl w-full max-w-3xl border border-border shadow-2xl overflow-hidden">
          <div className="flex items-center justify-between p-6 border-b border-border">
            <h4 className="text-xl font-bold">AutoIQ.ai Documentation</h4>
            <button
              aria-label="Close modal"
              onClick={() => setIsDocsOpen(false)}
              className="p-2 rounded-md hover:bg-muted transition-colors"
            >
              ✕
            </button>
          </div>
          <div className="p-6 space-y-4">
            <p className="text-muted-foreground">
              AutoIQ.ai is Emmetra’s AI-powered image quality platform that accelerates camera development by
              automatically tuning ISP parameters and optimizing end-to-end pipelines. It integrates with your SoC
              stack, supports sensor and lens variations, and provides dynamic ISP configuration via a control layer.
            </p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>Automated IQ tuning with data-driven algorithms and simulation support</li>
              <li>Hardware stack adaptation across sensors, lenses, and ISPs</li>
              <li>API-managed control software with parameter parsing on-device</li>
              <li>Offline and in-field calibration workflows for rapid iteration</li>
            </ul>
            <p className="text-muted-foreground">
              Use AutoIQ.ai to reduce manual iteration, standardize image quality across scenes, and reach
              production-ready tuning faster.
            </p>
          </div>
        </div>
      </div>
    )}
    {/* Listen for hero CTA handled via useEffect; no inline scripts needed */}
    </>
  )
}

export default ProductFeatures
