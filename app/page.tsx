import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { MapPin, Phone, Clock, Mail, CheckCircle2, Star, ChevronRight, Stethoscope, Syringe, ShieldCheck, Smile } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "motion/react"

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 w-full border-b bg-white/80 backdrop-blur-md">
        <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
          <div className="flex items-center gap-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-teal-600 text-white">
              <Smile className="h-6 w-6" />
            </div>
            <span className="text-xl font-bold tracking-tight text-teal-900">Vinayak Dental Clinic</span>
          </div>
          <div className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-600">
            <Link href="#home" className="hover:text-teal-600 transition-colors">Home</Link>
            <Link href="#services" className="hover:text-teal-600 transition-colors">Services</Link>
            <Link href="#about" className="hover:text-teal-600 transition-colors">About</Link>
            <Link href="#contact" className="hover:text-teal-600 transition-colors">Contact</Link>
          </div>
          <Button className="bg-teal-600 hover:bg-teal-700 text-white rounded-full px-6">
            Book Now
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative overflow-hidden bg-white pt-16 md:pt-24 pb-32">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        <div className="container relative mx-auto px-4 md:px-6">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-8 items-center">
            <div className="flex flex-col justify-center space-y-8">
              <div className="space-y-4">
                <div className="inline-flex items-center rounded-full border border-teal-200 bg-teal-50 px-3 py-1 text-sm font-medium text-teal-800">
                  <MapPin className="mr-2 h-4 w-4" />
                  Bhiwani, Haryana
                </div>
                <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl xl:text-6xl/none">
                  Your Smile, <br />
                  <span className="text-teal-600">Our Priority.</span>
                </h1>
                <p className="max-w-[600px] text-lg text-slate-600 md:text-xl leading-relaxed">
                  Experience world-class dental care at Vinayak Dental Clinic. We combine advanced technology with compassionate care to give you the perfect smile.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-teal-600 hover:bg-teal-700 text-white rounded-full h-12 px-8 text-base">
                  Book Appointment
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
                <Button size="lg" variant="outline" className="rounded-full h-12 px-8 text-base border-teal-200 text-teal-700 hover:bg-teal-50">
                  <Phone className="mr-2 h-4 w-4" />
                  Call Us Now
                </Button>
              </div>
              <div className="flex items-center gap-4 text-sm text-slate-600">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="h-8 w-8 rounded-full border-2 border-white bg-slate-200 flex items-center justify-center overflow-hidden">
                      <Image src={`https://picsum.photos/seed/face${i}/100/100`} alt="Patient" width={32} height={32} className="object-cover" />
                    </div>
                  ))}
                </div>
                <p>Trusted by <strong>5000+</strong> happy patients in Bhiwani</p>
              </div>
            </div>
            <div className="relative mx-auto w-full max-w-[500px] lg:max-w-none">
              <div className="relative aspect-square md:aspect-[4/3] lg:aspect-square overflow-hidden rounded-3xl bg-slate-100">
                <Image
                  src="https://picsum.photos/seed/dentist/800/800"
                  alt="Dentist at work"
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 rounded-3xl ring-1 ring-inset ring-slate-900/10"></div>
              </div>
              {/* Floating Badge */}
              <div className="absolute -bottom-6 -left-6 rounded-2xl bg-white p-6 shadow-xl ring-1 ring-slate-900/5">
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-amber-100 text-amber-600">
                    <Star className="h-6 w-6 fill-current" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-slate-500">Google Reviews</p>
                    <p className="text-xl font-bold text-slate-900">4.9/5.0</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="bg-slate-50 py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">Comprehensive Dental Services</h2>
            <p className="max-w-[700px] text-slate-600 md:text-lg">
              We offer a wide range of dental treatments under one roof, using the latest technology and techniques.
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Root Canal Treatment",
                description: "Painless RCT procedures to save your natural teeth and relieve severe toothache.",
                icon: Stethoscope,
              },
              {
                title: "Dental Implants",
                description: "Permanent and natural-looking replacement for missing teeth to restore your smile.",
                icon: ShieldCheck,
              },
              {
                title: "Teeth Whitening",
                description: "Professional teeth whitening services for a brighter, more confident smile.",
                icon: Smile,
              },
              {
                title: "Braces & Aligners",
                description: "Straighten your teeth with traditional braces or invisible clear aligners.",
                icon: CheckCircle2,
              },
              {
                title: "Tooth Extraction",
                description: "Safe and painless removal of damaged or wisdom teeth by expert surgeons.",
                icon: Syringe,
              },
              {
                title: "Pediatric Dentistry",
                description: "Specialized, gentle dental care for children in a friendly environment.",
                icon: Smile,
              },
            ].map((service, index) => (
              <Card key={index} className="border-none shadow-md hover:shadow-lg transition-shadow bg-white rounded-2xl overflow-hidden">
                <CardHeader>
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-teal-50 text-teal-600">
                    <service.icon className="h-6 w-6" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base text-slate-600">{service.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="bg-white py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <div className="relative aspect-square md:aspect-[4/3] overflow-hidden rounded-3xl">
              <Image
                src="https://picsum.photos/seed/clinic/800/600"
                alt="Vinayak Dental Clinic Interior"
                fill
                className="object-cover"
              />
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">About Vinayak Dental Clinic</h2>
              <p className="text-lg text-slate-600 leading-relaxed">
                Located in the heart of Bhiwani, Haryana, Vinayak Dental Clinic is dedicated to providing exceptional dental care to our community. Our team of experienced professionals believes in a patient-first approach, ensuring comfort and quality in every treatment.
              </p>
              <ul className="space-y-4">
                {[
                  "State-of-the-art dental equipment",
                  "Strict sterilization and hygiene protocols",
                  "Experienced and friendly staff",
                  "Affordable and transparent pricing"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-slate-700">
                    <CheckCircle2 className="h-5 w-5 text-teal-600 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <Button className="bg-teal-600 hover:bg-teal-700 text-white rounded-full mt-4 px-8">
                Learn More About Us
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="bg-slate-900 py-24 text-slate-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid gap-12 lg:grid-cols-2">
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">Visit Our Clinic</h2>
                <p className="text-slate-400 text-lg max-w-md">
                  We are conveniently located in Bhiwani. Drop by or call us to schedule your appointment.
                </p>
              </div>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-slate-800 text-teal-400 shrink-0">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Location</h3>
                    <p className="text-slate-400 mt-1">
                      Vinayak Dental Clinic<br />
                      Main Market Road, Near Clock Tower<br />
                      Bhiwani, Haryana 127021
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-slate-800 text-teal-400 shrink-0">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Phone</h3>
                    <p className="text-slate-400 mt-1">+91 98765 43210</p>
                    <p className="text-slate-400">+91 12345 67890</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-slate-800 text-teal-400 shrink-0">
                    <Clock className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Clinic Hours</h3>
                    <p className="text-slate-400 mt-1">Mon - Sat: 9:00 AM - 8:00 PM</p>
                    <p className="text-slate-400">Sunday: 10:00 AM - 2:00 PM</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-slate-800 rounded-3xl p-8 lg:p-10">
              <h3 className="text-2xl font-bold mb-6">Request an Appointment</h3>
              <form className="space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium text-slate-300">Full Name</label>
                    <input id="name" className="w-full rounded-xl border border-slate-700 bg-slate-900 px-4 py-3 text-sm text-slate-50 placeholder:text-slate-500 focus:border-teal-500 focus:outline-none focus:ring-1 focus:ring-teal-500" placeholder="John Doe" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="phone" className="text-sm font-medium text-slate-300">Phone Number</label>
                    <input id="phone" className="w-full rounded-xl border border-slate-700 bg-slate-900 px-4 py-3 text-sm text-slate-50 placeholder:text-slate-500 focus:border-teal-500 focus:outline-none focus:ring-1 focus:ring-teal-500" placeholder="+91 98765 43210" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="service" className="text-sm font-medium text-slate-300">Service Required</label>
                  <select id="service" className="w-full rounded-xl border border-slate-700 bg-slate-900 px-4 py-3 text-sm text-slate-50 focus:border-teal-500 focus:outline-none focus:ring-1 focus:ring-teal-500 appearance-none">
                    <option value="">Select a service</option>
                    <option value="rct">Root Canal</option>
                    <option value="implants">Dental Implants</option>
                    <option value="whitening">Teeth Whitening</option>
                    <option value="braces">Braces</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-slate-300">Message (Optional)</label>
                  <textarea id="message" rows={4} className="w-full rounded-xl border border-slate-700 bg-slate-900 px-4 py-3 text-sm text-slate-50 placeholder:text-slate-500 focus:border-teal-500 focus:outline-none focus:ring-1 focus:ring-teal-500" placeholder="Tell us about your dental issue..."></textarea>
                </div>
                <Button className="w-full bg-teal-600 hover:bg-teal-700 text-white rounded-xl h-12 text-base mt-2">
                  Submit Request
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 py-8 text-center text-slate-400">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Smile className="h-6 w-6 text-teal-600" />
            <span className="text-xl font-bold text-slate-50">Vinayak Dental Clinic</span>
          </div>
          <p className="text-sm">
            &copy; {new Date().getFullYear()} Vinayak Dental Clinic, Bhiwani. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}
