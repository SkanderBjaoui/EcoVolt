import { Button } from "./ui/button";
import { Leaf, Menu, X } from "lucide-react";
import { useState } from "react";

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-green-600 rounded-lg flex items-center justify-center">
              <Leaf className="w-6 h-6 text-white" />
            </div>
            <span className="text-gray-900">EcoVolt</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#how-it-works" className="text-gray-600 hover:text-gray-900 transition-colors">
              How It Works
            </a>
            <a href="#services" className="text-gray-600 hover:text-gray-900 transition-colors">
              Services
            </a>
            <a href="#impact" className="text-gray-600 hover:text-gray-900 transition-colors">
              Impact
            </a>
            <a href="#education" className="text-gray-600 hover:text-gray-900 transition-colors">
              Learn
            </a>
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center gap-4">
            <Button variant="ghost">Sign In</Button>
            <Button className="bg-emerald-500 hover:bg-emerald-600 text-white">
              Schedule Pickup
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6 text-gray-900" />
            ) : (
              <Menu className="w-6 h-6 text-gray-900" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <div className="flex flex-col gap-4">
              <a
                href="#how-it-works"
                className="text-gray-600 hover:text-gray-900 transition-colors px-4 py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                How It Works
              </a>
              <a
                href="#services"
                className="text-gray-600 hover:text-gray-900 transition-colors px-4 py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Services
              </a>
              <a
                href="#impact"
                className="text-gray-600 hover:text-gray-900 transition-colors px-4 py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Impact
              </a>
              <a
                href="#education"
                className="text-gray-600 hover:text-gray-900 transition-colors px-4 py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Learn
              </a>
              <div className="flex flex-col gap-2 px-4 pt-2">
                <Button variant="ghost">Sign In</Button>
                <Button className="bg-emerald-500 hover:bg-emerald-600 text-white">
                  Schedule Pickup
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
