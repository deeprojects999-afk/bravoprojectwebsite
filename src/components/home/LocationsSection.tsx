import { motion } from 'framer-motion';
import { MapPin, Phone, Clock, MessageCircle } from 'lucide-react';

const locations = [
  {
    city: "Roodepoort",
    address: "7 Luttig Str, Berlut House, Office No.4",
    phone: "+27 61 510 2322",
    whatsapp: "27615102322",
    altPhones: ["+27 64 548 6220", "+27 64 381 7545"]
  },
  {
    city: "Johannesburg",
    address: "Kariba House, 164 Commissioner Str",
    phone: "+27 78 485 3547",
    whatsapp: "27784853547",
    altPhones: ["+27 64 548 6220", "+27 64 381 7545"]
  },
  {
    city: "Germiston",
    address: "16 High Road",
    phone: "+27 64 549 0585",
    whatsapp: "27645490585",
    altPhones: ["+27 64 548 6220", "+27 64 381 7545"]
  },
  {
    city: "Polokwane",
    address: "11 Devenish Str, Opp. Taxi Rank",
    phone: "+27 61 535 1426",
    whatsapp: "27615351426",
    altPhones: ["+27 64 548 6220", "+27 64 381 7545"]
  }
];

export default function LocationsSection() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-[#D4A017] font-semibold text-sm uppercase tracking-wider">Our Offices</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#0a1628] mt-2 mb-4">
            Visit Us at Any of Our Branches
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            With offices across Gauteng and Limpopo, we're always close by to serve your security needs.
          </p>
        </motion.div>

        {/* Locations Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {locations.map((location, index) => (
            <motion.div
              key={location.city}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow p-6 border border-gray-100"
            >
              {/* City Header */}
              <div className="flex items-center gap-3 mb-4 pb-4 border-b border-gray-100">
                <div className="w-10 h-10 rounded-full bg-[#D4A017] flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-xl font-bold text-[#0a1628]">{location.city}</h3>
              </div>

              {/* Address */}
              <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                {location.address}
              </p>

              {/* Phone Numbers */}
              <div className="space-y-2">
                <a 
                  href={`tel:${location.phone.replace(/\s/g, '')}`}
                  className="flex items-center gap-2 text-[#0a1628] font-semibold hover:text-[#D4A017] transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  {location.phone}
                </a>
                {/* WhatsApp Link */}
                <a
                  href={`https://wa.me/${location.whatsapp}?text=Hello%20Bravo%20Projects,%20I%20would%20like%20to%20enquire%20about%20your%20services.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-green-600 font-medium hover:text-green-700 transition-colors"
                >
                  <MessageCircle className="w-4 h-4" />
                  WhatsApp Us
                </a>
                {location.altPhones.map((phone) => (
                  <a
                    key={phone}
                    href={`tel:${phone.replace(/\s/g, '')}`}
                    className="flex items-center gap-2 text-gray-500 text-sm hover:text-[#D4A017] transition-colors ml-6"
                  >
                    {phone}
                  </a>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Operating Hours */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 bg-[#0a1628] rounded-2xl p-8 flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <div className="flex items-center gap-4">
            <Clock className="w-10 h-10 text-[#D4A017]" />
            <div>
              <h3 className="text-white font-bold text-lg">24/7 Security Operations</h3>
              <p className="text-gray-400">Our security teams operate around the clock</p>
            </div>
          </div>
          <div className="text-center md:text-right">
            <p className="text-white font-medium">Training Centre Hours</p>
            <p className="text-gray-400">Monday - Friday: 8:00 AM - 5:00 PM</p>
            <p className="text-gray-400">Saturday: 8:00 AM - 1:00 PM</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}