import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { ArrowRight, TrendingUp, Home, Leaf } from "lucide-react";
import { motion } from "motion/react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { useEffect, useState } from "react";

export function Hero() {
  const [trashCollected, setTrashCollected] = useState(2847);
  const [homesPowered, setHomesPowered] = useState(1523);
  const [co2Avoided, setCo2Avoided] = useState(4892);

  // Animate numbers on mount
  useEffect(() => {
    const interval = setInterval(() => {
      setTrashCollected((prev) => prev + Math.floor(Math.random() * 3));
      setHomesPowered((prev) => prev + Math.floor(Math.random() * 2));
      setCo2Avoided((prev) => prev + Math.floor(Math.random() * 5));
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-emerald-50 via-white to-white">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-10 w-72 h-72 bg-emerald-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
        <div className="absolute top-40 left-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-700 px-4 py-2 rounded-full mb-6">
              <Leaf className="w-4 h-4" />
              <span className="text-sm">From Your Bin to Your Socket</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl text-gray-900 mb-6">
              Turn Your Trash into Clean Energy
            </h1>

            <p className="text-lg md:text-xl text-gray-600 mb-8">
              Schedule a pickup. Power your community. Build a cleaner future.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button
                size="lg"
                className="bg-emerald-500 hover:bg-emerald-600 text-white"
              >
                Schedule Pickup
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
              <Button size="lg" variant="outline">
                Learn More
              </Button>
            </div>

            {/* Live Impact Dashboard */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <Card className="p-4 border-emerald-200 bg-white/80 backdrop-blur-sm">
                <div className="flex items-center gap-2 text-emerald-600 mb-2">
                  <TrendingUp className="w-5 h-5" />
                  <span className="text-xs uppercase tracking-wide">Live</span>
                </div>
                <div className="text-2xl text-gray-900 mb-1">
                  {trashCollected.toLocaleString()}
                </div>
                <div className="text-sm text-gray-600">Tons Collected</div>
              </Card>

              <Card className="p-4 border-blue-200 bg-white/80 backdrop-blur-sm">
                <div className="flex items-center gap-2 text-blue-600 mb-2">
                  <Home className="w-5 h-5" />
                  <span className="text-xs uppercase tracking-wide">Impact</span>
                </div>
                <div className="text-2xl text-gray-900 mb-1">
                  {homesPowered.toLocaleString()}
                </div>
                <div className="text-sm text-gray-600">Homes Powered</div>
              </Card>

              <Card className="p-4 border-green-200 bg-white/80 backdrop-blur-sm">
                <div className="flex items-center gap-2 text-green-600 mb-2">
                  <Leaf className="w-5 h-5" />
                  <span className="text-xs uppercase tracking-wide">Saved</span>
                </div>
                <div className="text-2xl text-gray-900 mb-1">
                  {co2Avoided.toLocaleString()}
                </div>
                <div className="text-sm text-gray-600">Tons CO₂ Avoided</div>
              </Card>
            </div>
          </motion.div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1628206554160-63e8c921e398?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZW5ld2FibGUlMjBlbmVyZ3klMjBzb2xhcnxlbnwxfHx8fDE3NjIzMTgyODN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Renewable energy"
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
          </motion.div>
        </div>
      </div>

      <style>{`
        @keyframes blob {
          0% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          100% {
            transform: translate(0px, 0px) scale(1);
          }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
      `}</style>
    </div>
  );
}
