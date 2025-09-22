import type React from "react"
import {
  Bot,
  Camera,
  Scan,
  Stethoscope,
  Laptop,
  Plane,
  Factory,
  Car
} from "lucide-react"

const segments = [
  {
    icon: Bot,
    title: "Robotics",
    description:
      "Embedded cameras enable visual perception for tasks like object detection, recognition, and autonomous navigation",
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    icon: Camera,
    title: "Smart Surveillance",
    description:
      "Embedded cameras are deployed for security monitoring, facial recognition and behavioural analysis",
    gradient: "from-purple-500 to-pink-500",
  },
  {
    icon: Scan,
    title: "AR/VR",
    description:
      "Embedded cameras in AR/VR for tracking user movements, map environments, and enable immersive experiences",
    gradient: "from-emerald-500 to-teal-500",
  },
  {
    icon: Stethoscope,
    title: "Medical",
    description:
      "Applying embedded cameras in medical devices for diagnostics, surgical procedures, and telemedicine",
    gradient: "from-orange-500 to-red-500",
  },
  {
    icon: Laptop,
    title: "Laptops / Notebooks",
    description:
      "Integrating cameras in laptops and notebooks for video calls, image capture, and facial recognition",
    gradient: "from-sky-500 to-indigo-500",
  },
  {
    icon: Plane,
    title: "Drones",
    description:
      "Incorporating cameras in drones for aerial photography, surveillance, and delivery applications",
    gradient: "from-pink-500 to-rose-500",
  },
  {
    icon: Factory,
    title: "Industrial",
    description:
      "Cameras are deployed in machine vision systems for quality control, automated inspection and process monitoring",
    gradient: "from-lime-500 to-green-500",
  },
  {
    icon: Car,
    title: "Automotive",
    description:
      "Integrating cameras in vehicles for driver assistance systems, parking assistance, and 360-degree views",
    gradient: "from-cyan-500 to-blue-500",
  }
]

const IndustrySegments: React.FC = () => {
  return (
    <section className="py-20 bg-white dark:bg-black">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-card rounded-2xl p-8 lg:p-12 border border-border">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
              Industry <span className="text-gradient">Segments</span>
            </h2>
            <p className="mt-3 text-muted-foreground">
              Key Areas of Embedded Camera Product Engineering
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {segments.map(({ icon: Icon, title, description, gradient }) => (
              <div
                key={title}
                className={`group bg-card rounded-xl p-8 border border-border hover:border-transparent transition-all duration-300 card-hover relative overflow-hidden`}
              >
                <div className={`absolute inset-0 rounded-xl bg-gradient-to-r ${gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10`}></div>
                <div className="absolute inset-[1px] bg-card rounded-xl -z-10"></div>

                <div className="flex justify-center mb-6">
                  <div className={`w-16 h-16 rounded-lg bg-gradient-to-r ${gradient} p-0.5`}>
                    <div className="w-full h-full bg-card rounded-md flex items-center justify-center">
                      <Icon className="w-8 h-8 text-foreground" />
                    </div>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-foreground mb-3 text-center">{title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed text-center">
                  {description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default IndustrySegments
