import { motion } from 'framer-motion';
import { 
  Home, ShoppingBag, Building, Landmark, Gamepad2, Factory, 
  Briefcase, Heart, Hotel, Fuel, Plane, UserCheck, Car, LucideIcon
} from 'lucide-react';

interface Industry {
  icon: LucideIcon;
  name: string;
}

const industries: Industry[] = [
  { icon: Home, name: "Residential Estates" },
  { icon: ShoppingBag, name: "Shopping & Retail" },
  { icon: Landmark, name: "Banking & Finance" },
  { icon: Gamepad2, name: "Casino & Entertainment" },
  { icon: Factory, name: "Commercial & Industrial" },
  { icon: Building, name: "Corporate Buildings" }, // Added Building icon mapping if missed or map appropriately
  { icon: Briefcase, name: "Government" },
  { icon: Heart, name: "Health & Education" },
  { icon: Hotel, name: "Hospitality" },
  { icon: Fuel, name: "Oil & Gas" },
  { icon: Plane, name: "Ports & Airports" },
  { icon: UserCheck, name: "VIP Protection" },
  { icon: Car, name: "Escorting Services" },
];

export default function IndustriesSection() {
  return (
    <section className="py-24 bg-[#0a1628]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-[#D4A017] font-semibold text-sm uppercase tracking-wider">Industries We Serve</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mt-2 mb-4">
            Security Solutions for Every Sector
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            From residential complexes to airports, we provide tailored security services 
            that meet the unique requirements of each industry.
          </p>
        </motion.div>

        {/* Industries Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {industries.map((industry, index) => (
            <motion.div
              key={industry.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ y: -5 }}
              className="group"
            >
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-center hover:bg-[#D4A017]/10 hover:border-[#D4A017]/30 transition-all duration-300 h-full">
                <industry.icon className="w-8 h-8 text-[#D4A017] mx-auto mb-3 group-hover:scale-110 transition-transform" />
                <p className="text-white text-sm font-medium">{industry.name}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}