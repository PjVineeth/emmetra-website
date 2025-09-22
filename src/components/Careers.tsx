import React from "react"
import { Briefcase, TrendingUp, Heart, Globe, ArrowRight } from "lucide-react"

const Careers: React.FC = () => {
  const [isOpen, setIsOpen] = React.useState(false)

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    // For now, just log the values. Wire to backend/email later.
    // eslint-disable-next-line no-console
    console.log("Career application submitted", Object.fromEntries(formData.entries()))
    setIsOpen(false)
    e.currentTarget.reset()
  }

  return (
    <section id="careers" className="py-2 bg-white dark:bg-black">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* CTA */}
        <div className="bg-card rounded-2xl p-8 lg:p-12 border border-border text-center">
          <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-6">
            Ready to Join the <span className="text-gradient">Emmetra Team?</span>
          </h3>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            If you're eager to dive into a stimulating role where you'll help shape cutting-edge vision systems that brings technology closer to humanity.
          </p>
          <button onClick={() => setIsOpen(true)} className="group bg-primary text-primary-foreground px-8 py-4 rounded-lg font-semibold hover:bg-primary/90 transition-all duration-300 flex items-center mx-auto">
            Apply Now
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 backdrop-blur supports-[backdrop-filter]:bg-background/60">
          <div className="bg-card rounded-2xl w-full max-w-4xl border border-border shadow-2xl overflow-hidden">
            <div className="flex items-center justify-between p-6 border-b border-border">
              <h4 className="text-xl font-bold">Contact Us</h4>
              <button
                aria-label="Close modal"
                onClick={() => setIsOpen(false)}
                className="p-2 rounded-md hover:bg-muted transition-colors"
              >
                ✕
              </button>
            </div>

            <form onSubmit={handleSubmit} className="p-6 space-y-5">
              <div className="grid grid-cols-1 gap-5">
                <div>
                  <label className="block text-sm font-medium mb-2" htmlFor="name">Name <span className="text-red-500">*</span></label>
                  <input id="name" name="name" required className="w-full rounded-lg border border-border bg-background px-4 py-3 outline-none focus:ring-2 focus:ring-primary" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2" htmlFor="phone">Phone</label>
                  <input id="phone" name="phone" className="w-full rounded-lg border border-border bg-background px-4 py-3 outline-none focus:ring-2 focus:ring-primary" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2" htmlFor="email">Email <span className="text-red-500">*</span></label>
                  <input id="email" type="email" name="email" required className="w-full rounded-lg border border-border bg-background px-4 py-3 outline-none focus:ring-2 focus:ring-primary" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2" htmlFor="message">Message <span className="text-red-500">*</span></label>
                  <textarea id="message" name="message" rows={6} required className="w-full rounded-lg border border-border bg-background px-4 py-3 outline-none focus:ring-2 focus:ring-primary resize-y" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2" htmlFor="resume">File Upload <span className="text-red-500">*</span></label>
                  <input id="resume" name="resume" type="file" required className="w-full rounded-lg border border-border bg-background file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:bg-primary file:text-primary-foreground file:cursor-pointer hover:file:bg-primary/90" />
                </div>
              </div>

              <div className="pt-2">
                <button type="submit" className="bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors">Submit</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </section>
  )
}

export default Careers
