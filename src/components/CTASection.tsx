import { Link } from 'react-router-dom';

const CTASection = () => {
  return (
    <section className="py-24 relative overflow-hidden bg-brand-primary">
      {/* Background elements */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-brand-secondary/20 via-brand-primary to-brand-primary opacity-80 pointer-events-none"></div>
      
      <div className="max-w-5xl mx-auto px-6 relative z-10 text-center bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-12 md:p-20 shadow-2xl">
        <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6">
          Ready to Modernize Your School?
        </h2>
        <p className="text-xl text-white/70 max-w-2xl mx-auto mb-10">
          Bring academics, administration and school operations together with INTVAR ERP.
        </p>
        <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
          <Link to="/contact" className="bg-brand-accent text-brand-primary hover:bg-white hover:text-brand-primary px-8 py-4 rounded-full font-bold text-lg transition-all shadow-lg hover:shadow-brand-accent/30 w-full sm:w-auto inline-block text-center">
            Request a Demo
          </Link>
          <Link to="/contact" className="bg-white/10 hover:bg-white/20 text-white border border-white/20 px-8 py-4 rounded-full font-bold text-lg transition-all w-full sm:w-auto inline-block text-center">
            Talk to Our Team
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
