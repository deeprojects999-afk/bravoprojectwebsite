import { motion } from 'framer-motion';
import { Phone, Mail, ChevronRight, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

export default function CTASection() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1557804506-669a67965ba0?w=1920&q=80"
          alt="Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a1628] via-[#0a1628]/95 to-[#0a1628]/80" />
      </div>

      {/* Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='1' fill-rule='evenodd'%3E%3Cpath d='M0 40L40 0H20L0 20M40 40V20L20 40'/%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 bg-[#D4A017]/20 rounded-full px-4 py-2 mb-6">
              <Shield className="w-4 h-4 text-[#D4A017]" />
              <span className="text-[#D4A017] text-sm font-medium">Ready to Get Started?</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
              Secure Your Business with 
              <span className="text-[#D4A017]"> Bravo Projects</span>
            </h2>

            <p className="text-gray-300 text-lg mb-8 leading-relaxed">
              Whether you need professional security guarding services or want to advance your career 
              with accredited training, we're here to help. Contact us today for a free consultation.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/contact">
                <Button className="bg-[#D4A017] hover:bg-[#b8890f] text-[#0a1628] font-semibold px-8 py-6 text-lg rounded-lg w-full sm:w-auto h-auto">
                  Request a Quote
                  <ChevronRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Link to="/services">
                <Button variant="outline" className="border-white/30 bg-transparent text-white hover:bg-white/10 hover:text-white px-8 py-6 text-lg rounded-lg w-full sm:w-auto h-auto">
                  Explore Training Courses
                </Button>
              </Link>
            </div>
          </motion.div>

          {/* Right Content - Contact Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="bg-white rounded-2xl p-8 shadow-2xl">
              <h3 className="text-2xl font-bold text-[#0a1628] mb-6">Get in Touch</h3>
              
              <div className="space-y-6">
                {/* Phone */}
                <a href="tel:+27615102322" className="flex items-start gap-4 group">
                  <div className="w-12 h-12 rounded-xl bg-[#D4A017]/10 flex items-center justify-center flex-shrink-0 group-hover:bg-[#D4A017] transition-colors">
                    <Phone className="w-6 h-6 text-[#D4A017] group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <p className="font-semibold text-[#0a1628] group-hover:text-[#D4A017] transition-colors">Call Us</p>
                    <p className="text-gray-600">+27 61 510 2322</p>
                    <p className="text-gray-500 text-sm">24/7 Emergency Line</p>
                  </div>
                </a>

                {/* Email */}
                <a href="mailto:info@bravoprojects.co.za" className="flex items-start gap-4 group">
                  <div className="w-12 h-12 rounded-xl bg-[#D4A017]/10 flex items-center justify-center flex-shrink-0 group-hover:bg-[#D4A017] transition-colors">
                    <Mail className="w-6 h-6 text-[#D4A017] group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <p className="font-semibold text-[#0a1628] group-hover:text-[#D4A017] transition-colors">Email Us</p>
                    <p className="text-gray-600">info@bravoprojects.co.za</p>
                    <p className="text-gray-500 text-sm">We respond within 24 hours</p>
                  </div>
                </a>
              </div>

              {/* Quick Stats */}
              <div className="mt-8 pt-6 border-t border-gray-100 grid grid-cols-3 gap-4 text-center">
                <div>
                  <p className="text-2xl font-bold text-[#D4A017]">4</p>
                  <p className="text-gray-500 text-xs">Branches</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-[#D4A017]">9</p>
                  <p className="text-gray-500 text-xs">Provinces</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-[#D4A017]">24/7</p>
                  <p className="text-gray-500 text-xs">Support</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}