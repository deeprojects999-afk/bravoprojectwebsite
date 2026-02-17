import { motion } from 'framer-motion';
import { ChevronRight, Award, BookOpen, Target } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const grades = [
  { grade: "E", title: "Patrol Officer", desc: "Foundation of security industry basics" },
  { grade: "D", title: "Access Control", desc: "Managing entry and exit points" },
  { grade: "C", title: "Information Protection", desc: "Advanced emergency response" },
  { grade: "B", title: "Supervision", desc: "Leadership and team management" },
  { grade: "A", title: "Management", desc: "Full site security management" },
];

const specializedCourses = [
  "Armed Response",
  "Cash-in-Transit",
  "Banking Security",
  "Retail Security",
  "Special Events",
];

export default function TrainingSection() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* PSIRA Training */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-[#D4A017]/10 flex items-center justify-center">
                <BookOpen className="w-6 h-6 text-[#D4A017]" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-[#0a1628]">PSIRA Security Training</h3>
                <p className="text-gray-500">Progress from Grade E to A</p>
              </div>
            </div>

            <p className="text-gray-600 mb-8">
              Progress through the PSIRA Grades in structured order, beginning with Grade E and 
              advancing up to Grade A. Each level builds on the previous, preparing you for 
              increasingly responsible roles in the security industry.
            </p>

            {/* Grades Progress */}
            <div className="space-y-4 mb-8">
              {grades.map((item, index) => (
                <motion.div
                  key={item.grade}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl hover:bg-[#D4A017]/5 transition-colors group"
                >
                  <div className="w-12 h-12 rounded-full bg-[#0a1628] flex items-center justify-center flex-shrink-0 group-hover:bg-[#D4A017] transition-colors">
                    <span className="text-white font-bold text-lg">{item.grade}</span>
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-[#0a1628]">Grade {item.grade} – {item.title}</h4>
                    <p className="text-gray-500 text-sm">{item.desc}</p>
                  </div>
                  {index < grades.length - 1 && (
                    <ChevronRight className="w-5 h-5 text-gray-300" />
                  )}
                </motion.div>
              ))}
            </div>

            <Link to="/services">
              <Button className="bg-[#0a1628] hover:bg-[#1a2d4a] text-white">
                View All Training Courses
                <ChevronRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          </motion.div>

          {/* Specialized Training */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            {/* Specialized Courses Card */}
            <div className="bg-gradient-to-br from-[#0a1628] to-[#1a2d4a] rounded-2xl p-8 mb-6">
              <div className="flex items-center gap-3 mb-6">
                <Target className="w-8 h-8 text-[#D4A017]" />
                <h3 className="text-xl font-bold text-white">Specialized Security Courses</h3>
              </div>
              <p className="text-gray-400 mb-6">
                Advanced training for specialized environments and high-risk operations. 
                Available after completing PSIRA Grade C or higher.
              </p>
              <div className="grid grid-cols-2 gap-3">
                {specializedCourses.map((course) => (
                  <div key={course} className="bg-white/10 rounded-lg px-4 py-3 text-white text-sm font-medium">
                    {course}
                  </div>
                ))}
              </div>
            </div>

            {/* Firearm Training Card */}
            <div className="bg-gradient-to-br from-red-600 to-red-800 rounded-2xl p-8 mb-6">
              <h3 className="text-xl font-bold text-white mb-4">Firearm Training</h3>
              <p className="text-white/80 mb-4">
                Professional firearm competency training including legal knowledge courses.
              </p>
              <div className="flex flex-wrap gap-2">
                {["Handgun", "Shotgun", "Self-Loading Rifle", "Tactical Training"].map((item) => (
                  <span key={item} className="bg-white/20 px-3 py-1 rounded-full text-white text-sm">
                    {item}
                  </span>
                ))}
              </div>
            </div>

            {/* Accreditation Badge */}
            <div className="flex items-center gap-4 p-6 bg-[#D4A017]/10 border border-[#D4A017]/20 rounded-xl">
              <Award className="w-12 h-12 text-[#D4A017]" />
              <div>
                <h4 className="font-bold text-[#0a1628]">SASSETA Accredited</h4>
                <p className="text-gray-600 text-sm">
                  All our training programmes are nationally recognized and accredited.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}