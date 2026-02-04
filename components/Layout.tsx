import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';
import { SALON_INFO } from '../constants';

export const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Services & Booking', path: '/booking' },
    { name: 'Products', path: '/products' },
  ];

  // Logic to determine if nav should be transparent or solid based on page/scroll
  const isHome = location.pathname === '/';
  
  // Navigation Background Styles
  const navClasses = scrolled || mobileMenuOpen || !isHome
    ? 'bg-white/80 backdrop-blur-xl border-neutral-200 py-4 shadow-sm'
    : 'bg-transparent border-transparent py-6';

  // Navigation Text Styles
  const navTextColor = 'text-neutral-900';

  return (
    <div className="min-h-screen flex flex-col font-sans selection:bg-gold-500 selection:text-white">
      {/* Navigation */}
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-500 border-b ${navClasses}`}
      >
        <div className="container mx-auto px-6 flex items-center justify-between">
          <Link to="/" className={`text-2xl font-serif font-bold tracking-tighter z-50 ${navTextColor}`}>
            HAIR <span className="text-gold-500">SECRET</span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm tracking-wide transition-colors duration-300 hover:text-gold-500 ${
                  location.pathname === link.path ? 'font-semibold text-black' : 'text-neutral-600'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link to="/booking">
                <button className="bg-black text-white px-5 py-2 text-xs font-bold uppercase tracking-wider hover:bg-gold-500 transition-colors shadow-md">
                    Book Now
                </button>
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            className={`md:hidden z-50 ${navTextColor}`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Nav Overlay */}
        <div
          className={`fixed inset-0 bg-white flex flex-col items-center justify-center gap-8 transition-transform duration-500 md:hidden ${
            mobileMenuOpen ? 'translate-y-0' : '-translate-y-full'
          }`}
        >
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className="text-2xl font-serif text-black hover:text-gold-500 transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex-grow pt-20">
        {children}
      </main>

      {/* Footer - Keeping it dark for the "Hint of Black" */}
      <footer className="bg-black border-t border-white/10 pt-16 pb-8 text-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
            <div className="space-y-4">
              <h3 className="text-xl font-serif font-bold text-white">HAIR SECRET</h3>
              <p className="text-neutral-400 text-sm leading-relaxed max-w-xs">
                Where artistry meets elegance. Experience the finest hair care in Kuala Lumpur.
              </p>
            </div>
            
            <div className="space-y-4">
              <h4 className="text-white font-medium tracking-wide">Visit Us</h4>
              <p className="text-neutral-400 text-sm leading-relaxed">
                {SALON_INFO.address}
              </p>
            </div>

            <div className="space-y-4">
              <h4 className="text-white font-medium tracking-wide">Hours</h4>
              <p className="text-neutral-400 text-sm">
                {SALON_INFO.days}<br />
                {SALON_INFO.hours}
              </p>
            </div>

            <div className="space-y-4">
              <h4 className="text-white font-medium tracking-wide">Contact</h4>
              <a href={`tel:${SALON_INFO.phone}`} className="flex items-center gap-2 text-neutral-400 hover:text-white transition-colors text-sm">
                <Phone className="w-4 h-4" /> {SALON_INFO.phone}
              </a>
              <a href={`https://wa.me/${SALON_INFO.whatsapp}`} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-neutral-400 hover:text-white transition-colors text-sm">
                <span className="w-4 h-4 bg-green-500 rounded-full flex items-center justify-center text-[10px] text-black font-bold">W</span> WhatsApp
              </a>
            </div>
          </div>
          
          <div className="border-t border-neutral-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-neutral-500">
            <p>&copy; {new Date().getFullYear()} HAIR SECRET. All rights reserved.</p>
            <div className="flex gap-4 mt-4 md:mt-0">
              <a href="#" className="hover:text-white transition-colors">Instagram</a>
              <a href="#" className="hover:text-white transition-colors">Facebook</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};