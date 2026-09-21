import { FileText, Download, Printer, ZoomIn } from 'lucide-react';

const ReportCardShowcase = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-brand-primary to-[#0a1424] text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="w-full lg:w-1/2">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Create Professional Report Cards in Seconds
            </h2>
            <p className="text-lg text-white/70 mb-8">
              Generate fully customizable, digital, and printable report cards. Automate grading, compile attendance, and add teacher remarks effortlessly.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="flex items-center space-x-2 bg-white/10 hover:bg-white/20 px-4 py-2 rounded-lg transition-colors border border-white/10">
                <ZoomIn size={18} /> <span>Preview</span>
              </button>
              <button className="flex items-center space-x-2 bg-white/10 hover:bg-white/20 px-4 py-2 rounded-lg transition-colors border border-white/10">
                <Download size={18} /> <span>Generate PDF</span>
              </button>
              <button className="flex items-center space-x-2 bg-white/10 hover:bg-white/20 px-4 py-2 rounded-lg transition-colors border border-white/10">
                <Printer size={18} /> <span>Print</span>
              </button>
            </div>
          </div>
          
          <div className="w-full lg:w-1/2 relative perspective-1000">
            {/* 3D Floating Report Card */}
            <div className="relative w-full max-w-md mx-auto aspect-[1/1.4] transform-gpu rotate-y-[-10deg] rotate-x-[5deg] hover:rotate-y-0 hover:rotate-x-0 transition-transform duration-700 ease-out">
              {/* Stacked cards effect */}
              <div className="absolute inset-0 bg-white rounded-xl shadow-2xl opacity-40 translate-x-4 translate-y-4 -z-20"></div>
              <div className="absolute inset-0 bg-white rounded-xl shadow-2xl opacity-60 translate-x-2 translate-y-2 -z-10"></div>
              
              <div className="absolute inset-0 bg-white rounded-xl shadow-2xl text-brand-primary p-8 flex flex-col">
                <div className="flex justify-between items-start border-b border-slate-200 pb-6 mb-6">
                  <div>
                    <h3 className="font-bold text-2xl">Aarav Sharma</h3>
                    <p className="text-brand-primary/60">Class 8-A | ID: STU-2026</p>
                  </div>
                  <div className="w-12 h-12 rounded bg-slate-100 flex items-center justify-center">
                    <FileText className="text-brand-secondary" />
                  </div>
                </div>
                
                <div className="space-y-4 flex-grow">
                  <div className="flex justify-between items-center bg-slate-50 p-3 rounded">
                    <span className="font-medium">Mathematics</span>
                    <span className="font-bold text-brand-secondary">92</span>
                  </div>
                  <div className="flex justify-between items-center bg-slate-50 p-3 rounded">
                    <span className="font-medium">Science</span>
                    <span className="font-bold text-brand-secondary">88</span>
                  </div>
                  <div className="flex justify-between items-center bg-slate-50 p-3 rounded">
                    <span className="font-medium">English</span>
                    <span className="font-bold text-brand-secondary">94</span>
                  </div>
                  <div className="flex justify-between items-center bg-slate-50 p-3 rounded">
                    <span className="font-medium">Hindi</span>
                    <span className="font-bold text-brand-secondary">91</span>
                  </div>
                </div>
                
                <div className="mt-6 pt-6 border-t border-slate-200 flex justify-between items-center">
                  <div>
                    <div className="text-sm text-brand-primary/60">Attendance</div>
                    <div className="font-bold">96%</div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm text-brand-primary/60">Overall Grade</div>
                    <div className="text-3xl font-extrabold text-brand-secondary">A+</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReportCardShowcase;
