import { Card } from "./ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "./ui/accordion";
import { Badge } from "./ui/badge";
import { Flame, Recycle, Zap, Shield, Leaf, TrendingDown } from "lucide-react";
import { motion } from "motion/react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const technology = [
  {
    icon: Flame,
    title: "Thermal Conversion",
    description: "Advanced gasification technology converts waste at high temperatures (800-1000°C) in a controlled, oxygen-limited environment.",
  },
  {
    icon: Recycle,
    title: "Pre-Sorting",
    description: "AI-powered sorting removes recyclables and hazardous materials before processing, ensuring maximum efficiency.",
  },
  {
    icon: Zap,
    title: "Energy Generation",
    description: "The process generates electricity through steam turbines, producing enough energy to power thousands of homes.",
  },
  {
    icon: Shield,
    title: "Emission Control",
    description: "State-of-the-art scrubbers and filters ensure emissions meet or exceed environmental standards.",
  },
];

const benefits = [
  {
    icon: TrendingDown,
    title: "90% Less Emissions",
    description: "Compared to traditional landfills",
    color: "emerald",
  },
  {
    icon: Leaf,
    title: "95% Waste Reduction",
    description: "Minimal residual ash",
    color: "green",
  },
  {
    icon: Zap,
    title: "Clean Energy",
    description: "Powers 1,500+ homes daily",
    color: "blue",
  },
];

export function Education() {
  return (
    <section id="education" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl text-gray-900 mb-4">
            Understanding Waste-to-Energy
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Learn how our clean technology transforms waste into renewable electricity
          </p>
        </motion.div>

        {/* Technology Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {technology.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="p-6 h-full border-gray-200 hover:border-emerald-300 transition-colors">
                  <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-emerald-600" />
                  </div>
                  <h3 className="text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm">{item.description}</p>
                </Card>
              </motion.div>
            );
          })}
        </div>

        {/* Benefits Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl text-gray-900 mb-6">
                Environmental Benefits
              </h3>
              <div className="space-y-6">
                {benefits.map((benefit, index) => {
                  const Icon = benefit.icon;
                  return (
                    <div key={index} className="flex items-start gap-4">
                      <div
                        className={`
                          w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0
                          ${benefit.color === "emerald" ? "bg-emerald-100" : ""}
                          ${benefit.color === "green" ? "bg-green-100" : ""}
                          ${benefit.color === "blue" ? "bg-blue-100" : ""}
                        `}
                      >
                        <Icon
                          className={`
                            w-6 h-6
                            ${benefit.color === "emerald" ? "text-emerald-600" : ""}
                            ${benefit.color === "green" ? "text-green-600" : ""}
                            ${benefit.color === "blue" ? "text-blue-600" : ""}
                          `}
                        />
                      </div>
                      <div>
                        <h4 className="text-gray-900 mb-1">{benefit.title}</h4>
                        <p className="text-gray-600">{benefit.description}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="relative rounded-2xl overflow-hidden shadow-xl">
              <ImageWithFallback
                src="src/images/recycle.png"
                alt="Green energy plant"
                className="w-full h-auto"
              />
            </div>
          </div>
        </motion.div>

        {/* FAQ Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <Card className="p-8 md:p-12 border-gray-200">
            <h3 className="text-2xl text-gray-900 mb-8">
              Frequently Asked Questions
            </h3>
            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="item-1">
                <AccordionTrigger>
                  Is waste-to-energy safe for the environment?
                </AccordionTrigger>
                <AccordionContent>
                  Yes, modern waste-to-energy facilities use advanced emission control
                  systems that meet or exceed all environmental standards. Our
                  facilities reduce greenhouse gas emissions by 90% compared to
                  landfills and are continuously monitored for safety.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2">
                <AccordionTrigger>
                  What types of waste can be converted to energy?
                </AccordionTrigger>
                <AccordionContent>
                  We accept non-recyclable municipal solid waste, including plastics,
                  paper products, food waste, and textiles. Hazardous materials,
                  electronics, and batteries are excluded and must be disposed of
                  through proper channels.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3">
                <AccordionTrigger>
                  How much energy is generated from waste?
                </AccordionTrigger>
                <AccordionContent>
                  On average, one ton of waste generates approximately 600 kWh of
                  electricity - enough to power a typical home for about 20 days. Our
                  facilities currently generate enough energy to power over 1,500
                  homes daily.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4">
                <AccordionTrigger>
                  What certifications does ReCharge hold?
                </AccordionTrigger>
                <AccordionContent>
                  We hold 12 environmental and safety certifications including ISO
                  14001 (Environmental Management), LEED certification for our
                  facilities, and compliance with EPA standards. We're also B Corp
                  certified and carbon neutral.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5">
                <AccordionTrigger>
                  How can I track my environmental impact?
                </AccordionTrigger>
                <AccordionContent>
                  Every customer receives access to a personal impact dashboard
                  through our mobile app and website. You can see real-time data on
                  waste collected, energy generated, and CO₂ emissions avoided from
                  your contributions.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </Card>
        </motion.div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-16 text-center"
        >
          <p className="text-gray-600 mb-6">Trusted & Certified By</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Badge variant="outline" className="px-4 py-2">
              ISO 14001
            </Badge>
            <Badge variant="outline" className="px-4 py-2">
              B Corp Certified
            </Badge>
            <Badge variant="outline" className="px-4 py-2">
              LEED Gold
            </Badge>
            <Badge variant="outline" className="px-4 py-2">
              EPA Compliant
            </Badge>
            <Badge variant="outline" className="px-4 py-2">
              Carbon Neutral
            </Badge>
            <Badge variant="outline" className="px-4 py-2">
              Energy Star
            </Badge>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
