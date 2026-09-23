import { Mail, Phone, MapPin, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-[#051121] text-white pt-20 pb-10 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
        
        {/* Brand */}
        <div className="col-span-1 md:col-span-1">
          <div className="flex items-center space-x-2 mb-6">
            <div className="w-8 h-8 rounded bg-gradient-to-br from-brand-secondary to-brand-accent flex items-center justify-center font-bold text-white shadow-lg">
              IN
            </div>
            <span className="font-bold text-xl tracking-tight text-white">INTVAR ERP</span>
          </div>
          <p className="text-white/60 text-sm mb-6 leading-relaxed">
            One smart platform to run your entire school. Complete school management from academics to administration.
          </p>
          <div className="flex space-x-4">
            <a href="#" className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-white/70 hover:bg-brand-secondary hover:text-white transition-colors"><Globe size={16} /></a>
            <a href="#" className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-white/70 hover:bg-brand-secondary hover:text-white transition-colors"><Globe size={16} /></a>
            <a href="#" className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-white/70 hover:bg-brand-secondary hover:text-white transition-colors"><Globe size={16} /></a>
            <a href="#" className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-white/70 hover:bg-brand-secondary hover:text-white transition-colors"><Globe size={16} /></a>
          </div>
        </div>

        {/* Links */}
        <div>
          <h4 className="font-semibold text-lg mb-6">Product</h4>
          <ul className="space-y-3">
            <li><Link to="/features" className="text-white/60 hover:text-brand-accent text-sm transition-colors">Features</Link></li>
            <li><a href="#" className="text-white/60 hover:text-brand-accent text-sm transition-colors">Modules</a></li>
            <li><a href="#" className="text-white/60 hover:text-brand-accent text-sm transition-colors">Pricing</a></li>
            <li><a href="#" className="text-white/60 hover:text-brand-accent text-sm transition-colors">Updates</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold text-lg mb-6">Company</h4>
          <ul className="space-y-3">
            <li><Link to="/about" className="text-white/60 hover:text-brand-accent text-sm transition-colors">About Us</Link></li>
            <li><a href="#" className="text-white/60 hover:text-brand-accent text-sm transition-colors">Careers</a></li>
            <li><a href="#" className="text-white/60 hover:text-brand-accent text-sm transition-colors">Contact</a></li>
            <li><a href="#" className="text-white/60 hover:text-brand-accent text-sm transition-colors">Blog</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-semibold text-lg mb-6">Contact Us</h4>
          <ul className="space-y-4">
            <li className="flex items-start space-x-3 text-sm text-white/60">
              <MapPin size={18} className="text-brand-accent shrink-0 mt-0.5" />
              <span>123 Education Hub, Tech Park, City 10001</span>
            </li>
            <li className="flex items-center space-x-3 text-sm text-white/60">
              <Phone size={18} className="text-brand-accent shrink-0" />
              <span>7372908326</span>
            </li>
            <li className="flex items-center space-x-3 text-sm text-white/60">
              <Mail size={18} className="text-brand-accent shrink-0" />
              <span>sahil.f09f@gmail.com</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-white/40">
        <p>© 2026 INTVAR ERP. All rights reserved.</p>
        <div className="flex space-x-6 mt-4 md:mt-0">
          <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
