import { CheckCircle } from 'lucide-react';

const benefits = [
  { title: 'Save Time', desc: 'Reduce repetitive administrative work.' },
  { title: 'Reduce Paperwork', desc: 'Keep school information digitally organized.' },
  { title: 'Better Visibility', desc: 'Access school performance from one dashboard.' },
  { title: 'Better Communication', desc: 'Keep parents, teachers and administrators connected.' },
  { title: 'Data Driven Decisions', desc: 'Use reports and analytics for school management.' },
  { title: 'Centralized Management', desc: 'Manage major school operations from one platform.' },
];

const BenefitsSection = () => {
  return (
    <section id="benefits" className="py-24 bg-slate-50 text-brand-primary">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Why Choose INTVAR ERP?</h2>
          <p className="text-lg text-brand-primary/70 max-w-2xl mx-auto">
            Experience the benefits of a modern, connected school ecosystem.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((b, i) => (
            <div key={i} className="flex items-start p-6 bg-white rounded-xl shadow-sm border border-slate-100">
              <CheckCircle className="text-brand-accent shrink-0 mt-1 mr-4" size={24} />
              <div>
                <h3 className="font-bold text-xl mb-2">{b.title}</h3>
                <p className="text-brand-primary/70">{b.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
