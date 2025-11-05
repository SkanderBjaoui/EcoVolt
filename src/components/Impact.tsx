import { Card } from "./ui/card";
import { Progress } from "./ui/progress";
import { TrendingUp, Award, Users, Globe } from "lucide-react";
import { motion } from "motion/react";

const stats = [
  {
    icon: Globe,
    value: "15+",
    label: "Cities Served",
    color: "emerald",
  },
  {
    icon: Users,
    value: "50K+",
    label: "Active Users",
    color: "blue",
  },
  {
    icon: TrendingUp,
    value: "98%",
    label: "Satisfaction Rate",
    color: "green",
  },
  {
    icon: Award,
    value: "12",
    label: "Certifications",
    color: "amber",
  },
];

const impactMetrics = [
  {
    title: "Waste Diverted from Landfills",
    current: 2847,
    target: 5000,
    unit: "tons",
    percentage: 57,
  },
  {
    title: "Renewable Energy Generated",
    current: 4.2,
    target: 10,
    unit: "GWh",
    percentage: 42,
  },
  {
    title: "Carbon Emissions Avoided",
    current: 4892,
    target: 8000,
    unit: "tons CO₂",
    percentage: 61,
  },
];

export function Impact() {
  return (
    <section id="impact" className="py-20 bg-white">
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
            Our Environmental Impact
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Transparent data showing how we're building a cleaner future together
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="p-6 text-center border-gray-200 hover:border-emerald-300 transition-colors">
                  <div
                    className={`
                      w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-4
                      ${stat.color === "emerald" ? "bg-emerald-100" : ""}
                      ${stat.color === "blue" ? "bg-blue-100" : ""}
                      ${stat.color === "green" ? "bg-green-100" : ""}
                      ${stat.color === "amber" ? "bg-amber-100" : ""}
                    `}
                  >
                    <Icon
                      className={`
                        w-6 h-6
                        ${stat.color === "emerald" ? "text-emerald-600" : ""}
                        ${stat.color === "blue" ? "text-blue-600" : ""}
                        ${stat.color === "green" ? "text-green-600" : ""}
                        ${stat.color === "amber" ? "text-amber-600" : ""}
                      `}
                    />
                  </div>
                  <div className="text-3xl text-gray-900 mb-2">{stat.value}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </Card>
              </motion.div>
            );
          })}
        </div>

        {/* Impact Metrics */}
        <div className="grid lg:grid-cols-3 gap-8">
          {impactMetrics.map((metric, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="p-6 border-gray-200">
                <h3 className="text-gray-900 mb-4">{metric.title}</h3>
                <div className="flex items-baseline gap-2 mb-2">
                  <span className="text-3xl text-gray-900">
                    {metric.current.toLocaleString()}
                  </span>
                  <span className="text-gray-600">/ {metric.target.toLocaleString()}</span>
                </div>
                <div className="text-sm text-gray-600 mb-4">{metric.unit}</div>
                <Progress value={metric.percentage} className="h-3" />
                <div className="text-sm text-emerald-600 mt-2">
                  {metric.percentage}% of annual goal
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Comparison Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-16"
        >
          <Card className="p-8 md:p-12 bg-gradient-to-br from-emerald-50 to-green-50 border-emerald-200">
            <h3 className="text-2xl text-gray-900 mb-8 text-center">
              Waste-to-Energy vs. Traditional Landfilling
            </h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🏭</span>
                </div>
                <h4 className="text-gray-900 mb-2">Traditional Landfill</h4>
                <p className="text-gray-600 text-sm">
                  Releases methane, contaminates soil and water, occupies land for
                  decades
                </p>
              </div>

              <div className="flex items-center justify-center">
                <div className="text-4xl text-emerald-500">→</div>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">⚡</span>
                </div>
                <h4 className="text-gray-900 mb-2">Waste-to-Energy</h4>
                <p className="text-gray-600 text-sm">
                  Generates clean electricity, reduces emissions by 90%, minimal
                  environmental footprint
                </p>
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
