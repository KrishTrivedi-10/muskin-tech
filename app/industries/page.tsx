"use client";
import { motion } from "framer-motion";
import { Monitor, Briefcase, Landmark, Factory, ShoppingCart, Headphones } from "lucide-react";

export default function Industries() {
  const industries = [
    { name: "Information Technology", icon: <Monitor size={28} />, desc: "Software developers, cloud engineers, and data scientists." },
    { name: "Finance & Banking", icon: <Landmark size={28} />, desc: "Financial analysts, accountants, and banking professionals." },
    { name: "Healthcare & Pharma", icon: <Briefcase size={28} />, desc: "Medical billers, administrators, and non-clinical staff." },
    { name: "Manufacturing", icon: <Factory size={28} />, desc: "Supply chain managers, operations directors, and engineers." },
    { name: "Retail & E-commerce", icon: <ShoppingCart size={28} />, desc: "Merchandisers, store managers, and digital marketers." },
    { name: "BPO & Customer Support", icon: <Headphones size={28} />, desc: "Customer success managers, technical support, and reps." }
  ];

  return (
    <div className="max-w-6xl mx-auto px-6 py-16 text-center">
      <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease: "easeOut" }}>
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">Industries We Serve</h1>
        <p className="text-lg text-gray-500 mb-16 max-w-2xl mx-auto">
          Muskin Career Solutions has deep expertise in connecting specialized talent with businesses across a wide variety of sectors.
        </p>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {industries.map((ind, i) => (
          <motion.div 
            initial={{ opacity: 0, y: 30 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            key={i} 
            className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 text-left group"
          >
            <div className="bg-blue-50 text-blue-600 p-4 rounded-xl inline-block mb-5 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
              {ind.icon}
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">{ind.name}</h3>
            <p className="text-gray-600 text-sm leading-relaxed">{ind.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}