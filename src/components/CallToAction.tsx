import type React from "react"
import { ArrowRight, Calendar, MessageCircle, Users, Zap } from "lucide-react"

const CallToAction: React.FC = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main CTA */}
        <div className="relative overflow-hidden rounded-2xl">
          {/* Background Gradient */}
          <div className="absolute inset-0 hero-gradient"></div>

          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-10 left-10 w-20 h-20 border border-white/20 rounded-full"></div>
            <div className="absolute top-20 right-20 w-16 h-16 border border-white/20 rounded-full"></div>
            <div className="absolute bottom-20 left-20 w-24 h-24 border border-white/20 rounded-full"></div>
            <div className="absolute bottom-10 right-10 w-18 h-18 border border-white/20 rounded-full"></div>
          </div>

          <div className="relative z-10 px-8 py-16 lg:px-16 lg:py-20 text-center">
            <div className="max-w-4xl mx-auto">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white mb-8">
                <Zap className="w-4 h-4 mr-2" />
                <span className="text-sm font-medium">Transform Your Development Process</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 text-balance">
                Ready to Transform Your
                <span className="block text-blue-200">Camera Development?</span>
              </h2>

              <p className="text-xl text-blue-100 mb-12 max-w-3xl mx-auto text-pretty">
                Join leading OEMs and ODMs who are accelerating their time-to-market with Emmetra's AI-powered
                solutions. Experience the future of camera technology today.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
                <button className="group bg-white text-primary px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-all duration-300 flex items-center">
                  <Calendar className="mr-2 w-5 h-5" />
                  Schedule a Demo
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
                <button className="group bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-primary transition-all duration-300 flex items-center">
                  <MessageCircle className="mr-2 w-5 h-5" />
                  Contact Our Experts
                </button>
              </div>

              {/* Trust Indicators */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-2xl mx-auto">
                <div className="flex flex-col items-center text-white">
                  <div className="text-2xl font-bold mb-2">Fortune 500</div>
                  <div className="text-blue-200 text-sm">Trusted by leading companies</div>
                </div>
                <div className="flex flex-col items-center text-white">
                  <div className="text-2xl font-bold mb-2">10x Faster</div>
                  <div className="text-blue-200 text-sm">Development acceleration</div>
                </div>
                <div className="flex flex-col items-center text-white">
                  <div className="text-2xl font-bold mb-2">80% Savings</div>
                  <div className="text-blue-200 text-sm">Cost reduction achieved</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Secondary CTAs */}
        <div className="grid md:grid-cols-3 gap-8 mt-16">
          <div className="bg-card rounded-xl p-8 border border-border text-center hover:border-primary/20 transition-all duration-300 card-hover">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <Calendar className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-xl font-bold text-foreground mb-4">Schedule Demo</h3>
            <p className="text-muted-foreground mb-6">
              See AutoIQ.ai in action with a personalized demonstration of our AI-powered platform.
            </p>
            <button className="group text-primary hover:text-primary/80 transition-colors flex items-center mx-auto">
              <span className="font-medium">Book Now</span>
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          <div className="bg-card rounded-xl p-8 border border-border text-center hover:border-primary/20 transition-all duration-300 card-hover">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <MessageCircle className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-xl font-bold text-foreground mb-4">Contact Experts</h3>
            <p className="text-muted-foreground mb-6">
              Speak with our technical team to discuss your specific camera development challenges.
            </p>
            <button className="group text-primary hover:text-primary/80 transition-colors flex items-center mx-auto">
              <span className="font-medium">Get in Touch</span>
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          <div className="bg-card rounded-xl p-8 border border-border text-center hover:border-primary/20 transition-all duration-300 card-hover">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <Users className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-xl font-bold text-foreground mb-4">Join Our Team</h3>
            <p className="text-muted-foreground mb-6">
              Be part of the team shaping the future of AI-powered camera technology and innovation.
            </p>
            <button className="group text-primary hover:text-primary/80 transition-colors flex items-center mx-auto">
              <span className="font-medium">View Careers</span>
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CallToAction
