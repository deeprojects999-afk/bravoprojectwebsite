import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Menu, X, Phone, Mail, Shield, 
  Facebook, Twitter, Instagram, Linkedin, MapPin, MessageCircle
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import LocationMap from '@/components/common/LocationMap';

const createPageUrl = (page: string) => {
  if (page === 'Home') return '/';
  return `/${page.toLowerCase().replace(/\s+/g, '-')}`;
};

const navItems = [
  { name: 'Home', page: 'Home' },
  { name: 'About Us', page: 'About' },
  { name: 'Services', page: 'Services' },
  { name: 'Gallery', page: 'Gallery' },
  { name: 'Contact', page: 'Contact' },
];

interface LayoutProps {
  children: React.ReactNode;
  currentPageName?: string;
}

export default function Layout({ children, currentPageName }: LayoutProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  // Close mobile menu when changing pages
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  return (
    <div className="min-h-screen flex flex-col">
      {/* Top Bar - Dark Navy */}
      <div className="bg-[#0a1628] text-white py-2 hidden md:block">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center text-sm">
          <div className="flex items-center gap-6">
            <a href="tel:+27615102322" className="flex items-center gap-2 hover:text-[#D4A017] transition-colors">
              <Phone className="w-4 h-4" />
              +27 61 510 2322
            </a>
            <a href="mailto:info@bravoprojects.co.za" className="flex items-center gap-2 hover:text-[#D4A017] transition-colors">
              <Mail className="w-4 h-4" />
              info@bravoprojects.co.za
            </a>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-gray-400">Follow Us:</span>
            <a href="#" className="hover:text-[#D4A017] transition-colors"><span>Facebook</span></a>
            <a href="#" className="hover:text-[#D4A017] transition-colors"><span>Twitter</span></a>
            <a href="#" className="hover:text-[#D4A017] transition-colors"><span>Instagram</span></a>
            <a href="#" className="hover:text-[#D4A017] transition-colors"><span>LinkedIn</span></a>
          </div>
        </div>
      </div>

      {/* Main Navigation - Always White Background */}
      <header className="sticky top-0 z-50 bg-white shadow-lg transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo Section */}
            <Link to="/" className="flex items-center gap-3">
              {/* Actual Logo Image */}
              <img 
                src="/Logo.png"
                alt="Bravo Projects" 
                className="h-12 w-auto object-contain" 
              />
              
              {/* Text Label (Optional - you can remove this div if the logo image includes the text) */}
              <div>
                <span className="text-xl font-bold block leading-tight text-[#0a1628]">
                  BRAVO
                </span>
                <span className="text-xs tracking-wider text-gray-500">
                  PROJECTS
                </span>
              </div>
            </Link>

            {/* Desktop Navigation - Always Dark Text */}
            <nav className="hidden lg:flex items-center gap-8">
              {navItems.map((item) => (
                <Link
                  key={item.page}
                  to={createPageUrl(item.page)}
                  className={`font-medium transition-colors relative group ${
                    currentPageName === item.page
                      ? 'text-[#D4A017]' // Active page is Gold
                      : 'text-[#0a1628] hover:text-[#D4A017]' // Others are Dark Navy, Gold on Hover
                  }`}
                >
                  {item.name}
                  {/* Underline Effect */}
                  <span className={`absolute -bottom-1 left-0 h-0.5 bg-[#D4A017] transition-all duration-300 ${
                    currentPageName === item.page ? 'w-full' : 'w-0 group-hover:w-full'
                  }`} />
                </Link>
              ))}
            </nav>

            {/* CTA Button */}
            <div className="hidden lg:block">
              <Link to="/contact">
                <Button className="bg-[#D4A017] hover:bg-[#b8890f] text-[#0a1628] font-semibold px-6">
                  Get a Quote
                </Button>
              </Link>
            </div>

            {/* Mobile Menu Button - Always Dark */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg text-[#0a1628] hover:bg-gray-100"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden bg-white border-t overflow-hidden shadow-xl"
            >
              <div className="px-4 py-6 space-y-4">
                {navItems.map((item) => (
                  <Link
                    key={item.page}
                    to={createPageUrl(item.page)}
                    className={`block py-2 font-medium ${
                      currentPageName === item.page ? 'text-[#D4A017]' : 'text-gray-700'
                    }`}
                  >
                    {item.name}
                  </Link>
                ))}
                <Link to="/contact" className="block pt-4">
                  <Button className="w-full bg-[#D4A017] hover:bg-[#b8890f] text-[#0a1628] font-semibold">
                    Get a Quote
                  </Button>
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Main Content */}
      <main className="flex-1">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-[#0a1628] text-white">
        {/* Main Footer */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Company Info */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-[#D4A017] flex items-center justify-center">
                  <Shield className="w-6 h-6 text-[#0a1628]" />
                </div>
                <span className="text-xl font-bold">BRAVO PROJECTS</span>
              </div>
              <p className="text-gray-400 mb-6 leading-relaxed">
                Professional security guarding and accredited training solutions across all 9 provinces of South Africa.
              </p>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#D4A017] transition-colors">
                  <span>Facebook</span>
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#D4A017] transition-colors">
                  <span>Twitter</span>
                  <Twitter className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#D4A017] transition-colors">
                  <span>Instagram</span>
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#D4A017] transition-colors">
                  <span>LinkedIn</span>
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-bold mb-6">Quick Links</h3>
              <ul className="space-y-3">
                {navItems.map((item) => (
                  <li key={item.page}>
                    <Link to={createPageUrl(item.page)} className="text-gray-400 hover:text-[#D4A017] transition-colors">
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-lg font-bold mb-6">Our Services</h3>
              <ul className="space-y-3 text-gray-400">
                <li>Security Guarding</li>
                <li>Firearm Training</li>
                <li>PSIRA Training</li>
                <li>SASSETA Programmes</li>
                <li>Machine Operator Courses</li>
                <li>Health & Safety</li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="text-lg font-bold mb-6">Contact Us</h3>
              <div className="space-y-4">
                <a href="tel:+27615102322" className="flex items-center gap-3 text-gray-400 hover:text-[#D4A017] transition-colors">
                  <Phone className="w-5 h-5 text-[#D4A017]" />
                  +27 61 510 2322
                </a>
                <a 
                  href="https://wa.me/27615102322?text=Hello%20Bravo%20Projects,%20I%20would%20like%20to%20enquire%20about%20your%20services."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-gray-400 hover:text-green-500 transition-colors"
                >
                  <MessageCircle className="w-5 h-5 text-green-500" />
                  WhatsApp Us
                </a>
                <a href="mailto:info@bravoprojects.co.za" className="flex items-center gap-3 text-gray-400 hover:text-[#D4A017] transition-colors">
                  <Mail className="w-5 h-5 text-[#D4A017]" />
                  info@bravoprojects.co.za
                </a>
                <div className="flex items-start gap-3 text-gray-400">
                  <MapPin className="w-5 h-5 text-[#D4A017] flex-shrink-0 mt-1" />
                  <span>7 Luttig Str, Berlut House, Office No.4, Roodepoort</span>
                </div>
              </div>
            </div>
          </div>

          {/* Map Section */}
          <div className="mt-12 pt-8 border-t border-white/10">
            <h3 className="text-lg font-bold mb-6">Our Locations</h3>
            <LocationMap />
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Bravo Projects. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm text-gray-400">
              <a href="#" className="hover:text-[#D4A017] transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-[#D4A017] transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}