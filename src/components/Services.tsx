import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { Check, Building2, Users, MapPin } from "lucide-react";
import { motion } from "motion/react";

const residentialPlans = [
  {
    name: "Starter",
    price: "$19",
    period: "month",
    description: "Perfect for small households",
    features: [
      "1 pickup per month",
      "Up to 50 lbs of waste",
      "Email support",
      "Mobile app access",
      "Impact dashboard",
    ],
    popular: false,
  },
  {
    name: "Family",
    price: "$39",
    period: "month",
    description: "Ideal for families",
    features: [
      "2 pickups per month",
      "Up to 150 lbs of waste",
      "Priority support",
      "Mobile app access",
      "Impact dashboard",
      "Recycling consultation",
    ],
    popular: true,
  },
  {
    name: "Premium",
    price: "$69",
    period: "month",
    description: "For larger households",
    features: [
      "Weekly pickups",
      "Unlimited waste",
      "24/7 priority support",
      "Mobile app access",
      "Advanced analytics",
      "Recycling consultation",
      "Carbon offset credits",
    ],
    popular: false,
  },
];

const businessFeatures = [
  "Custom pickup schedules",
  "Dedicated account manager",
  "ESG impact reporting",
  "Employee engagement programs",
  "Waste audit services",
  "Sustainability certifications",
];

export function Services() {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Residential Services */}
        <div className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-700 px-4 py-2 rounded-full mb-4">
              <Users className="w-4 h-4" />
              <span className="text-sm">For Households</span>
            </div>
            <h2 className="text-3xl md:text-4xl text-gray-900 mb-4">
              Residential Services
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Choose the plan that fits your household's needs
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {residentialPlans.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card
                  className={`p-8 h-full flex flex-col ${
                    plan.popular
                      ? "border-emerald-500 border-2 shadow-lg relative"
                      : "border-gray-200"
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute top-0 right-6 transform -translate-y-1/2">
                      <Badge className="bg-emerald-500 text-white">
                        Most Popular
                      </Badge>
                    </div>
                  )}

                  <div className="mb-6">
                    <h3 className="text-gray-900 mb-2">{plan.name}</h3>
                    <div className="flex items-baseline gap-1 mb-2">
                      <span className="text-4xl text-gray-900">{plan.price}</span>
                      <span className="text-gray-600">/{plan.period}</span>
                    </div>
                    <p className="text-gray-600">{plan.description}</p>
                  </div>

                  <div className="flex-1 mb-8">
                    <ul className="space-y-3">
                      {plan.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <Check className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Button
                    className={
                      plan.popular
                        ? "bg-emerald-500 hover:bg-emerald-600 text-white w-full"
                        : "w-full"
                    }
                    variant={plan.popular ? "default" : "outline"}
                  >
                    Get Started
                  </Button>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Business Solutions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <Card className="p-8 md:p-12 bg-gradient-to-br from-emerald-50 to-blue-50 border-emerald-200">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full mb-4">
                  <Building2 className="w-4 h-4" />
                  <span className="text-sm">For Businesses</span>
                </div>
                <h2 className="text-3xl md:text-4xl text-gray-900 mb-4">
                  Business Solutions
                </h2>
                <p className="text-lg text-gray-600 mb-6">
                  Demonstrate your commitment to sustainability with our
                  enterprise-grade waste-to-energy solutions. Perfect for CSR and
                  ESG initiatives.
                </p>

                <div className="grid sm:grid-cols-2 gap-4 mb-8">
                  {businessFeatures.map((feature, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button
                    size="lg"
                    className="bg-emerald-500 hover:bg-emerald-600 text-white"
                  >
                    Request Demo
                  </Button>
                  <Button size="lg" variant="outline">
                    Download Brochure
                  </Button>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-xl">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-emerald-600" />
                  </div>
                  <div>
                    <h3 className="text-gray-900">Real-Time Tracking</h3>
                    <p className="text-gray-600 text-sm">
                      Monitor your impact 24/7
                    </p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                    <span className="text-gray-700">Waste Collected</span>
                    <span className="text-emerald-600">1,247 lbs</span>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                    <span className="text-gray-700">Energy Generated</span>
                    <span className="text-blue-600">856 kWh</span>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                    <span className="text-gray-700">CO₂ Reduction</span>
                    <span className="text-green-600">423 lbs</span>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-emerald-50 rounded-lg border border-emerald-200">
                    <span className="text-gray-700">ESG Score</span>
                    <span className="text-emerald-600">94/100</span>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
