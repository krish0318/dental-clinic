"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import {
  MapPin, Phone, Clock, Mail, CheckCircle2, Star, ChevronRight,
  Stethoscope, Syringe, ShieldCheck, Smile, Calendar, MessageSquare,
  Award, HeartPulse, UserCheck, HelpCircle
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";

// Animation Variants
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: "easeOut" }
  })
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const staggerChildrenItem = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.5 } },
};

// Data for Services
const serviceAssets = [
  {
    title: "Advanced Root Canal",
    desc: "Laser-assisted, single-sitting painless RCT procedures.",
    character: "https://picsum.photos/seed/rct-char/400/400", 
    icon: "https://picsum.photos/seed/rct-icon/120/120", 
    color: "blue",
  },
  {
    title: "Dental Implants",
    desc: "Premium titanium implants for a permanent, natural smile.",
    character: "https://picsum.photos/seed/implant-char/400/400", 
    icon: "https://picsum.photos/seed/implant-icon/120/120", 
    color: "teal",
  },
  {
    title: "Cosmetic Veneers",
    desc: "Transform your appearance with custom porcelain veneers.",
    character: "https://picsum.photos/seed/veneer-chars/400/400", 
    icon: "https://picsum.photos/seed/veneer-icon/120/120", 
    color: "emerald",
  },
  {
    title: "Orthodontics",
    desc: "Invisalign and clear aligners for perfect teeth alignment.",
    character: "https://picsum.photos/seed/ortho-chars/400/400", 
    icon: "https://picsum.photos/seed/aligner-icon/120/120", 
    color: "indigo",
  },
  {
    title: "Pediatric Care",
    desc: "A friendly, welcoming environment designed for kids.",
    character: "https://picsum.photos/seed/pedia-chars/400/400", 
    icon: "https://picsum.photos/seed/balloon-icon/120/120", 
    color: "rose",
  },
  {
    title: "Digital X-Rays",
    desc: "Low-radiation 3D imaging for precise diagnosis.",
    character: "https://picsum.photos/seed/xray-char/400/400", 
    icon: "https://picsum.photos/seed/hologram-icon/120/120", 
    color: "amber",
  },
];

const serviceRingColors = {
  blue: "group-hover:ring-blue-300",
  teal: "group-hover:ring-teal-300",
  emerald: "group-hover:ring-emerald-300",
  indigo: "group-hover:ring-indigo-300",
  rose: "group-hover:ring-rose-300",
  amber: "group-hover:ring-amber-300",
};

export default function Home() {
  const [activeTab, setActiveTab] = useState("all");
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 selection:bg-teal-100 selection:text-teal-900">

      {/* --- Navigation --- */}
      <nav className="fixed top-6 inset-x-0 z-[100] flex justify-center px-4">

        <motion.nav
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="flex items-center justify-between w-full max-w-5xl h-14 px-3 rounded-full border border-white/40 bg-white/60 backdrop-blur-xl shadow-[0_8px_32px_0_rgba(0,0,0,0.05)]"
        >
          {/* --- Logo Space --- */}
          <Link href="/" className="flex items-center gap-3 pl-2 group">
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-teal-600 text-white transition-transform duration-300 group-hover:rotate-12">
              <Smile className="h-5 w-5" />
            </div>
            <span className="text-sm font-bold tracking-tight text-slate-900 uppercase">
              Vinayak
            </span>
          </Link>

          {/* --- Minimalist Links --- */}
          <div className="hidden md:flex items-center gap-1 bg-slate-100/50 p-1 rounded-full border border-slate-200/50">
            {["Home", "Services", "About", "Contact"].map((item) => (
              <Link
                key={item}
                href={`#${item.toLowerCase()}`}
                className="px-4 py-1.5 text-xs font-bold text-slate-500 rounded-full transition-all hover:text-slate-900 hover:bg-white"
              >
                {item}
              </Link>
            ))}
          </div>

          {/* --- Action Area --- */}
          <div className="flex items-center gap-2">
            <Link
              href="tel:+919876543210"
              className="hidden sm:block px-4 text-[11px] font-black uppercase tracking-widest text-slate-400 hover:text-teal-600 transition-colors"
            >
              Support
            </Link>
            <Button
              className="h-10 px-6 rounded-full bg-slate-900 text-[11px] font-black uppercase tracking-widest text-white hover:bg-teal-600 hover:shadow-lg hover:shadow-teal-100 transition-all duration-300 active:scale-95"
            >
              Book Visit
            </Button>
          </div>
        </motion.nav>

      </nav>

      {/* --- Hero Section --- */}
      <section id="home" className="relative overflow-hidden pt-32 pb-20 lg:pt-32 lg:pb-32">
        {/* Animated Background Elements */}
        <div className="absolute top-0 left-1/2 -z-10 h-[1000px] w-[1000px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-b from-teal-50/50 to-transparent blur-3xl" />
        <div className="absolute -top-24 -right-24 -z-10 h-96 w-96 rounded-full bg-emerald-50/50 blur-3xl" />

        <div className="container relative mx-auto px-4 md:px-6">
          <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
            <motion.div
              custom={0}
              initial="hidden"
              animate="visible"
              variants={fadeIn}
              className="flex flex-col space-y-8"
            >
              <div className="inline-flex items-center rounded-full border border-teal-100 bg-teal-50/50 px-4 py-1.5 text-sm font-semibold text-teal-700 backdrop-blur-sm">
                <span className="mr-2 flex h-2 w-2 rounded-full bg-teal-500 animate-pulse" />
                Trusted Dental Care in Bhiwani
              </div>

              <h1 className="text-5xl font-black tracking-tight text-slate-900 sm:text-6xl lg:text-7xl">
                Modern Dentistry, <br />
                <span className="bg-gradient-to-r from-teal-600 to-emerald-500 bg-clip-text text-transparent">Human Touch.</span>
              </h1>

              <p className="max-w-[540px] text-lg leading-relaxed text-slate-600 md:text-xl">
                Combining 15+ years of clinical excellence with state-of-the-art technology to give you a smile that radiates confidence.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button size="lg" className="h-14 rounded-2xl bg-teal-600 px-8 text-base font-bold text-white shadow-xl shadow-teal-200 hover:bg-teal-700 hover:scale-[1.02] active:scale-[0.98] transition-all">
                  Schedule Appointment
                  <Calendar className="ml-2 h-5 w-5" />
                </Button>
                <Button size="lg" variant="outline" className="h-14 rounded-2xl border-2 border-slate-100 px-8 text-base font-bold text-slate-700 hover:bg-slate-50 transition-all">
                  View Our Results
                </Button>
              </div>

              <div className="flex items-center gap-6 pt-4">
                <div className="flex -space-x-3">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="h-12 w-12 rounded-2xl border-4 border-white bg-slate-100 shadow-sm overflow-hidden">
                      <Image src={`https://picsum.photos/seed/patient${i}/100/100`} alt="User" width={48} height={48} />
                    </div>
                  ))}
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl border-4 border-white bg-teal-600 text-[10px] font-bold text-white">
                    5k+
                  </div>
                </div>
                <div className="h-10 w-[1px] bg-slate-200" />
                <div>
                  <div className="flex items-center gap-1 text-amber-500">
                    {[...Array(5)].map((_, i) => <Star key={i} className="h-4 w-4 fill-current" />)}
                  </div>
                  <p className="text-xs font-bold text-slate-500 uppercase tracking-wider">4.9/5 Average Rating</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative aspect-[4/5] overflow-hidden rounded-[2.5rem] shadow-2xl shadow-slate-200">
                <Image
                  src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=2070&auto=format&fit=crop"
                  alt="Modern Clinic"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent" />
              </div>

              {/* Interactive Floating Card */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-8 -left-8 rounded-3xl bg-white p-6 shadow-2xl ring-1 ring-slate-100"
              >
                <div className="flex items-center gap-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-teal-50 text-teal-600">
                    <Award className="h-8 w-8" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-slate-400 uppercase tracking-tighter">Certified Expert</p>
                    <p className="text-xl font-black text-slate-900">Dr. V. K. Sharma</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* --- Impact Stats --- */}
      <section className="border-y border-slate-100 bg-slate-50/50 py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {[
              { label: "Happy Patients", value: "12,000+", icon: HeartPulse },
              { label: "Years Experience", value: "18+", icon: Clock },
              { label: "Dental Implants", value: "2,500+", icon: ShieldCheck },
              { label: "Root Canals", value: "4,000+", icon: Stethoscope },
            ].map((stat, i) => (
              <div key={i} className="flex flex-col items-center text-center space-y-2">
                <stat.icon className="h-6 w-6 text-teal-600 mb-2" />
                <span className="text-3xl font-black text-slate-900">{stat.value}</span>
                <span className="text-sm font-medium text-slate-500">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- Services Section --- */}
      <section id="services" className="py-24 bg-gradient-to-b from-slate-50/50 to-white">
        <div className="container mx-auto px-4 md:px-6">
          
          {/* Entrance staggered reveal of header */}
          <motion.div 
            initial="hidden" 
            whileInView="visible" 
            viewport={{ once: true, amount: 0.3 }}
            variants={staggerContainer}
            className="mb-16 flex flex-col items-center text-center space-y-4"
          >
            {/* Subtitle */}
            <motion.h2 
              variants={staggerChildrenItem} 
              className="text-sm font-black uppercase tracking-[0.3em] text-teal-600"
            >
              Our Expertise
            </motion.h2>

            {/* Title */}
            <motion.h3 
              variants={staggerChildrenItem} 
              className="text-4xl font-bold text-slate-900 sm:text-5xl"
            >
              Specialized Dental Solutions
            </motion.h3>

            {/* Paragraph */}
            <motion.p 
              variants={staggerChildrenItem} 
              className="max-w-2xl text-lg text-slate-500 leading-relaxed"
            >
              We provide comprehensive care using the latest painless technology, ensuring every visit is stress-free.
            </motion.p>
          </motion.div>

          {/* Grid - refined spacing */}
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {serviceAssets.map((service, index) => {
              // Pick the specific ring color from our mapping
              const ringColor = serviceRingColors[service.color as keyof typeof serviceRingColors] || "group-hover:ring-teal-300";

              return (
                <motion.div
                  key={index}
                  whileHover={{ 
                    y: -12, 
                    scale: 1.02, 
                    transition: { duration: 0.3, ease: "easeOut" } 
                  }}
                  className={`group relative rounded-[2.5rem] bg-white p-10 shadow-xl shadow-slate-100/80 ring-1 ring-slate-100/50 transition-all hover:shadow-2xl hover:shadow-teal-100/50`}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  {/* Micro-interaction Colored Ring */}
                  <div 
                    className={`absolute -inset-1 rounded-[2.5rem] ring-4 ring-transparent ${ringColor} transition-all duration-300 opacity-0 group-hover:opacity-100`}
                  />

                  {/* Staggered Content Layer with 3D assets */}
                  <div className="flex flex-col space-y-8 relative">
                    
                    {/* Character/Icon Scene Layer - Creating depth */}
                    <div className="relative h-60 w-full flex items-center justify-center -mt-6"> {/* Negative margin to lift assets */}
                      
                      {/* Character/Scene (Positioned bottom left/center) */}
                      <motion.div
                        animate={{
                          y: hoveredIndex === index ? -5 : 0,
                          rotate: hoveredIndex === index ? -2 : 0,
                          transition: { duration: 0.4, ease: "easeOut" }
                        }}
                        className="absolute bottom-0 left-0"
                      >
                        <Image 
                          src={service.character} 
                          alt={`${service.title} Scene`} 
                          width={280} 
                          height={280} 
                          className="object-contain"
                        />
                      </motion.div>

                      {/* 3D Icon (Positioned center, interaction point) */}
                      <motion.div
                        animate={{
                          scale: hoveredIndex === index ? 1.08 : 1,
                          x: hoveredIndex === index ? 10 : 0,
                          y: hoveredIndex === index ? -10 : 0,
                          transition: { duration: 0.4, ease: "easeOut", delay: 0.05 }
                        }}
                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-5 rounded-3xl bg-white shadow-xl group-hover:shadow-teal-100/50"
                      >
                        <Image 
                          src={service.icon} 
                          alt={`${service.title} 3D Icon`} 
                          width={88} 
                          height={88} 
                          className="object-contain"
                        />
                      </motion.div>
                    </div>

                    {/* Text Content - Refined typography spacing */}
                    <div className="space-y-4">
                      <motion.h4 
                        animate={{
                          x: hoveredIndex === index ? 5 : 0,
                          transition: { duration: 0.3 }
                        }}
                        className="text-xl font-bold text-slate-900"
                      >
                        {service.title}
                      </motion.h4>
                      <p className="text-slate-500 leading-relaxed text-base">
                        {service.desc}
                      </p>
                    </div>

                    {/* Link with moving chevron */}
                    <div className="pt-2">
                      <Link href="#" className="flex items-center text-sm font-bold text-teal-600">
                        <span className="relative group">
                          Read more 
                          <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-teal-600 transition-all group-hover:w-full" />
                        </span>
                        <motion.span
                          animate={{
                            x: hoveredIndex === index ? 8 : 0,
                            transition: { duration: 0.3 }
                          }}
                        >
                          <ChevronRight className="h-4 w-4 ml-1.5" />
                        </motion.span>
                      </Link>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* --- FAQ / Objection Handling --- */}
      <section className="bg-slate-900 py-24 text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid gap-16 lg:grid-cols-2">
            <div>
              <h2 className="mb-6 text-4xl font-bold leading-tight">Frequently Asked <br /> Dental Questions</h2>
              <p className="mb-10 text-slate-400">Can't find what you're looking for? Reach out to our team directly.</p>
              <Button className="rounded-full bg-teal-500 hover:bg-teal-400">
                Ask a Question
              </Button>
            </div>
            <div className="space-y-4">
              {[
                { q: "Is the Root Canal treatment painful?", a: "Not at all. We use advanced local anesthesia and rotary technology to ensure the procedure is as comfortable as a regular filling." },
                { q: "How much do dental implants cost?", a: "Costs vary based on the material and bone health. We offer transparent pricing and EMI options to make it affordable." },
                { q: "Do you accept emergency walk-ins?", a: "Yes, we prioritize dental emergencies like severe toothaches or broken teeth during clinic hours." }
              ].map((faq, i) => (
                <div key={i} className="rounded-2xl bg-slate-800/50 p-6 ring-1 ring-slate-700">
                  <h4 className="flex items-center gap-3 font-bold text-teal-400 mb-2">
                    <HelpCircle className="h-5 w-5" /> {faq.q}
                  </h4>
                  <p className="text-slate-400 text-sm leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* --- Contact / Booking --- */}
      <section id="contact" className="relative py-24 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="relative z-10 grid gap-12 lg:grid-cols-5">
            <div className="lg:col-span-2 space-y-12">
              <div>
                <h2 className="text-4xl font-bold text-slate-900 mb-6">Let's Fix Your Smile</h2>
                <p className="text-slate-500">Visit our state-of-the-art facility in the heart of Bhiwani.</p>
              </div>

              <div className="space-y-8">
                <div className="flex gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-teal-50 text-teal-600">
                    <MapPin className="h-6 w-6" />
                  </div>
                  <div>
                    <h5 className="font-bold text-slate-900">Clinic Address</h5>
                    <p className="text-slate-500 text-sm">Main Market, Opposite Clock Tower, Bhiwani, HR 127021</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-600">
                    <Phone className="h-6 w-6" />
                  </div>
                  <div>
                    <h5 className="font-bold text-slate-900">Emergency Contact</h5>
                    <p className="text-slate-500 text-sm">+91 98765 43210 (24/7 Helpline)</p>
                  </div>
                </div>
              </div>

              <div className="rounded-[2rem] bg-teal-600 p-8 text-white shadow-2xl shadow-teal-200">
                <h5 className="text-xl font-bold mb-2">Working Hours</h5>
                <div className="space-y-2 opacity-90 text-sm">
                  <div className="flex justify-between border-b border-teal-500/50 pb-2">
                    <span>Monday - Saturday</span>
                    <span>9:00 AM - 8:30 PM</span>
                  </div>
                  <div className="flex justify-between pt-1">
                    <span>Sunday</span>
                    <span>10:00 AM - 2:00 PM</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-3">
              <div className="rounded-[2.5rem] bg-white p-8 shadow-2xl shadow-slate-200 ring-1 ring-slate-100 md:p-12">
                <form className="grid gap-6">
                  <div className="grid gap-6 md:grid-cols-2">
                    <div className="space-y-2">
                      <label className="text-xs font-black uppercase tracking-widest text-slate-400">Full Name</label>
                      <input className="w-full rounded-2xl bg-slate-50 px-5 py-4 text-sm outline-none ring-2 ring-transparent transition-all focus:ring-teal-500/20 focus:bg-white" placeholder="Rahul Singh" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-black uppercase tracking-widest text-slate-400">Phone Number</label>
                      <input className="w-full rounded-2xl bg-slate-50 px-5 py-4 text-sm outline-none ring-2 ring-transparent transition-all focus:ring-teal-500/20 focus:bg-white" placeholder="+91 00000 00000" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-black uppercase tracking-widest text-slate-400">Service Needed</label>
                    <select className="w-full rounded-2xl bg-slate-50 px-5 py-4 text-sm outline-none ring-2 ring-transparent transition-all focus:ring-teal-500/20 focus:bg-white appearance-none">
                      <option>General Checkup</option>
                      <option>Root Canal (RCT)</option>
                      <option>Braces / Aligners</option>
                      <option>Dental Implants</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-black uppercase tracking-widest text-slate-400">How can we help?</label>
                    <textarea rows={4} className="w-full rounded-2xl bg-slate-50 px-5 py-4 text-sm outline-none ring-2 ring-transparent transition-all focus:ring-teal-500/20 focus:bg-white" placeholder="Describe your dental concern..."></textarea>
                  </div>
                  <Button className="h-16 rounded-2xl bg-slate-900 text-lg font-bold hover:bg-teal-600 transition-all">
                    Confirm Appointment Request
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- Footer --- */}
      <footer className="bg-slate-50 py-12 border-t border-slate-200">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-2.5 mb-6">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-teal-600 text-white">
              <Smile className="h-5 w-5" />
            </div>
            <span className="text-lg font-bold tracking-tight text-slate-900">Vinayak Dental</span>
          </div>
          <p className="text-sm text-slate-500 mb-6">Providing quality dental care since 2008 in Bhiwani, Haryana.</p>
          <div className="flex justify-center gap-8 mb-8">
            <Link href="#" className="text-slate-400 hover:text-teal-600 transition-colors">Facebook</Link>
            <Link href="#" className="text-slate-400 hover:text-teal-600 transition-colors">Instagram</Link>
            <Link href="#" className="text-slate-400 hover:text-teal-600 transition-colors">Google Maps</Link>
          </div>
          <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400">
            &copy; {new Date().getFullYear()} Vinayak Dental Clinic. All Rights Reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}