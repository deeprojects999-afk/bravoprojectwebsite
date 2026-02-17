import { motion } from 'framer-motion';
import { CheckCircle2, Award, Users, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const highlights = [
  "PSIRA Registered & Accredited",
  "SASSETA Accredited Training Provider",
  "National Coverage - All 9 Provinces",
  "15+ Years Industry Experience",
  "500+ Trained Security Professionals",
  "24/7 Operational Support"
];

const provinces = [
  "Gauteng", "KwaZulu-Natal", "Western Cape", "Eastern Cape", 
  "Northern Cape", "North West", "Free State", "Mpumalanga", "Limpopo"
];

export default function AboutSection() {
  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white" id="about">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-[#D4A017] font-semibold text-sm uppercase tracking-wider">About Bravo Projects</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0a1628] mt-2 mb-6">
              Your Trusted Partner in Security & Professional Training
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              Bravo Projects provides comprehensive guarding solutions to clients across a wide range 
              of small- and large-scale industries. Our professionally trained and fully equipped teams 
              are prepared to respond effectively to almost any security situation.
            </p>
            <p className="text-gray-600 leading-relaxed mb-8">
              We pride ourselves on delivering customised security solutions that are carefully tailored 
              to meet the specific needs and operational requirements of each client. With extensive 
              industry knowledge and experience, Bravo Projects offers clients confidence and peace of 
              mind through reliable and professional service delivery.
            </p>

            {/* Highlights Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {highlights.map((item, index) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <CheckCircle2 className="w-5 h-5 text-[#D4A017] flex-shrink-0" />
                  <span className="text-gray-700 font-medium">{item}</span>
                </motion.div>
              ))}
            </div>

            <Link to="/about">
              <Button className="bg-[#0a1628] hover:bg-[#1a2d4a] text-white px-8 py-6 rounded-lg font-semibold">
                Learn More About Us
              </Button>
            </Link>
          </motion.div>

          {/* Right Content - Stats & Map */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            {/* Stats Cards */}
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="bg-[#0a1628] rounded-2xl p-6 text-center">
                <Award className="w-10 h-10 text-[#D4A017] mx-auto mb-3" />
                <p className="text-3xl font-bold text-white mb-1">15+</p>
                <p className="text-gray-400 text-sm">Years of Excellence</p>
              </div>
              <div className="bg-[#D4A017] rounded-2xl p-6 text-center">
                <Users className="w-10 h-10 text-[#0a1628] mx-auto mb-3" />
                <p className="text-3xl font-bold text-[#0a1628] mb-1">500+</p>
                <p className="text-[#0a1628]/70 text-sm">Trained Officers</p>
              </div>
            </div>

            {/* Coverage Card */}
            <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-[#D4A017]/10 flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-[#D4A017]" />
                </div>
                <div>
                  <h3 className="font-bold text-[#0a1628]">National Coverage</h3>
                  <p className="text-gray-500 text-sm">Operating across South Africa</p>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {provinces.map((province) => (
                  <span
                    key={province}
                    className="px-3 py-1.5 bg-gray-100 rounded-full text-sm font-medium text-gray-700"
                  >
                    {province}
                  </span>
                ))}
              </div>
            </div>

            {/* Image */}
            <div className="mt-6 rounded-2xl overflow-hidden shadow-xl">
              <img
                src="/images/image11.jpeg"
                alt="Professional Security Team"
                className="w-full h-64 object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}