"use client";
import Link from "next/link";
import { CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="flex flex-col gap-16 pb-10 overflow-hidden">
      {/* Hero Section */}
      <motion.section 
        initial={{ opacity: 0, y: 40 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="pt-12 px-6 text-center max-w-4xl mx-auto"
      >
        <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight mb-6 text-gray-900">
          Connecting Top Talent with <span className="text-blue-600">Leading Companies</span>
        </h1>
        <p className="text-lg text-gray-600 mb-8 leading-relaxed max-w-2xl mx-auto">
          Muskan Career Solutions provides reliable staffing and recruitment solutions across IT and Non-IT sectors, helping businesses grow faster.
        </p>
        <div className="flex justify-center">
          <Link href="/contact" className="bg-blue-600 text-white px-8 py-4 rounded-full font-medium hover:bg-blue-700 transition shadow-md shadow-blue-200">
            Hire Talent
          </Link>
        </div>
      </motion.section>

      {/* Services Section */}
      <motion.section 
        initial={{ opacity: 0, y: 40 }} 
        whileInView={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.2 }} 
        className="px-6 max-w-7xl mx-auto w-full"
      >
        <h2 className="text-3xl font-bold mb-8 text-center text-gray-900">Our Services at Muskan Career Solutions</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { title: "IT Staffing", desc: "Skilled IT professionals for contract and full-time roles." },
            { title: "Non-IT Staffing", desc: "Efficient hiring solutions for various non-technical roles." },
            { title: "Contract Hiring", desc: "Flexible staffing solutions for short and long-term projects." },
            { title: "Remote Hiring", desc: "Access global talent and build remote teams seamlessly." }
          ].map((service, i) => (
            <motion.div whileHover={{ y: -5 }} key={i} className="p-6 rounded-2xl bg-white/80 backdrop-blur-sm border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300">
              <h3 className="text-xl font-bold mb-2 text-blue-600">{service.title}</h3>
              <p className="text-gray-600">{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Why Choose Us */}
      <motion.section 
        initial={{ opacity: 0, y: 40 }} 
        whileInView={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.3 }} 
        className="bg-blue-600 text-white py-16 px-6 mx-4 md:mx-auto max-w-7xl w-full rounded-3xl shadow-lg relative overflow-hidden"
      >
        {/* Subtle glass effect behind the text for premium feel */}
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-3xl font-bold mb-10">Why Choose Muskan Career Solutions?</h2>
          <div className="grid sm:grid-cols-2 gap-4 text-left">
            {[
              "Pre-screened and qualified candidates", 
              "Fast turnaround time", 
              "Strong communication with clients", 
              "Experience in US hiring market", 
              "Reliable and cost-effective solutions"
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3 text-base bg-white/10 backdrop-blur-md p-4 rounded-xl border border-white/10">
                <CheckCircle2 className="text-blue-200 flex-shrink-0" size={20} />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </motion.section>
    </div>
  );
}