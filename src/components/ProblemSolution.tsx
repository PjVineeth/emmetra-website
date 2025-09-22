import type React from "react"
import { Clock, DollarSign, Target, Zap, CheckCircle, TrendingUp } from "lucide-react"

const ProblemSolution: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 text-balance">
            Transforming Camera Development Through
            <span className="text-gradient"> AI Innovation</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            Traditional camera tuning processes are holding back innovation. We're changing that with AI-powered
            automation.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Problem Side */}
          <div className="space-y-8">
            <div className="text-center lg:text-left">
              <h3 className="text-2xl font-bold text-foreground mb-6">Traditional Approach</h3>
            </div>

            <div className="space-y-6">
              <div className="flex items-start space-x-4 p-6 bg-red-50 dark:bg-red-900/20 rounded-lg border border-red-200 dark:border-red-800">
                <div className="flex-shrink-0 w-12 h-12 bg-red-100 dark:bg-red-900/40 rounded-full flex items-center justify-center">
                  <Clock className="w-6 h-6 text-red-600 dark:text-red-400" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Time-Consuming Process</h4>
                  <p className="text-muted-foreground">Months of manual tuning and trial-and-error testing</p>
                </div>
              </div>

              <div className="flex items-start space-x-4 p-6 bg-red-50 dark:bg-red-900/20 rounded-lg border border-red-200 dark:border-red-800">
                <div className="flex-shrink-0 w-12 h-12 bg-red-100 dark:bg-red-900/40 rounded-full flex items-center justify-center">
                  <DollarSign className="w-6 h-6 text-red-600 dark:text-red-400" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Expensive Resources</h4>
                  <p className="text-muted-foreground">High costs for specialized engineers and equipment</p>
                </div>
              </div>

              <div className="flex items-start space-x-4 p-6 bg-red-50 dark:bg-red-900/20 rounded-lg border border-red-200 dark:border-red-800">
                <div className="flex-shrink-0 w-12 h-12 bg-red-100 dark:bg-red-900/40 rounded-full flex items-center justify-center">
                  <Target className="w-6 h-6 text-red-600 dark:text-red-400" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Inconsistent Results</h4>
                  <p className="text-muted-foreground">Variable quality depending on manual expertise</p>
                </div>
              </div>
            </div>
          </div>

          {/* Solution Side */}
          <div className="space-y-8">
            <div className="text-center lg:text-left">
              <h3 className="text-2xl font-bold text-foreground mb-6">Emmetra's AI Solution</h3>
            </div>

            <div className="space-y-6">
              <div className="flex items-start space-x-4 p-6 bg-green-50 dark:bg-green-900/20 rounded-lg border border-green-200 dark:border-green-800">
                <div className="flex-shrink-0 w-12 h-12 bg-green-100 dark:bg-green-900/40 rounded-full flex items-center justify-center">
                  <Zap className="w-6 h-6 text-green-600 dark:text-green-400" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Automated AI Processing</h4>
                  <p className="text-muted-foreground">Days instead of months with intelligent automation</p>
                </div>
              </div>

              <div className="flex items-start space-x-4 p-6 bg-green-50 dark:bg-green-900/20 rounded-lg border border-green-200 dark:border-green-800">
                <div className="flex-shrink-0 w-12 h-12 bg-green-100 dark:bg-green-900/40 rounded-full flex items-center justify-center">
                  <CheckCircle className="w-6 h-6 text-green-600 dark:text-green-400" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Cost-Effective Solution</h4>
                  <p className="text-muted-foreground">Reduce development costs by up to 80%</p>
                </div>
              </div>

              <div className="flex items-start space-x-4 p-6 bg-green-50 dark:bg-green-900/20 rounded-lg border border-green-200 dark:border-green-800">
                <div className="flex-shrink-0 w-12 h-12 bg-green-100 dark:bg-green-900/40 rounded-full flex items-center justify-center">
                  <TrendingUp className="w-6 h-6 text-green-600 dark:text-green-400" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Superior Quality</h4>
                  <p className="text-muted-foreground">Consistent, highest-standard image quality results</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Key Benefits */}
        <div className="mt-16 text-center">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="p-6">
              <div className="text-4xl font-bold text-primary mb-2">80%</div>
              <div className="text-lg font-semibold text-foreground mb-2">Cost Reduction</div>
              <div className="text-muted-foreground">Lower development expenses</div>
            </div>
            <div className="p-6">
              <div className="text-4xl font-bold text-primary mb-2">10x</div>
              <div className="text-lg font-semibold text-foreground mb-2">Faster Time-to-Market</div>
              <div className="text-muted-foreground">From months to days</div>
            </div>
            <div className="p-6">
              <div className="text-4xl font-bold text-primary mb-2">99%</div>
              <div className="text-lg font-semibold text-foreground mb-2">Quality Consistency</div>
              <div className="text-muted-foreground">Reliable, repeatable results</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProblemSolution
