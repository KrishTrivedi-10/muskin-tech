"use client";
import { motion } from "framer-motion";

export default function About() {
  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="max-w-4xl mx-auto px-6 py-12">
      <h1 className="text-4xl md:text-5xl font-bold text-center mb-12 text-gray-900">About Muskin Career Solutions</h1>
      
      <div className="space-y-10 text-lg text-gray-600 leading-relaxed">
        <motion.section initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
          <h2 className="text-2xl font-bold text-blue-600 mb-4">Who We Are</h2>
          <p>Muskin Career Solutions is a growing staffing and recruitment company focused on delivering high-quality talent solutions. We work closely with clients to understand their hiring needs and provide candidates who match both skills and company culture.</p>
        </motion.section>

        <div className="grid md:grid-cols-2 gap-6">
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 }} className="bg-blue-50 p-8 rounded-2xl border border-blue-100">
            <h2 className="text-xl font-bold text-blue-800 mb-3">Our Mission</h2>
            <p className="text-blue-900/80">To connect the right talent with the right opportunity while building long-term professional relationships.</p>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.4 }} className="bg-gray-50 p-8 rounded-2xl border border-gray-200">
            <h2 className="text-xl font-bold text-gray-900 mb-3">Our Vision</h2>
            <p>To become a trusted global staffing partner known for quality, speed, and reliability.</p>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}