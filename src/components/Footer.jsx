import { GraduationCap, Mail, Phone, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-white dark:bg-zinc-950 border-t border-zinc-200 dark:border-white/10 text-zinc-600 dark:text-zinc-400 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
          {/* Brand */}
          <div className="sm:col-span-2 md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-zinc-100 dark:bg-white/10 rounded-lg flex items-center justify-center ring-1 ring-zinc-200 dark:ring-white/20 transition-colors duration-300">
                <GraduationCap className="w-6 h-6 text-accent" />
              </div>
              <span className="text-xl font-bold text-zinc-900 dark:text-white transition-colors duration-300">PTE Subscription Nepal</span>
            </div>
            <p className="text-zinc-600 dark:text-zinc-400 mb-6 max-w-md transition-colors duration-300">
              Your trusted partner for PTE Academic preparation in Nepal. We help students achieve their dreams through realistic practice and expert booking assistance.
            </p>
            <div className="flex gap-4">
              <a href="https://www.facebook.com/apeuninepal/" target='_blank' className="w-10 h-10 bg-zinc-100 dark:bg-white/10 rounded-lg flex items-center justify-center hover:bg-zinc-200 dark:hover:bg-white/20 ring-1 ring-zinc-200 dark:ring-white/20 transition-colors duration-300 overflow-hidden p-1.5">
                <img src="/facebook.png" alt="Facebook" className="w-full h-full object-contain" />
              </a>
              <a href="https://www.instagram.com/apeunidigitalnepal/" target='_blank' className="w-10 h-10 bg-zinc-100 dark:bg-white/10 rounded-lg flex items-center justify-center hover:bg-zinc-200 dark:hover:bg-white/20 ring-1 ring-zinc-200 dark:ring-white/20 transition-colors duration-300 overflow-hidden p-1.5">
                <img src="/instagram.jpg" alt="Instagram" className="w-full h-full object-contain" />
              </a>
              <a href="tel:+9779762419564" target='_blank' className="w-10 h-10 bg-zinc-100 dark:bg-white/10 rounded-lg flex items-center justify-center hover:bg-zinc-200 dark:hover:bg-white/20 ring-1 ring-zinc-200 dark:ring-white/20 transition-colors duration-300 overflow-hidden p-1.5">
                <img src="/phone.jpg" alt="Phone" className="w-full h-full object-contain" />
              </a>
              <a href="https://www.tiktok.com/@apeuni_nepal" target='_blank' className="w-10 h-10 bg-zinc-100 dark:bg-white/10 rounded-lg flex items-center justify-center hover:bg-zinc-200 dark:hover:bg-white/20 ring-1 ring-zinc-200 dark:ring-white/20 transition-colors duration-300 overflow-hidden p-1.5">
                <img src="/tiktok.png" alt="TikTok" className="w-full h-full object-contain" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-zinc-900 dark:text-white font-semibold mb-4 transition-colors duration-300">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="hover:text-accent transition-colors">Home</Link></li>
              <li><Link to="/practice-package" className="hover:text-accent transition-colors">Practice Package</Link></li>
              <li><Link to="/date-booking" className="hover:text-accent transition-colors">Date Booking</Link></li>
              <li><Link to="/downloads" className="hover:text-accent transition-colors">Downloads</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-zinc-900 dark:text-white font-semibold mb-4 transition-colors duration-300">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-accent" />
                <a href="tel:9762419564" className="hover:text-accent transition-colors">9762419564</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-accent" />
                <a href="mailto:info@ptenepal.com" className="hover:text-accent transition-colors">info.pte4u@gmail.com</a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                <span className="text-zinc-600 dark:text-zinc-400 transition-colors duration-300">Lalitpur, Nepal</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-zinc-200 dark:border-white/10 mt-12 pt-8 text-center text-sm text-zinc-500 transition-colors duration-300">
          <p>&copy; {new Date().getFullYear()} Apeuni Digital Nepal. All rights reserved.</p>
          <p className="mt-2">PTE Academic is a registered trademark of Pearson Education Inc. We are an independent preparation service.</p>
        </div>
      </div>
    </footer>
  );
}
