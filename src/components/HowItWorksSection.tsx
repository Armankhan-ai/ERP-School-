
const steps = [
  { num: '01', title: 'Setup Your School', desc: 'Quick onboarding to structure your institution.' },
  { num: '02', title: 'Configure Classes & Users', desc: 'Add students, teachers, and assign classes.' },
  { num: '03', title: 'Manage Daily Operations', desc: 'Track attendance, marks, and communication.' },
  { num: '04', title: 'Track Performance & Reports', desc: 'Generate report cards and view analytics.' },
];

const HowItWorksSection = () => {
  return (
    <section id="how-it-works" className="py-24 bg-brand-primary text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-4xl font-bold mb-4">How It Works</h2>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            Get your school running on INTVAR ERP in four simple steps.
          </p>
        </div>
        
        <div className="relative">
          {/* Connecting Line */}
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-brand-secondary/30 -translate-y-1/2"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 relative z-10">
            {steps.map((step, i) => (
              <div key={i} className="flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-brand-primary border-2 border-brand-accent text-brand-accent flex items-center justify-center text-2xl font-bold mb-6 shadow-[0_0_20px_rgba(0,255,255,0.2)]">
                  {step.num}
                </div>
                <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                <p className="text-white/60">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
