import { motion } from 'framer-motion';
import { 
  Shield, Award, Users, MapPin, Target, 
  Clock, Briefcase, Heart, ChevronRight, Camera
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

// Team/Officer gallery images
const teamImages = [
  {
    src: "https://images.unsplash.com/photo-1582139329536-e7284fece509?w=600&q=80",
    title: "Security Operations"
  },
  {
    src: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=600&q=80",
    title: "Professional Team"
  },
  {
    src: "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=600&q=80",
    title: "Team Briefing"
  },
  {
    src: "https://images.unsplash.com/photo-1595590424283-b8f17842773f?w=600&q=80",
    title: "Training Session"
  }
];

const values = [
  {
    icon: Shield,
    title: "Integrity",
    description: "We uphold the highest ethical standards in all our operations and interactions."
  },
  {
    icon: Target,
    title: "Excellence",
    description: "We strive for excellence in every service we provide, exceeding client expectations."
  },
  {
    icon: Users,
    title: "Professionalism",
    description: "Our team maintains the highest level of professionalism and conduct at all times."
  },
  {
    icon: Heart,
    title: "Commitment",
    description: "We are committed to the safety and security of our clients and their assets."
  }
];

const milestones = [
  { year: "2010", title: "Company Founded", description: "Bravo Projects established in Gauteng" },
  { year: "2013", title: "PSIRA Accredited", description: "Received full PSIRA accreditation" },
  { year: "2016", title: "National Expansion", description: "Extended operations to all 9 provinces" },
  { year: "2019", title: "Training Centre", description: "Opened dedicated training facilities" },
  { year: "2023", title: "500+ Officers", description: "Trained over 500 security professionals" }
];

const provinces = [
  "Gauteng", "KwaZulu-Natal", "Western Cape", "Eastern Cape", 
  "Northern Cape", "North West", "Free State", "Mpumalanga", "Limpopo"
];

export default function About() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="relative py-24 bg-[#0a1628]">
        <div className="absolute inset-0 opacity-20">
          <img
            src="/images/image11.jpeg"
            alt="About Us"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <span className="text-[#D4A017] font-semibold text-sm uppercase tracking-wider">About Us</span>
            <h1 className="text-4xl sm:text-5xl font-bold text-white mt-2 mb-4">
              Protecting South Africa Since 2010
            </h1>
            <p className="text-gray-300 max-w-2xl mx-auto text-lg">
              Professional security guarding and accredited training solutions with a commitment to excellence.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-[#D4A017] font-semibold text-sm uppercase tracking-wider">Our Story</span>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#0a1628] mt-2 mb-6">
                A Legacy of Security Excellence
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Bravo Projects provides comprehensive guarding solutions to clients across a wide range of small- and large-scale industries. Our professionally trained and fully equipped teams are prepared to respond effectively to almost any security situation.
                </p>
                <p>
                  We pride ourselves on delivering customised security solutions that are carefully tailored to meet the specific needs and operational requirements of each client. Backed by extensive industry knowledge and experience, Bravo Security offers clients confidence and peace of mind through reliable and professional service delivery.
                </p>
                <p>
                  With a strong national footprint, Bravo Security operates across all nine provinces of South Africa — Gauteng, KwaZulu-Natal, Western Cape, Eastern Cape, Northern Cape, North West, Free State, Mpumalanga, and Limpopo — ensuring consistent, high-quality guarding services nationwide.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-4"
            >
              <div className="space-y-4">
                <div className="rounded-2xl overflow-hidden shadow-xl">
                  <img
                    src="https://images.unsplash.com/photo-1582139329536-e7284fece509?w=400&q=80"
                    alt="Security Team"
                    className="w-full h-48 object-cover"
                  />
                </div>
                <div className="bg-[#D4A017] rounded-2xl p-6 text-center">
                  <p className="text-4xl font-bold text-[#0a1628]">15+</p>
                  <p className="text-[#0a1628]/80 font-medium">Years Experience</p>
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="bg-[#0a1628] rounded-2xl p-6 text-center">
                  <p className="text-4xl font-bold text-[#D4A017]">500+</p>
                  <p className="text-gray-400 font-medium">Trained Officers</p>
                </div>
                <div className="rounded-2xl overflow-hidden shadow-xl">
                  <img
                    src="/images/image2.jpeg"
                    alt="Training"
                    className="w-full h-48 object-cover"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-[#D4A017] font-semibold text-sm uppercase tracking-wider">Our Values</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0a1628] mt-2">
              What Drives Us Forward
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="w-16 h-16 rounded-2xl bg-[#D4A017]/10 flex items-center justify-center mx-auto mb-6">
                  <value.icon className="w-8 h-8 text-[#D4A017]" />
                </div>
                <h3 className="text-xl font-bold text-[#0a1628] mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-[#D4A017] font-semibold text-sm uppercase tracking-wider">Our Journey</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0a1628] mt-2">
              Milestones Along the Way
            </h2>
          </motion.div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-[#D4A017]/20 hidden lg:block" />

            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={milestone.year}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className={`flex flex-col lg:flex-row items-center gap-8 ${
                    index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                  }`}
                >
                  <div className={`flex-1 ${index % 2 === 0 ? 'lg:text-right' : 'lg:text-left'}`}>
                    <div className="bg-white rounded-xl p-6 shadow-lg inline-block">
                      <span className="text-[#D4A017] font-bold text-2xl">{milestone.year}</span>
                      <h3 className="text-xl font-bold text-[#0a1628] mt-2">{milestone.title}</h3>
                      <p className="text-gray-600 mt-1">{milestone.description}</p>
                    </div>
                  </div>
                  <div className="w-4 h-4 rounded-full bg-[#D4A017] border-4 border-[#D4A017]/20 flex-shrink-0" />
                  <div className="flex-1" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Coverage */}
      <section className="py-20 bg-[#0a1628]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-[#D4A017] font-semibold text-sm uppercase tracking-wider">National Coverage</span>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mt-2 mb-6">
                Serving All 9 Provinces
              </h2>
              <p className="text-gray-400 mb-8 leading-relaxed">
                With a strong national footprint, Bravo Projects operates across all nine provinces of South Africa, ensuring consistent, high-quality guarding services and training nationwide.
              </p>
              <div className="flex flex-wrap gap-3">
                {provinces.map((province) => (
                  <div key={province} className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full">
                    <MapPin className="w-4 h-4 text-[#D4A017]" />
                    <span className="text-white text-sm">{province}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-4"
            >
              <div className="bg-white/5 rounded-2xl p-6 text-center border border-white/10">
                <Briefcase className="w-10 h-10 text-[#D4A017] mx-auto mb-3" />
                <p className="text-3xl font-bold text-white">4</p>
                <p className="text-gray-400">Office Locations</p>
              </div>
              <div className="bg-white/5 rounded-2xl p-6 text-center border border-white/10">
                <Users className="w-10 h-10 text-[#D4A017] mx-auto mb-3" />
                <p className="text-3xl font-bold text-white">500+</p>
                <p className="text-gray-400">Trained Officers</p>
              </div>
              <div className="bg-white/5 rounded-2xl p-6 text-center border border-white/10">
                <Award className="w-10 h-10 text-[#D4A017] mx-auto mb-3" />
                <p className="text-3xl font-bold text-white">100%</p>
                <p className="text-gray-400">Accredited</p>
              </div>
              <div className="bg-white/5 rounded-2xl p-6 text-center border border-white/10">
                <Clock className="w-10 h-10 text-[#D4A017] mx-auto mb-3" />
                <p className="text-3xl font-bold text-white">24/7</p>
                <p className="text-gray-400">Operations</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Team Gallery Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="text-[#D4A017] font-semibold text-sm uppercase tracking-wider">Our Team</span>
            <h2 className="text-3xl font-bold text-[#0a1628] mt-2 mb-4">
              Bravo Projects in Action
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our professionally trained security officers and team members delivering excellence across South Africa.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {teamImages.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative overflow-hidden rounded-2xl aspect-[3/4] cursor-pointer"
              >
                {/* Image */}
                <img
                  src={image.src}
                  alt={image.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                
                {/* Navy Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a1628] via-[#0a1628]/50 to-[#0a1628]/20 opacity-70 group-hover:opacity-85 transition-opacity duration-300" />
                
                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-4 z-10">
                  <h3 className="text-white font-bold text-lg">{image.title}</h3>
                  <div className="w-8 h-1 bg-[#D4A017] mt-2 transform origin-left group-hover:scale-x-150 transition-transform" />
                </div>

                {/* Hover Border Effect */}
                <div className="absolute inset-0 border-4 border-[#D4A017] rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.div>
            ))}
          </div>

          {/* View Full Gallery Link */}
          <div className="text-center mt-10">
            <Link to="/gallery">
              <Button className="bg-[#0a1628] hover:bg-[#1a2d4a] text-white">
                <Camera className="mr-2 w-4 h-4" />
                View Full Gallery
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Accreditations */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="text-[#D4A017] font-semibold text-sm uppercase tracking-wider">Accreditations</span>
            <h2 className="text-3xl font-bold text-[#0a1628] mt-2">
              Fully Licensed & Accredited
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-50 rounded-2xl p-8 text-center border border-gray-100">
              <Award className="w-16 h-16 text-[#D4A017] mx-auto mb-4" />
              <h3 className="text-xl font-bold text-[#0a1628] mb-2">PSIRA Registered</h3>
              <p className="text-gray-600">Private Security Industry Regulatory Authority certified</p>
            </div>
            <div className="bg-gray-50 rounded-2xl p-8 text-center border border-gray-100">
              <Award className="w-16 h-16 text-[#D4A017] mx-auto mb-4" />
              <h3 className="text-xl font-bold text-[#0a1628] mb-2">SASSETA Accredited</h3>
              <p className="text-gray-600">Safety and Security Sector Education and Training Authority</p>
            </div>
            <div className="bg-gray-50 rounded-2xl p-8 text-center border border-gray-100">
              <Award className="w-16 h-16 text-[#D4A017] mx-auto mb-4" />
              <h3 className="text-xl font-bold text-[#0a1628] mb-2">Firearm Certified</h3>
              <p className="text-gray-600">Licensed firearm training facility</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#D4A017]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-[#0a1628] mb-4">Partner with Bravo Projects</h2>
          <p className="text-[#0a1628]/80 mb-8">
            Experience the difference of working with South Africa's trusted security partner.
          </p>
          <Link to="/contact">
            <Button className="bg-[#0a1628] hover:bg-[#1a2d4a] text-white px-8 py-6 text-lg">
              Get in Touch
              <ChevronRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}