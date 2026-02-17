import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Shield, Target, GraduationCap, Truck, Heart, Car,
  ChevronRight, CheckCircle2, Award, HardHat
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Link } from 'react-router-dom';

const securityServices = [
  "Residential Complexes and Estates",
  "Shopping & Retail",
  "Banking & Financial Services",
  "Casino, Gaming & Entertainment",
  "Commercial & Industrial",
  "Government",
  "Health & Education",
  "Hospitality",
  "Oil & Gas",
  "Ports & Airports",
  "VIP Protection",
  "Escorting"
];

const psiraGrades = [
  {
    grade: "E",
    title: "Patrol Officer",
    description: "Foundation of security industry",
    details: ["Basic duties and responsibilities", "Legal requirements", "Professional conduct", "Understanding the role of a Security Officer"]
  },
  {
    grade: "D",
    title: "Access Control Officer",
    description: "Managing access points",
    details: ["Access control procedures", "Managing entry and exit points", "Principles of physical security (Deter, Detect, Delay)", "Protecting people, property, and assets"]
  },
  {
    grade: "C",
    title: "Protection of Information Officer",
    description: "Advanced emergency response",
    details: ["Protect classified and sensitive information", "Respond to emergencies", "Save lives during crises", "Conduct basic risk assessments"]
  },
  {
    grade: "B",
    title: "Supervision",
    description: "Leadership and team management",
    details: ["Supervise security officers", "Conduct on-the-job training", "Manage parades", "Handle flag protocols", "Maintain discipline and operational standards"]
  },
  {
    grade: "A",
    title: "Management",
    description: "Full site security management",
    details: ["Manage entire sites and security operations", "Gather and handle evidence", "Lead investigations", "Communicate professionally with clients and staff", "Oversee and coordinate high-level security functions"]
  }
];

const specializedCourses = [
  { name: "Reaction (Armed Response)", desc: "Risk assessment, crime response procedures, tactical movement and safety" },
  { name: "Cash-in-Transit (CIT)", desc: "Secure transport of cash and valuables, emergency response" },
  { name: "Banking Security", desc: "High-risk banking environment, suspicious behavior identification" },
  { name: "Retail Security", desc: "Loss prevention, theft and fraud detection" },
  { name: "Special Events Security", desc: "Crowd control, event safety planning, emergency evacuation" }
];

const firearmCourses = [
  "Handgun Private Use & Business",
  "Self Loading Rifle Private Use & Business",
  "Shotgun Private Use & Business",
  "Bolt Action Rifle",
  "Tactical Firearm Training",
  "Range Officer",
  "Tactical Range Officer",
  "Regulation 21 Training"
];

const machineOperator = {
  lifting: ["Forklift", "Reach Truck", "Reach Stacker", "Mobile Crane", "Tower Crane", "Overhead Crane", "Boom Lift", "Scissor Lift"],
  earthMoving: ["Bobcat (Skid Steer)", "Excavator", "Dump Truck", "Front End Loader", "Grader", "TLB", "Bulldozer", "Roller"]
};

const drivingSchool = {
  codes: [
    { name: "Code 8 Driving", desc: "Light motor vehicles (ordinary cars)" },
    { name: "Code 10 Driving", desc: "Medium commercial vehicles" },
    { name: "Code 14 Truck Driving", desc: "Heavy motor vehicles (extra heavy duty)" }
  ],
  advanced: [
    "Horse and Trailer Training",
    "Side Tipper Truck Training",
    "Superlink Training"
  ]
};

const healthSafety = [
  "Safety Officer",
  "Basic First Aid Training",
  "Basic Fire Fighting Training",
  "SHE Representative Training",
  "Basic Working at Heights",
  "Dangerous Goods Training",
  "Risk Assessment Training",
  "Accident & Incident Investigation"
];

export default function Services() {
  const [activeGrade, setActiveGrade] = useState("E");

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="relative py-24 bg-[#0a1628]">
        <div className="absolute inset-0 opacity-20">
          <img
            src="https://images.unsplash.com/photo-1521791136064-7986c2920216?w=1920&q=80"
            alt="Services"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <span className="text-[#D4A017] font-semibold text-sm uppercase tracking-wider">Our Services</span>
            <h1 className="text-4xl sm:text-5xl font-bold text-white mt-2 mb-4">
              Security & Training Solutions
            </h1>
            <p className="text-gray-300 max-w-2xl mx-auto text-lg">
              Comprehensive security guarding, PSIRA training, driving school, and machine operator certifications.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Service Tabs */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Tabs defaultValue="guarding" className="w-full">
            <TabsList className="flex flex-wrap justify-center gap-2 bg-transparent mb-12 h-auto">
              {[
                { value: "guarding", icon: Shield, label: "Security Guarding" },
                { value: "psira", icon: GraduationCap, label: "PSIRA Training" },
                { value: "driving", icon: Car, label: "Driving School" },
                { value: "firearm", icon: Target, label: "Firearm Training" },
                { value: "sasseta", icon: Award, label: "SASSETA" },
                { value: "machine", icon: Truck, label: "Machine Operator" },
                { value: "safety", icon: Heart, label: "Health & Safety" },
              ].map((tab) => (
                <TabsTrigger
                  key={tab.value}
                  value={tab.value}
                  className="flex items-center gap-2 px-6 py-3 rounded-full data-[state=active]:bg-[#D4A017] data-[state=active]:text-[#0a1628] bg-gray-100 text-gray-700 font-medium"
                >
                  <tab.icon className="w-4 h-4" />
                  {tab.label}
                </TabsTrigger>
              ))}
            </TabsList>

            {/* Security Guarding */}
            <TabsContent value="guarding">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="text-3xl font-bold text-[#0a1628] mb-6">Professional Security Guarding</h2>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    Bravo Security provides comprehensive guarding solutions to clients across a wide range of small- and large-scale industries. Our professionally trained and fully equipped teams are prepared to respond effectively to almost any security situation.
                  </p>
                  <p className="text-gray-600 mb-8 leading-relaxed">
                    We pride ourselves on delivering customised security solutions that are carefully tailored to meet the specific needs and operational requirements of each client.
                  </p>
                  <div className="grid grid-cols-2 gap-3 mb-8">
                    {securityServices.map((service) => (
                      <div key={service} className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-[#D4A017] flex-shrink-0" />
                        <span className="text-sm text-gray-700">{service}</span>
                      </div>
                    ))}
                  </div>
                  <Link to="/contact">
                    <Button className="bg-[#D4A017] hover:bg-[#b8890f] text-[#0a1628]">
                      Request Security Quote
                      <ChevronRight className="ml-2 w-4 h-4" />
                    </Button>
                  </Link>
                </div>
                <div className="rounded-2xl overflow-hidden shadow-2xl">
                  <img
                    src="https://images.unsplash.com/photo-1582139329536-e7284fece509?w=800&q=80"
                    alt="Security Guard"
                    className="w-full h-96 object-cover"
                  />
                </div>
              </div>
            </TabsContent>

            {/* PSIRA Training */}
            <TabsContent value="psira">
              <div className="mb-12 text-center">
                <h2 className="text-3xl font-bold text-[#0a1628] mb-4">PSIRA Security Training</h2>
                <p className="text-gray-600 max-w-3xl mx-auto">
                  Progress through the PSIRA Grades in structured order, beginning with Grade E and advancing up to Grade A.
                </p>
              </div>

              {/* Grade Selector */}
              <div className="flex justify-center gap-4 mb-8">
                {psiraGrades.map((grade) => (
                  <button
                    key={grade.grade}
                    onClick={() => setActiveGrade(grade.grade)}
                    className={`w-14 h-14 rounded-full font-bold text-lg transition-all ${
                      activeGrade === grade.grade
                        ? 'bg-[#D4A017] text-[#0a1628] scale-110 shadow-lg'
                        : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                    }`}
                  >
                    {grade.grade}
                  </button>
                ))}
              </div>

              {/* Active Grade Details */}
              {psiraGrades.filter(g => g.grade === activeGrade).map((grade) => (
                <motion.div
                  key={grade.grade}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-gray-50 rounded-2xl p-8 max-w-3xl mx-auto"
                >
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 rounded-full bg-[#0a1628] flex items-center justify-center">
                      <span className="text-white font-bold text-2xl">{grade.grade}</span>
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-[#0a1628]">Grade {grade.grade} – {grade.title}</h3>
                      <p className="text-gray-500">{grade.description}</p>
                    </div>
                  </div>
                  <ul className="space-y-3">
                    {grade.details.map((detail) => (
                      <li key={detail} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-[#D4A017] mt-0.5" />
                        <span className="text-gray-700">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}

              {/* Specialized Courses */}
              <div className="mt-16">
                <h3 className="text-2xl font-bold text-[#0a1628] text-center mb-8">Specialized Security Courses</h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {specializedCourses.map((course) => (
                    <div key={course.name} className="bg-white rounded-xl p-6 border border-gray-200 hover:shadow-lg transition-shadow">
                      <h4 className="font-bold text-[#0a1628] mb-2">{course.name}</h4>
                      <p className="text-gray-500 text-sm">{course.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </TabsContent>

            {/* Driving School - NEW SECTION */}
            <TabsContent value="driving">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-[#0a1628] mb-4">Bravo Driving School</h2>
                <p className="text-gray-600">Professional driving instruction for light and heavy vehicles.</p>
              </div>
              <div className="grid lg:grid-cols-2 gap-8">
                {/* Standard Licenses Card */}
                <div className="bg-blue-50 rounded-2xl border border-blue-200 shadow-sm overflow-hidden flex flex-col h-full">
                  <img 
                    src="https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=800&q=80" 
                    alt="Driving School" 
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-8 flex-1">
                    <div className="flex items-center gap-3 mb-6">
                      <Car className="w-8 h-8 text-blue-600" />
                      <h3 className="text-xl font-bold text-[#0a1628]">Driver's Licenses</h3>
                    </div>
                    <ul className="space-y-4">
                      {drivingSchool.codes.map((code) => (
                        <li key={code.name} className="flex flex-col border-b border-blue-200 pb-3 last:border-0 last:pb-0">
                          <div className="flex items-center gap-2 font-bold text-[#0a1628]">
                            <CheckCircle2 className="w-4 h-4 text-blue-600" />
                            {code.name}
                          </div>
                          <span className="text-sm text-gray-600 ml-6">{code.desc}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Advanced Trucking Card */}
                <div className="bg-slate-50 rounded-2xl border border-slate-200 shadow-sm overflow-hidden flex flex-col h-full">
                  <img 
                    src="https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=800&q=80" 
                    alt="Truck Training" 
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-8 flex-1">
                    <div className="flex items-center gap-3 mb-6">
                      <Truck className="w-8 h-8 text-slate-700" />
                      <h3 className="text-xl font-bold text-[#0a1628]">Advanced Trucking</h3>
                    </div>
                    <div className="grid gap-3">
                      {drivingSchool.advanced.map((item) => (
                        <div key={item} className="flex items-center gap-3 p-3 bg-white rounded-lg border border-slate-100">
                          <CheckCircle2 className="w-5 h-5 text-slate-700" />
                          <span className="font-medium text-[#0a1628]">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>

            {/* Firearm Training */}
            <TabsContent value="firearm">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="order-2 lg:order-1 rounded-2xl overflow-hidden shadow-2xl">
                  <img
                    src="https://images.unsplash.com/photo-1595590424283-b8f17842773f?w=800&q=80"
                    alt="Firearm Training"
                    className="w-full h-96 object-cover"
                  />
                </div>
                <div className="order-1 lg:order-2">
                  <h2 className="text-3xl font-bold text-[#0a1628] mb-6">Firearm Training</h2>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    Learn how to handle and use firearms effectively. Note that the Legal Knowledge Course is already included and is a pre-requisite for any firearm.
                  </p>
                  <div className="grid grid-cols-1 gap-3 mb-8">
                    {firearmCourses.map((course) => (
                      <div key={course} className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                        <Target className="w-5 h-5 text-red-600" />
                        <span className="text-gray-700 font-medium">{course}</span>
                      </div>
                    ))}
                  </div>
                  <Link to="/contact">
                    <Button className="bg-red-600 hover:bg-red-700 text-white">
                      Enrol Now
                      <ChevronRight className="ml-2 w-4 h-4" />
                    </Button>
                  </Link>
                </div>
              </div>
            </TabsContent>

            {/* SASSETA */}
            <TabsContent value="sasseta">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-[#0a1628] mb-4">SASSETA Programmes</h2>
                <p className="text-gray-600 max-w-3xl mx-auto">
                  Nationally accredited training programmes aligned with security qualifications for career advancement.
                </p>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {["Skills Programme 1", "Skills Programme 2", "Skills Programme 3", "Skills Programme 4", "Skills Programme 5", "General Security Practices", "Specialist Security", "Special Event Security"].map((program) => (
                  <div key={program} className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-6 border border-green-200">
                    <Award className="w-10 h-10 text-green-600 mb-4" />
                    <h4 className="font-bold text-[#0a1628] mb-2">{program}</h4>
                    <p className="text-gray-500 text-sm">
                      Aligned with national security qualifications, enhancing core competencies while ensuring industry compliance.
                    </p>
                  </div>
                ))}
              </div>
            </TabsContent>

            {/* Machine Operator */}
            <TabsContent value="machine">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-[#0a1628] mb-4">Machine Operator Courses</h2>
                <p className="text-gray-600">Certified training for lifting machines and earth moving equipment.</p>
              </div>
              <div className="grid lg:grid-cols-2 gap-8">
                {/* Lifting Machines Card */}
                <div className="bg-orange-50 rounded-2xl border border-orange-200 shadow-sm overflow-hidden flex flex-col h-full">
                  <img 
                    src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&q=80" 
                    alt="Forklift Operator" 
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-8 flex-1">
                    <div className="flex items-center gap-3 mb-6">
                      <Truck className="w-8 h-8 text-orange-600" />
                      <h3 className="text-xl font-bold text-[#0a1628]">Lifting Machines</h3>
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                      {machineOperator.lifting.map((machine) => (
                        <div key={machine} className="flex items-center gap-2 p-2 bg-white rounded-lg">
                          <CheckCircle2 className="w-4 h-4 text-orange-600" />
                          <span className="text-sm text-gray-700">{machine}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Earth Moving Card */}
                <div className="bg-yellow-50 rounded-2xl border border-yellow-200 shadow-sm overflow-hidden flex flex-col h-full">
                  <img 
                    src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800&q=80" 
                    alt="Excavator" 
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-8 flex-1">
                    <div className="flex items-center gap-3 mb-6">
                      <HardHat className="w-8 h-8 text-yellow-600" />
                      <h3 className="text-xl font-bold text-[#0a1628]">Earth Moving</h3>
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                      {machineOperator.earthMoving.map((machine) => (
                        <div key={machine} className="flex items-center gap-2 p-2 bg-white rounded-lg">
                          <CheckCircle2 className="w-4 h-4 text-yellow-600" />
                          <span className="text-sm text-gray-700">{machine}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>

            {/* Health & Safety */}
            <TabsContent value="safety">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="text-3xl font-bold text-[#0a1628] mb-6">Health & Safety Training</h2>
                  <p className="text-gray-600 mb-8 leading-relaxed">
                    Comprehensive occupational health and safety training programmes to ensure workplace compliance and employee wellbeing.
                  </p>
                  <div className="grid grid-cols-1 gap-3 mb-8">
                    {healthSafety.map((course) => (
                      <div key={course} className="flex items-center gap-3 p-4 bg-purple-50 rounded-lg border border-purple-100">
                        <Heart className="w-5 h-5 text-purple-600" />
                        <span className="text-gray-700 font-medium">{course}</span>
                      </div>
                    ))}
                  </div>
                  <Link to="/contact">
                    <Button className="bg-purple-600 hover:bg-purple-700 text-white">
                      Enquire About Courses
                      <ChevronRight className="ml-2 w-4 h-4" />
                    </Button>
                  </Link>
                </div>
                <div className="rounded-2xl overflow-hidden shadow-2xl">
                  <img
                    src="https://images.unsplash.com/photo-1504439468489-c8920d796a29?w=800&q=80"
                    alt="Health Safety"
                    className="w-full h-96 object-cover"
                  />
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#D4A017]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-[#0a1628] mb-4">Ready to Get Started?</h2>
          <p className="text-[#0a1628]/80 mb-8">
            Contact us today to discuss your security needs or enrol in our training programmes.
          </p>
          <Link to="/contact">
            <Button className="bg-[#0a1628] hover:bg-[#1a2d4a] text-white px-8 py-6 text-lg">
              Contact Us Today
              <ChevronRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}