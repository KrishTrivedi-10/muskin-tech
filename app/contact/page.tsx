"use client";
import { motion } from "framer-motion";
import { Mail, MapPin, Phone } from "lucide-react";

export default function Contact() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-12 items-center">
      <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">Get in Touch</h1>
        <p className="text-gray-500 text-lg mb-10">
          Ready to hire top talent or find your next role? Reach out to Muskan Career Solutions today.
        </p>
        
        <div className="space-y-6">
          <div className="flex items-center gap-4 text-base text-gray-700">
            <div className="bg-blue-50 p-3 rounded-full text-blue-600"><MapPin size={20}/></div>
            <span>Sheridan, WY 82801</span>
          </div>
          <div className="flex items-center gap-4 text-base text-gray-700">
            <div className="bg-blue-50 p-3 rounded-full text-blue-600"><Mail size={20}/></div>
            <span>contact@muskancareersolutions.com</span>
          </div>
          <div className="flex items-center gap-4 text-base text-gray-700">
            <div className="bg-blue-50 p-3 rounded-full text-blue-600"><Phone size={20}/></div>
            <span>+91 XXXXX XXXXX</span>
          </div>
        </div>
      </motion.div>

      {/* Fix: Wrapped standard form in motion.div instead of motion.form */}
      <motion.div 
        initial={{ opacity: 0, x: 30 }} 
        animate={{ opacity: 1, x: 0 }} 
        transition={{ duration: 0.5, delay: 0.2 }} 
      >
        <form 
          action="https://formspree.io/f/xbdplonb" 
          method="POST"
          className="bg-white p-8 rounded-3xl shadow-lg border border-gray-100 space-y-5"
        >
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
            <input type="text" name="name" required minLength={2} className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-blue-600 transition" placeholder="John Doe" />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
            <input type="email" name="email" required className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-blue-600 transition" placeholder="john@example.com" />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
            <input type="tel" name="phone" required className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-blue-600 transition" placeholder="+1 (555) 000-0000" />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
            <textarea name="message" required rows={4} className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-blue-600 transition" placeholder="How can we help you?"></textarea>
          </div>
          
          <button type="submit" className="w-full bg-blue-600 text-white font-medium rounded-xl px-4 py-3.5 hover:bg-blue-700 transition shadow-md shadow-blue-200 mt-2">
            Send Message
          </button>
        </form>
      </motion.div>
    </div>
  );
}