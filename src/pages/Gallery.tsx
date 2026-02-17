import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, Shield, Users, Target, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

// Placeholder images
const galleryImages = [
  {
    id: 1,
    src: "/images/image1.jpeg",
    title: "Professional Security Team",
    category: "Security Operations"
  },
  {
    id: 2,
    src: "/images/image10.jpeg",
    title: "Training Session",
    category: "Training"
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1595590424283-b8f17842773f?w=800&q=80",
    title: "Firearm Training",
    category: "Training"
  },
  {
    id: 4,
    src: "/images/image2.jpeg",
    title: "Safety Training",
    category: "Training"
  },
  {
    id: 5,
    src: "/images/image5.jpeg",
    title: "Team Briefing",
    category: "Security Operations"
  },
  {
    id: 6,
    src: "/images/image9.jpeg",
    title: "Office Operations",
    category: "Operations"
  }
];

const categories = ["All", "Security Operations", "Training", "Operations"];

interface GalleryImage {
  id: number;
  src: string;
  title: string;
  category: string;
}

export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [lightboxImage, setLightboxImage] = useState<GalleryImage | null>(null);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const filteredImages = selectedCategory === "All" 
    ? galleryImages 
    : galleryImages.filter(img => img.category === selectedCategory);

  const openLightbox = (image: GalleryImage, index: number) => {
    setLightboxImage(image);
    setLightboxIndex(index);
  };

  const closeLightbox = () => {
    setLightboxImage(null);
  };

  const nextImage = () => {
    const nextIndex = (lightboxIndex + 1) % filteredImages.length;
    setLightboxIndex(nextIndex);
    setLightboxImage(filteredImages[nextIndex]);
  };

  const prevImage = () => {
    const prevIndex = (lightboxIndex - 1 + filteredImages.length) % filteredImages.length;
    setLightboxIndex(prevIndex);
    setLightboxImage(filteredImages[prevIndex]);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="relative py-24 bg-[#0a1628]">
        <div className="absolute inset-0 opacity-30">
          <img
            src="/images/image10.jpeg"
            alt="Gallery"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0a1628]/80 to-[#0a1628]" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <span className="text-[#D4A017] font-semibold text-sm uppercase tracking-wider">Our Gallery</span>
            <h1 className="text-4xl sm:text-5xl font-bold text-white mt-2 mb-4">
              Bravo Projects in Action
            </h1>
            <p className="text-gray-300 max-w-2xl mx-auto text-lg">
              See our professional security teams and training operations across South Africa.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-[#D4A017] py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="flex flex-col items-center">
              <Shield className="w-8 h-8 text-[#0a1628] mb-2" />
              <p className="text-2xl font-bold text-[#0a1628]">500+</p>
              <p className="text-[#0a1628]/70 text-sm">Trained Officers</p>
            </div>
            <div className="flex flex-col items-center">
              <Users className="w-8 h-8 text-[#0a1628] mb-2" />
              <p className="text-2xl font-bold text-[#0a1628]">15+</p>
              <p className="text-[#0a1628]/70 text-sm">Years Experience</p>
            </div>
            <div className="flex flex-col items-center">
              <Target className="w-8 h-8 text-[#0a1628] mb-2" />
              <p className="text-2xl font-bold text-[#0a1628]">9</p>
              <p className="text-[#0a1628]/70 text-sm">Provinces Covered</p>
            </div>
            <div className="flex flex-col items-center">
              <Award className="w-8 h-8 text-[#0a1628] mb-2" />
              <p className="text-2xl font-bold text-[#0a1628]">100%</p>
              <p className="text-[#0a1628]/70 text-sm">Accredited</p>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full font-medium transition-all ${
                  selectedCategory === category
                    ? 'bg-[#D4A017] text-[#0a1628]'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Image Grid */}
          <motion.div 
            layout
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            <AnimatePresence>
              {filteredImages.map((image, index) => (
                <motion.div
                  key={image.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  className="group cursor-pointer"
                  onClick={() => openLightbox(image, index)}
                >
                  <div className="relative overflow-hidden rounded-2xl aspect-[4/3] shadow-lg">
                    {/* Navy Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a1628]/80 via-[#0a1628]/20 to-transparent z-10 opacity-60 group-hover:opacity-80 transition-opacity" />
                    
                    <img
                      src={image.src}
                      alt={image.title}
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                    />
                    
                    {/* Content Overlay */}
                    <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
                      <span className="text-[#D4A017] text-sm font-medium">{image.category}</span>
                      <h3 className="text-white font-bold text-lg mt-1">{image.title}</h3>
                    </div>

                    {/* Hover Border */}
                    <div className="absolute inset-0 border-4 border-[#D4A017] rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity z-20" />
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-[#0a1628]/95 z-50 flex items-center justify-center p-4"
            onClick={closeLightbox}
          >
            {/* Close Button */}
            <button
              onClick={closeLightbox}
              className="absolute top-6 right-6 text-white hover:text-[#D4A017] transition-colors z-50"
              type="button"
              title="Close Button"
            >
              <X className="w-8 h-8" />
            </button>

            {/* Navigation Arrows */}
            <button 
              onClick={(e) => { e.stopPropagation(); prevImage(); }}
              className="absolute left-6 text-white hover:text-[#D4A017] transition-colors"
              type="button"
              title="Previous Image"
            >
              <ChevronLeft className="w-12 h-12" />
            </button>
            <button
              onClick={(e) => { e.stopPropagation(); nextImage(); }}
              className="absolute right-6 text-white hover:text-[#D4A017] transition-colors"
              type="button"
              title="Next Image"
            >
              <ChevronRight className="w-12 h-12" />
            </button>

            {/* Image */}
            <motion.div
              key={lightboxImage.id}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="max-w-5xl max-h-[80vh] relative"
              onClick={(e: React.MouseEvent<HTMLDivElement>) => e.stopPropagation()}
            >
              <img
                src={lightboxImage.src}
                alt={lightboxImage.title}
                className="max-w-full max-h-[80vh] object-contain rounded-lg shadow-2xl"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#0a1628] to-transparent p-6 rounded-b-lg">
                <span className="text-[#D4A017] text-sm font-medium">{lightboxImage.category}</span>
                <h3 className="text-white font-bold text-xl mt-1">{lightboxImage.title}</h3>
              </div>
            </motion.div>

            {/* Counter */}
            <div className="absolute bottom-6 text-white text-sm">
              {lightboxIndex + 1} / {filteredImages.length}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* CTA */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-[#0a1628] mb-4">Join Our Professional Team</h2>
          <p className="text-gray-600 mb-8">
            Start your security career with Bravo Projects. Enrol in our accredited training programmes today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/services">
              <Button className="bg-[#D4A017] hover:bg-[#b8890f] text-[#0a1628] px-8">
                View Training Courses
              </Button>
            </Link>
            <Link to="/contact">
              <Button variant="outline" className="border-[#0a1628] text-[#0a1628] hover:bg-[#0a1628] hover:text-white px-8">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}