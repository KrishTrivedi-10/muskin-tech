"use client";
import { motion } from "framer-motion";

export default function Services() {
  const steps = [
    { title: "Understanding Client Needs", desc: "We work closely with clients to understand job requirements and company culture." },
    { title: "Talent Sourcing & Networking", desc: "We leverage our network and databases to find the best-fit candidates." },
    { title: "Candidate Evaluation", desc: "We screen candidates based on skills, experience, and communication." },
    { title: "Client-Candidate Alignment", desc: "We coordinate interviews and ensure expectations are aligned." },
    { title: "Successful Placement & Support", desc: "We ensure smooth onboarding and provide continuous support." }
  ];

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="max-w-5xl mx-auto px-6 py-12">
      <h1 className="text-4xl md:text-5xl font-bold text-center mb-6 text-gray-900">Our Staffing Services</h1>
      <p className="text-center text-lg text-gray-500 mb-12 max-w-2xl mx-auto">Providing flexible and robust workforce solutions tailored to your industry.</p>
      
      <div className="grid md:grid-cols-2 gap-6 mb-20">
        {["IT Staffing", "Non-IT Staffing", "Contract Staffing", "Permanent Hiring"].map((service, i) => (
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }} key={i} className="p-6 bg-white border border-gray-100 rounded-2xl shadow-sm hover:shadow-md transition">
            <h3 className="text-xl font-bold text-blue-600 mb-2">{service}</h3>
            <p className="text-gray-600 text-sm">Targeted recruitment solutions to meet your specific operational demands.</p>
          </motion.div>
        ))}
      </div>

      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">Our Staffing Approach</h2>
        <div className="space-y-4">
          {steps.map((step, index) => (
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }} key={index} className="flex gap-5 items-start p-5 bg-gray-50 rounded-2xl border border-gray-100 hover:border-blue-100 transition">
              <div className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold flex-shrink-0 text-sm">{index + 1}</div>
              <div>
                <h3 className="text-lg font-bold mb-1 text-gray-900">{step.title}</h3>
                <p className="text-gray-600 text-sm">{step.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}