import { Phone, Menu, X } from 'lucide-react';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import GradientButton from './ui/GradientButton.jsx';
import ThemeToggle from './ThemeToggle.jsx';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Home', href: '/' },
    { label: 'Buy MockTest', href: '/practice-package' },
    { label: 'Date Booking', href: '/date-booking' },
    { label: 'Downloads', href: '/downloads' },
  ];

  const linkClass = ({ isActive }) =>
    `font-medium transition-colors ${
      isActive
        ? 'text-accent dark:text-accent'
        : 'text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white'
    }`;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-zinc-950/80 backdrop-blur-xl border-b border-zinc-200/50 dark:border-white/10 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <NavLink to="/" className="flex items-center gap-2 min-w-0">
            <img src="logo.png" alt="Apeuni Digital Nepal Logo" className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg object-contain flex-shrink-0" />
            <span className="text-base sm:text-xl font-bold text-zinc-900 dark:text-white truncate transition-colors duration-300">Apeuni Digital Nepal</span>
          </NavLink>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <NavLink
                key={link.label}
                to={link.href}
                className={linkClass}
              >
                {link.label}
              </NavLink>
            ))}
            <ThemeToggle />
            <a href="tel:+9779762419564">
              <GradientButton width="100px" height="34px">
                <span className="flex items-center gap-1.5 text-xs">
                  <Phone className="w-3.5 h-3.5" />
                  Call Now
                </span>
              </GradientButton>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-zinc-200/50 dark:border-white/10 bg-white/95 dark:bg-zinc-900/95 transition-colors duration-300">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <NavLink
                  key={link.label}
                  to={link.href}
                  className={linkClass}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </NavLink>
              ))}
              <a href="tel:+9779762419564" className="w-full">
                <GradientButton width="100%" height="44px">
                  <span className="flex items-center gap-2">
                    <Phone className="w-4 h-4" />
                    Call Now
                  </span>
                </GradientButton>
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
