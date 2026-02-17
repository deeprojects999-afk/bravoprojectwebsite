import { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, MessageCircle, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import Textarea from '@/components/ui/textarea';
import { useForm } from 'react-hook-form';

// --- CONFIGURATION ---
// The number to receive the messages (Format: CountryCode + Number, no + or spaces)
const WHATSAPP_NUMBER = "27615102322"; 

type FormData = {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
};

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);

    // 1. Format the message for WhatsApp
    const whatsappMessage = `*New Website Enquiry* 🛡️%0A%0A` +
      `*Name:* ${data.name}%0A` +
      `*Phone:* ${data.phone}%0A` +
      `*Email:* ${data.email}%0A` +
      `*Subject:* ${data.subject}%0A%0A` +
      `*Message:*%0A${data.message}`;

    // 2. Create the WhatsApp URL
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${whatsappMessage}`;

    // 3. Open WhatsApp (Short delay to show the "Redirecting" state)
    setTimeout(() => {
      window.open(whatsappUrl, '_blank');
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-[#0a1628] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-4xl font-bold text-white mb-4">Contact Us</h1>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Ready to secure your business or start your training? Get in touch with us today.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            
            {/* Contact Info Cards */}
            <div className="lg:col-span-1 space-y-8">
              <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
                <div className="w-12 h-12 bg-[#D4A017]/10 rounded-xl flex items-center justify-center mb-4">
                  <Phone className="w-6 h-6 text-[#D4A017]" />
                </div>
                <h3 className="font-bold text-[#0a1628] mb-2">Phone</h3>
                <p className="text-gray-600 mb-1">+27 61 510 2322</p>
                <p className="text-sm text-gray-400">24/7 Support Available</p>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
                <div className="w-12 h-12 bg-[#D4A017]/10 rounded-xl flex items-center justify-center mb-4">
                  <Mail className="w-6 h-6 text-[#D4A017]" />
                </div>
                <h3 className="font-bold text-[#0a1628] mb-2">Email</h3>
                <p className="text-gray-600 mb-1">info@bravoprojects.co.za</p>
                <p className="text-sm text-gray-400">Response within 24 hours</p>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
                <div className="w-12 h-12 bg-[#D4A017]/10 rounded-xl flex items-center justify-center mb-4">
                  <MapPin className="w-6 h-6 text-[#D4A017]" />
                </div>
                <h3 className="font-bold text-[#0a1628] mb-2">Head Office</h3>
                <p className="text-gray-600 mb-1">7 Luttig Str, Berlut House</p>
                <p className="text-sm text-gray-400">Roodepoort, Johannesburg</p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="bg-white rounded-3xl shadow-xl p-8 border border-gray-100"
              >
                <h2 className="text-2xl font-bold text-[#0a1628] mb-6">Send us a WhatsApp Message</h2>
                <p className="text-gray-500 mb-6">Fill in the details below and we will open a WhatsApp chat with our team instantly.</p>
                
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-700">Full Name</label>
                      <Input 
                        placeholder="John Doe" 
                        {...register("name", { required: "Name is required" })}
                        className={errors.name ? "border-red-500" : ""}
                      />
                      {errors.name && <span className="text-xs text-red-500">{errors.name.message}</span>}
                    </div>
                    
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-700">Phone Number</label>
                      <Input 
                        placeholder="+27..." 
                        {...register("phone", { required: "Phone number is required" })}
                        className={errors.phone ? "border-red-500" : ""}
                      />
                      {errors.phone && <span className="text-xs text-red-500">{errors.phone.message}</span>}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">Email Address</label>
                    <Input 
                      type="email" 
                      placeholder="john@example.com" 
                      {...register("email", { 
                        required: "Email is required",
                        pattern: {
                          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                          message: "Invalid email address"
                        }
                      })}
                      className={errors.email ? "border-red-500" : ""}
                    />
                    {errors.email && <span className="text-xs text-red-500">{errors.email.message}</span>}
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">Subject</label>
                    <Input 
                      placeholder="Security Quote / Training Enquiry" 
                      {...register("subject", { required: "Subject is required" })}
                      className={errors.subject ? "border-red-500" : ""}
                    />
                    {errors.subject && <span className="text-xs text-red-500">{errors.subject.message}</span>}
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">Message</label>
                    <Textarea 
                      placeholder="How can we help you?" 
                      className={`min-h-[150px] ${errors.message ? "border-red-500" : ""}`}
                      {...register("message", { required: "Message is required" })}
                    />
                    {errors.message && <span className="text-xs text-red-500">{errors.message.message}</span>}
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full bg-[#25D366] hover:bg-[#128C7E] text-white font-bold py-6 text-lg transition-all"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Redirecting to WhatsApp...
                      </>
                    ) : (
                      <>
                        Send via WhatsApp
                        <MessageCircle className="ml-2 h-5 w-5" />
                      </>
                    )}
                  </Button>
                </form>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}