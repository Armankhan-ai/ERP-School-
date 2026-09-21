import { useState } from 'react';

const modules = [
  'Students', 'Teachers', 'Attendance', 'Exams', 'Report Cards', 'Timetable', 'Fees', 'Communication', 'Analytics'
];

const ModuleShowcase = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section id="modules" className="py-24 bg-brand-primary text-white overflow-hidden relative">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-brand-secondary/20 to-transparent pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Interactive Module Showcase</h2>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            Explore the connected ecosystem of INTVAR ERP.
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-12">
          {/* Navigation */}
          <div className="w-full md:w-1/4 flex flex-col space-y-2">
            {modules.map((mod, idx) => (
              <button
                key={mod}
                onClick={() => setActiveTab(idx)}
                className={`text-left px-6 py-4 rounded-xl transition-all font-medium ${
                  activeTab === idx 
                  ? 'bg-brand-secondary text-white shadow-lg shadow-brand-secondary/30 scale-105' 
                  : 'text-white/60 hover:bg-white/5 hover:text-white'
                }`}
              >
                {mod}
              </button>
            ))}
          </div>

          {/* Display */}
          <div className="w-full md:w-3/4 bg-[#0a1424] border border-white/10 rounded-2xl p-8 shadow-2xl relative min-h-[500px] flex items-center justify-center">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] rounded-2xl pointer-events-none"></div>
            <div className="text-center animate-fade-in relative z-10">
              <h3 className="text-3xl font-bold mb-4">{modules[activeTab]} Dashboard</h3>
              <p className="text-white/60 max-w-md mx-auto">
                Detailed view and management interface for {modules[activeTab].toLowerCase()} will be displayed here in the actual application.
              </p>
              <div className="mt-8 grid grid-cols-2 gap-4">
                <div className="h-24 bg-white/5 rounded-lg border border-white/5"></div>
                <div className="h-24 bg-white/5 rounded-lg border border-white/5"></div>
                <div className="col-span-2 h-40 bg-white/5 rounded-lg border border-white/5 mt-4"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ModuleShowcase;
