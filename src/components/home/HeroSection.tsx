import { motion } from 'framer-motion';
import { Shield, ChevronRight, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1582139329536-e7284fece509?w=1920&q=80"
          alt="Security"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a1628]/95 via-[#0a1628]/80 to-[#0a1628]/60" />
      </div>

      {/* Animated Pattern Overlay */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23D4A017' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-[#D4A017]/20 border border-[#D4A017]/30 rounded-full px-4 py-2 mb-6">
              <Shield className="w-4 h-4 text-[#D4A017]" />
              <span className="text-[#D4A017] text-sm font-medium">Trusted Security Partner Since 2010</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Professional Security
              <span className="block text-[#D4A017]">& Training Solutions</span>
            </h1>

            {/* Subheadline */}
            <p className="text-lg sm:text-xl text-gray-300 mb-8 leading-relaxed max-w-2xl">
              Comprehensive guarding, firearm training, SASSETA programmes, and machine operator courses. 
              Protecting South Africa across all 9 provinces with excellence.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/contact">
                <Button className="bg-[#D4A017] hover:bg-[#b8890f] text-[#0a1628] font-semibold px-8 py-6 text-lg rounded-lg group h-auto">
                  Get a Free Quote
                  <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <a href="tel:+27615102322">
                <Button variant="outline" className="border-white/30 bg-transparent text-white hover:bg-white/10 hover:text-white px-8 py-6 text-lg rounded-lg h-auto">
                  <Phone className="mr-2 w-5 h-5" />
                  +27 61 510 2322
                </Button>
              </a>
            </div>

            {/* Trust Indicators */}
            <div className="mt-12 pt-8 border-t border-white/10">
              <div className="grid grid-cols-3 gap-8">
                <div>
                  <p className="text-3xl font-bold text-[#D4A017]">9</p>
                  <p className="text-gray-400 text-sm">Provinces Covered</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-[#D4A017]">500+</p>
                  <p className="text-gray-400 text-sm">Trained Officers</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-[#D4A017]">15+</p>
                  <p className="text-gray-400 text-sm">Years Experience</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2">
          <div className="w-1.5 h-3 bg-[#D4A017] rounded-full" />
        </div>
      </motion.div>
    </section>
  );
}