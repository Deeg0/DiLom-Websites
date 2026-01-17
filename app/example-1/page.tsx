'use client';

import Link from 'next/link';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  ArrowLeft, 
  TrendingUp, 
  Shield, 
  BarChart3,
  Phone,
  Mail,
  MapPin,
  CheckCircle2,
  ChevronRight,
  Award
} from 'lucide-react';

export default function Example1() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const services = [
    {
      icon: TrendingUp,
      title: "Wealth Management",
      description: "Strategic portfolio management tailored to your long-term financial goals and risk tolerance."
    },
    {
      icon: Shield,
      title: "Risk Assessment",
      description: "Comprehensive analysis to protect your assets and ensure financial security for the future."
    },
    {
      icon: BarChart3,
      title: "Investment Strategy",
      description: "Data-driven investment approaches designed to maximize returns while minimizing exposure."
    }
  ];

  const stats = [
    { value: "$2.5B+", label: "Assets Managed" },
    { value: "500+", label: "Happy Clients" },
    { value: "25+", label: "Years Experience" },
    { value: "98%", label: "Client Retention" }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Return Banner */}
      <div className="sticky top-0 z-[60] bg-gradient-to-r from-slate-900 to-slate-800 text-white py-3 px-4">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2 text-sm text-slate-300">
            <span className="hidden sm:inline">This is a demo of the</span>
            <span className="font-semibold text-amber-400">Website Package ($700)</span>
          </div>
          <Link href="/">
            <button className="flex items-center gap-2 px-4 py-2 bg-transparent border border-white/30 text-white rounded-lg hover:bg-white hover:text-slate-900 transition-all duration-300 text-sm">
              <ArrowLeft className="w-4 h-4" />
              Back to DiLom Websites
            </button>
          </Link>
        </div>
      </div>

      {/* Navigation */}
      <nav className="sticky top-[57px] z-50 bg-white/95 backdrop-blur-md border-b border-slate-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between h-16 sm:h-20">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-[#1E3A5F] to-[#2d5a8a] rounded-lg flex items-center justify-center">
                <TrendingUp className="w-5 h-5 text-[#C9A227]" />
              </div>
              <div>
                <span className="text-xl font-bold text-[#1E3A5F]">Summit</span>
                <span className="text-xl font-light text-slate-600"> Financial</span>
              </div>
            </div>
            <div className="hidden md:flex items-center gap-8">
              <a href="#about" className="text-slate-600 hover:text-[#1E3A5F] transition-colors font-medium">About</a>
              <a href="#services" className="text-slate-600 hover:text-[#1E3A5F] transition-colors font-medium">Services</a>
              <a href="#contact" className="text-slate-600 hover:text-[#1E3A5F] transition-colors font-medium">Contact</a>
            </div>
            <button className="px-4 py-2 bg-[#1E3A5F] hover:bg-[#2d5a8a] text-white rounded-lg shadow-lg shadow-[#1E3A5F]/20 transition-colors">
              Free Consultation
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50/30">
        {/* Decorative Elements */}
        <div className="absolute top-20 right-0 w-96 h-96 bg-[#C9A227]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#1E3A5F]/5 rounded-full blur-3xl" />
        
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16 sm:py-24 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-2 bg-[#1E3A5F]/10 text-[#1E3A5F] px-4 py-2 rounded-full text-sm font-medium mb-6">
                <Award className="w-4 h-4 text-[#C9A227]" />
                Trusted Financial Partners Since 1998
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#1E3A5F] leading-tight mb-6">
                Building Your
                <span className="block text-[#C9A227]">Financial Future</span>
              </h1>
              <p className="text-lg sm:text-xl text-slate-600 leading-relaxed mb-8 max-w-lg">
                Expert financial guidance tailored to your goals. We help individuals and businesses achieve lasting prosperity through strategic planning and personalized solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="flex items-center justify-center px-8 py-4 bg-[#1E3A5F] hover:bg-[#2d5a8a] text-white rounded-lg shadow-xl shadow-[#1E3A5F]/20 transition-colors text-lg">
                  Schedule a Call
                  <ChevronRight className="w-5 h-5 ml-2" />
                </button>
                <button className="px-8 py-4 border-2 border-[#1E3A5F] text-[#1E3A5F] hover:bg-[#1E3A5F] hover:text-white rounded-lg transition-colors text-lg">
                  Learn More
                </button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative hidden lg:block"
            >
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=600&h=700&fit=crop"
                  alt="Financial professional"
                  className="rounded-2xl shadow-2xl shadow-slate-300/50"
                />
                {/* Floating Card */}
                <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-xl p-5 border border-slate-100">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                      <TrendingUp className="w-6 h-6 text-green-600" />
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-[#1E3A5F]">+127%</p>
                      <p className="text-sm text-slate-500">Avg. Portfolio Growth</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-[#1E3A5F] py-12 sm:py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {stats.map((stat, index) => (
              <motion.div 
                key={index}
                variants={fadeInUp}
                className="text-center"
              >
                <p className="text-3xl sm:text-4xl font-bold text-[#C9A227] mb-2">{stat.value}</p>
                <p className="text-slate-300 font-medium">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 sm:py-24 bg-white scroll-mt-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <img 
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=600&h=500&fit=crop"
                alt="Team meeting"
                className="rounded-2xl shadow-xl"
              />
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-[#C9A227]/20 rounded-2xl -z-10" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-[#C9A227] font-semibold text-sm uppercase tracking-wider">About Us</span>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#1E3A5F] mt-3 mb-6">
                Your Success is Our Mission
              </h2>
              <p className="text-slate-600 text-lg leading-relaxed mb-6">
                At Summit Financial Advisors, we believe everyone deserves access to expert financial guidance. Our team of certified professionals combines decades of experience with cutting-edge strategies to help you reach your goals.
              </p>
              <div className="space-y-4">
                {[
                  "Personalized financial strategies",
                  "Transparent fee structure",
                  "24/7 portfolio monitoring",
                  "Dedicated account managers"
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#C9A227] flex-shrink-0" />
                    <span className="text-slate-700">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 sm:py-24 bg-gradient-to-b from-slate-50 to-white scroll-mt-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <motion.div 
            className="text-center max-w-2xl mx-auto mb-12 sm:mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-[#C9A227] font-semibold text-sm uppercase tracking-wider">Our Services</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1E3A5F] mt-3 mb-4">
              Comprehensive Financial Solutions
            </h2>
            <p className="text-slate-600 text-lg">
              From wealth management to retirement planning, we offer a full spectrum of services to meet your financial needs.
            </p>
          </motion.div>

          <motion.div 
            className="grid md:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  className="group bg-white rounded-2xl p-8 shadow-lg shadow-slate-200/50 border border-slate-100 hover:shadow-xl hover:border-[#C9A227]/30 transition-all duration-300"
                >
                  <div className="w-14 h-14 bg-gradient-to-br from-[#1E3A5F] to-[#2d5a8a] rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="w-7 h-7 text-[#C9A227]" />
                  </div>
                  <h3 className="text-xl font-bold text-[#1E3A5F] mb-3">{service.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{service.description}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 sm:py-24 bg-white scroll-mt-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-[#C9A227] font-semibold text-sm uppercase tracking-wider">Get In Touch</span>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#1E3A5F] mt-3 mb-6">
                Start Your Financial Journey
              </h2>
              <p className="text-slate-600 text-lg mb-8">
                Ready to take control of your financial future? Contact us today for a free consultation with one of our expert advisors.
              </p>

              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-[#1E3A5F]/10 rounded-xl flex items-center justify-center">
                    <Phone className="w-5 h-5 text-[#1E3A5F]" />
                  </div>
                  <div>
                    <p className="text-sm text-slate-500">Phone</p>
                    <p className="text-[#1E3A5F] font-semibold">(555) 123-4567</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-[#1E3A5F]/10 rounded-xl flex items-center justify-center">
                    <Mail className="w-5 h-5 text-[#1E3A5F]" />
                  </div>
                  <div>
                    <p className="text-sm text-slate-500">Email</p>
                    <p className="text-[#1E3A5F] font-semibold">info@summitfinancial.com</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-[#1E3A5F]/10 rounded-xl flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-[#1E3A5F]" />
                  </div>
                  <div>
                    <p className="text-sm text-slate-500">Location</p>
                    <p className="text-[#1E3A5F] font-semibold">123 Financial District, Suite 400</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="bg-slate-50 rounded-2xl p-6 sm:p-8 border border-slate-200">
                <h3 className="text-xl font-bold text-[#1E3A5F] mb-6">Request a Consultation</h3>
                <form className="space-y-5">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Full Name</label>
                    <input 
                      type="text"
                      placeholder="John Smith"
                      className="w-full px-4 py-3 bg-white border border-slate-200 rounded-lg focus:border-[#C9A227] focus:ring-2 focus:ring-[#C9A227]/20 outline-none transition-colors"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Email Address</label>
                    <input 
                      type="email"
                      placeholder="john@example.com"
                      className="w-full px-4 py-3 bg-white border border-slate-200 rounded-lg focus:border-[#C9A227] focus:ring-2 focus:ring-[#C9A227]/20 outline-none transition-colors"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Phone Number</label>
                    <input 
                      type="tel"
                      placeholder="(555) 123-4567"
                      className="w-full px-4 py-3 bg-white border border-slate-200 rounded-lg focus:border-[#C9A227] focus:ring-2 focus:ring-[#C9A227]/20 outline-none transition-colors"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">How can we help?</label>
                    <textarea 
                      placeholder="Tell us about your financial goals..."
                      rows={4}
                      className="w-full px-4 py-3 bg-white border border-slate-200 rounded-lg focus:border-[#C9A227] focus:ring-2 focus:ring-[#C9A227]/20 outline-none transition-colors resize-none"
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                    />
                  </div>
                  <button 
                    type="button"
                    className="w-full px-6 py-4 bg-[#1E3A5F] hover:bg-[#2d5a8a] text-white rounded-lg shadow-lg shadow-[#1E3A5F]/20 transition-colors text-lg font-semibold"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1E3A5F] text-white py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center">
                <TrendingUp className="w-5 h-5 text-[#C9A227]" />
              </div>
              <div>
                <span className="text-xl font-bold">Summit</span>
                <span className="text-xl font-light text-slate-300"> Financial</span>
              </div>
            </div>
            <p className="text-slate-400 text-sm">
              © 2024 Summit Financial Advisors. All rights reserved.
            </p>
          </div>
        </div>
      </footer>

      {/* Demo Footer */}
      <div className="bg-slate-900 text-white py-4 px-4">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-slate-400">
            Demo website by <span className="text-white font-medium">DiLom Websites</span>
          </p>
          <Link href="/">
            <button className="flex items-center gap-2 px-4 py-2 border border-white/30 text-white rounded-lg hover:bg-white hover:text-slate-900 transition-all duration-300 text-sm">
              <ArrowLeft className="w-4 h-4" />
              Return to Home
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
