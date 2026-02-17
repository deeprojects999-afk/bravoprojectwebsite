import { motion } from 'framer-motion';
import { Shield, Target, GraduationCap, Truck, Users, Building2, Car, LucideIcon } from 'lucide-react';
import { Link } from 'react-router-dom';

interface Service {
  icon: LucideIcon;
  title: string;
  description: string;
  features: string[];
  color: string;
  link: string;
}

const services: Service[] = [
  {
    icon: Shield,
    title: "Security Guarding",
    description: "Comprehensive guarding solutions for residential, commercial, industrial, retail, banking, and VIP protection across all industries.",
    features: ["24/7 Armed & Unarmed Guards", "VIP Protection", "Event Security"],
    color: "from-blue-600 to-blue-800",
    link: "/services"
  },
  {
    icon: Target,
    title: "Firearm Training",
    description: "Professional firearm competency training including handgun, shotgun, self-loading rifle, and tactical training courses.",
    features: ["Handgun & Shotgun", "Self-Loading Rifle", "Tactical Training"],
    color: "from-red-600 to-red-800",
    link: "/services"
  },
  {
    icon: GraduationCap,
    title: "PSIRA Training",
    description: "Complete PSIRA Grades E through A training, preparing officers from patrol duties to full site management.",
    features: ["Grade E to A Courses", "Specialized Security", "Career Progression"],
    color: "from-[#D4A017] to-[#a67c00]",
    link: "/services"
  },
  {
    icon: Car,
    title: "Driving School",
    description: "Professional driving instruction for light motor vehicles to heavy duty trucks, including advanced trailer training.",
    features: ["Code 8, 10 & 14 Licenses", "Truck & Trailer Training", "Side Tipper & Superlink"],
    color: "from-slate-600 to-slate-800",
    link: "/services"
  },
  {
    icon: Users,
    title: "SASSETA Programmes",
    description: "Nationally accredited skills programmes aligned with security qualifications for career advancement.",
    features: ["Skills Programme 1-5", "Specialist Security", "General Practices"],
    color: "from-green-600 to-green-800",
    link: "/services"
  },
  {
    icon: Truck,
    title: "Machine Operator",
    description: "Certified training for forklifts, cranes, excavators, and all lifting and earth moving equipment.",
    features: ["Forklift & Cranes", "Excavators & Loaders", "Safety Certification"],
    color: "from-orange-600 to-orange-800",
    link: "/services"
  },
  {
    icon: Building2,
    title: "Health & Safety",
    description: "Comprehensive safety officer, first aid, fire fighting, and occupational health training programmes.",
    features: ["Safety Officer", "First Aid & Fire", "OHS Compliance"],
    color: "from-purple-600 to-purple-800",
    link: "/services"
  }
];

export default function ServicesSection() {
  return (
    <section className="py-24 bg-white" id="services">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-[#D4A017] font-semibold text-sm uppercase tracking-wider">What We Offer</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#0a1628] mt-2 mb-4">
            Comprehensive Security & Training Solutions
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            From professional security guarding to accredited training programmes, 
            we provide end-to-end solutions for your security needs.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Link to={service.link} className="block h-full">
                <div className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden h-full border border-gray-100">
                  {/* Top Gradient Bar */}
                  <div className={`h-2 bg-gradient-to-r ${service.color}`} />
                  
                  <div className="p-8">
                    {/* Icon */}
                    <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      <service.icon className="w-7 h-7 text-white" />
                    </div>

                    {/* Content */}
                    <h3 className="text-xl font-bold text-[#0a1628] mb-3 group-hover:text-[#D4A017] transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {service.description}
                    </p>

                    {/* Features */}
                    <ul className="space-y-2">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-center text-sm text-gray-500">
                          <div className="w-1.5 h-1.5 rounded-full bg-[#D4A017] mr-3" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}