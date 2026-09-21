import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Features', href: '/features' },
    { name: 'About Us', href: '/about' },
  ];

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-brand-primary/80 backdrop-blur-md border-b border-white/10 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2">
          <div className="w-8 h-8 rounded bg-gradient-to-br from-brand-secondary to-brand-accent flex items-center justify-center font-bold text-white shadow-lg">
            IN
          </div>
          <span className="font-bold text-xl tracking-tight text-white">INTVAR ERP</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              className="text-sm font-medium text-white/80 hover:text-brand-accent transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* CTA Buttons */}
        <div className="hidden md:flex items-center space-x-4">
          <button className="text-sm font-medium text-white/90 hover:text-white transition-colors">
            Login
          </button>
          <button className="bg-white text-brand-primary hover:bg-brand-accent hover:text-brand-primary px-5 py-2 rounded-full text-sm font-semibold transition-all shadow-md">
            Request Demo
          </button>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-brand-primary border-b border-white/10 shadow-xl py-4 px-6 flex flex-col space-y-4">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              className="text-base font-medium text-white/90 hover:text-brand-accent"
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <div className="border-t border-white/10 pt-4 flex flex-col space-y-3">
            <button className="w-full text-left font-medium text-white/90">Login</button>
            <button className="w-full bg-white text-brand-primary px-4 py-2 rounded font-semibold text-center">
              Request Demo
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
