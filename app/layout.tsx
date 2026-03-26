import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import { Mail, MapPin, Phone, MessageCircle } from "lucide-react";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Muskan Career Solutions",
  description: "Connecting Top Talent with Leading Companies",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} flex flex-col min-h-screen bg-gray-50/30 relative`}>
        <Script src="https://cdn.tailwindcss.com" strategy="beforeInteractive" />

        {/* Navbar - iOS Glass Effect (blur + saturation + transparency) */}
        <nav className="fixed w-full z-50 bg-white/60 backdrop-blur-xl saturate-150 border-b border-gray-200/50 shadow-[0_4px_30px_rgba(0,0,0,0.03)] transition-all duration-300">
          <div className="max-w-7xl mx-auto px-4 py-3 flex flex-wrap justify-between items-center gap-y-3">
            <Link href="/" className="text-xl font-bold tracking-tighter text-blue-600">
              Muskan Career Solutions
            </Link>
          <div className="flex flex-wrap justify-center gap-4 font-medium text-gray-600 text-sm w-full order-last md:order-none md:w-auto">
              <Link href="/" className="hover:text-blue-600 transition">Home</Link>
              <Link href="/about" className="hover:text-blue-600 transition">About</Link>
              <Link href="/services" className="hover:text-blue-600 transition">Services</Link>
              <Link href="/industries" className="hover:text-blue-600 transition">Industries</Link>
              <Link href="/contact" className="hover:text-blue-600 transition">Contact</Link>
            </div>

            <Link href="/contact" className="bg-blue-600 text-white px-5 py-2 rounded-full text-sm hover:bg-blue-700 transition shadow-md">
              Hire Talent
            </Link>
          </div>
        </nav>

        {/* Main Content */}
        <main className="flex-grow pt-32 md:pt-24">{children}</main>

        {/* Floating Inquiry Button - iOS Glass Effect applied here too */}
        <Link 
          href="/contact" 
          className="fixed bottom-6 right-6 z-50 bg-orange-500/80 backdrop-blur-xl saturate-150 text-white px-6 py-3 rounded-full font-bold shadow-xl shadow-orange-500/20 border border-white/20 hover:bg-orange-600/90 hover:-translate-y-1 transition-all duration-300 flex items-center gap-2"
        >
          <MessageCircle size={20} />
          Inquiry
        </Link>

        {/* Footer */}
        <footer className="bg-white border-t border-gray-200 pt-12 pb-6 mt-16">
          <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-10">
            <div>
              <h3 className="text-xl font-bold text-blue-600 mb-3">Muskan Career Solutions</h3>
              <p className="text-gray-500 text-sm leading-relaxed max-w-sm">Providing reliable staffing and recruitment solutions across IT and Non-IT sectors.</p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-4">Connect</h4>
              <div className="flex flex-col gap-3 text-gray-500 text-sm">
                <span className="flex items-center gap-2"><MapPin size={16} className="text-blue-600"/> Sheridan, WY 82801</span>
                <span className="flex items-center gap-2"><Mail size={16} className="text-blue-600"/> contact@muskancareer.com</span>
                <span className="flex items-center gap-2"><Phone size={16} className="text-blue-600"/> +91 XXXXX XXXXX</span>
              </div>
            </div>
          </div>
          <div className="text-center text-gray-400 text-xs mt-10 pt-6 border-t border-gray-200">
            © {new Date().getFullYear()} Muskan Career Solutions. All rights reserved.
          </div>
        </footer>
      </body>
    </html>
  );
}