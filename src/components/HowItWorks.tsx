import { Calendar, Truck, Zap, Home } from "lucide-react";
import { motion } from "motion/react";

const steps = [
  {
    icon: Calendar,
    title: "Schedule Pickup",
    description: "Book a collection time that works for you through our app or website. Simple, fast, and flexible.",
    color: "emerald",
  },
  {
    icon: Truck,
    title: "We Collect & Sort",
    description: "Our trained team collects your non-recyclable waste and sorts it at our state-of-the-art facility.",
    color: "blue",
  },
  {
    icon: Zap,
    title: "Convert to Energy",
    description: "Advanced thermal conversion technology transforms waste into clean, renewable electricity.",
    color: "amber",
  },
  {
    icon: Home,
    title: "Power Communities",
    description: "The energy generated powers local homes and businesses, reducing reliance on fossil fuels.",
    color: "green",
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl text-gray-900 mb-4">
              How It Works
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our simple four-step process transforms your waste into renewable energy
            </p>
          </motion.div>
        </div>

        {/* Steps Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {/* Connection Lines (desktop only) */}
          <div className="hidden lg:block absolute top-20 left-0 right-0 h-0.5 bg-gradient-to-r from-emerald-200 via-blue-200 to-green-200"></div>

          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative"
              >
                <div className="flex flex-col items-center text-center">
                  {/* Icon Circle */}
                  <div
                    className={`
                      w-20 h-20 rounded-full flex items-center justify-center mb-6 relative z-10
                      ${step.color === "emerald" ? "bg-emerald-100" : ""}
                      ${step.color === "blue" ? "bg-blue-100" : ""}
                      ${step.color === "amber" ? "bg-amber-100" : ""}
                      ${step.color === "green" ? "bg-green-100" : ""}
                    `}
                  >
                    <Icon
                      className={`
                        w-10 h-10
                        ${step.color === "emerald" ? "text-emerald-600" : ""}
                        ${step.color === "blue" ? "text-blue-600" : ""}
                        ${step.color === "amber" ? "text-amber-600" : ""}
                        ${step.color === "green" ? "text-green-600" : ""}
                      `}
                    />
                  </div>

                  {/* Step Number */}
                  <div className="absolute top-0 right-0 left-0 flex justify-center">
                    <span className="text-sm bg-white px-3 py-1 rounded-full border-2 border-gray-200 text-gray-500">
                      Step {index + 1}
                    </span>
                  </div>

                  {/* Content */}
                  <h3 className="text-gray-900 mb-3">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
