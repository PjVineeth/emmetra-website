import type React from "react"
import { Microscope, MapPin, Settings, ArrowRight } from "lucide-react"

const ImageQualityLab: React.FC = () => {
  return (
    <section className="py-20 bg-white dark:bg-black">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-card rounded-2xl p-8 lg:p-12 border border-border">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 mb-6">
              <Microscope className="w-4 h-4 mr-2" />
              <span className="text-sm font-medium">Image Quality Lab</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6 text-balance">
              State-of-the-Art <span className="text-gradient">Quality Assurance</span>
            </h2>
            <p className="text-xl text-muted-foreground mb-8 text-pretty">
              Our advanced Image Quality Lab in Frankfurt am Main, Germany, sets the global standard for camera testing
              and calibration with cutting-edge equipment and German engineering precision.
            </p>

            {/* Location */}
            <div className="flex items-center space-x-3 mb-8">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center">
                <MapPin className="w-6 h-6 text-blue-600 dark:text-blue-400" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground">Frankfurt am Main, Germany</h3>
                <p className="text-sm text-muted-foreground">Hauptwache Technology District</p>
              </div>
            </div>

            {/* Services */}
            <div className="space-y-6 mb-8">
              <div className="flex items-start space-x-4">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Advanced Camera Tuning</h4>
                  <p className="text-sm text-muted-foreground">
                    Precision calibration services using industry-leading measurement and analysis equipment
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Quality Validation</h4>
                  <p className="text-sm text-muted-foreground">
                    Comprehensive testing protocols ensuring highest image quality standards
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Calibration Services</h4>
                  <p className="text-sm text-muted-foreground">
                    Professional camera system calibration for optimal performance
                  </p>
                </div>
              </div>
            </div>

            <button className="group flex items-center text-primary hover:text-primary/80 transition-colors">
              <span className="font-medium">Schedule Lab Visit</span>
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Visual */}
          <div className="relative">
            <div className="relative bg-gradient-to-br from-blue-500/10 to-indigo-500/10 rounded-2xl p-8 border border-blue-500/20">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-indigo-500/5 rounded-2xl"></div>

              {/* Lab Equipment Visualization */}
              <div className="relative">
                <div className="grid grid-cols-2 gap-6 mb-8">
                  <div className="bg-card rounded-lg p-6 border border-border text-center">
                    <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Microscope className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                    </div>
                    <h4 className="font-semibold text-foreground mb-2">Precision Equipment</h4>
                    <p className="text-xs text-muted-foreground">State-of-the-art testing tools</p>
                  </div>
                  <div className="bg-card rounded-lg p-6 border border-border text-center">
                    <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Settings className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                    </div>
                    <h4 className="font-semibold text-foreground mb-2">Calibration Tools</h4>
                    <p className="text-xs text-muted-foreground">Professional grade systems</p>
                  </div>
                </div>

                {/* Lab Stats */}
                <div className="bg-card rounded-lg p-6 border border-border">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-sm font-medium text-foreground">Lab Capabilities</span>
                    <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse"></div>
                  </div>
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div>
                      <div className="text-lg font-bold text-primary mb-1">24/7</div>
                      <div className="text-xs text-muted-foreground">Operation</div>
                    </div>
                    <div>
                      <div className="text-lg font-bold text-primary mb-1">ISO</div>
                      <div className="text-xs text-muted-foreground">Certified</div>
                    </div>
                    <div>
                      <div className="text-lg font-bold text-primary mb-1">100%</div>
                      <div className="text-xs text-muted-foreground">Accuracy</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </section>
  )
}

export default ImageQualityLab
