import { BarChart3, TrendingUp, Users, DollarSign } from 'lucide-react';

const DashboardShowcase = () => {
  return (
    <section className="py-24 bg-slate-50 text-brand-primary overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col-reverse lg:flex-row gap-16 items-center">
          <div className="w-full lg:w-1/2 relative">
            {/* Dashboard Mockup */}
            <div className="bg-white rounded-2xl shadow-2xl border border-slate-100 overflow-hidden transform-gpu hover:scale-[1.02] transition-transform duration-500">
              {/* Header */}
              <div className="bg-slate-800 text-white p-4 flex justify-between items-center">
                <div className="font-bold text-lg">Admin Dashboard</div>
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-slate-600"></div>
                </div>
              </div>
              
              <div className="p-6">
                {/* KPI Cards */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="p-4 rounded-xl bg-blue-50 border border-blue-100">
                    <div className="flex items-center gap-3 text-blue-600 mb-2">
                      <Users size={20} /> <span className="font-medium">Total Students</span>
                    </div>
                    <div className="text-3xl font-bold text-slate-800">2,450</div>
                    <div className="text-sm text-green-600 flex items-center gap-1 mt-2">
                      <TrendingUp size={14} /> +4% this term
                    </div>
                  </div>
                  <div className="p-4 rounded-xl bg-green-50 border border-green-100">
                    <div className="flex items-center gap-3 text-green-600 mb-2">
                      <DollarSign size={20} /> <span className="font-medium">Fee Collection</span>
                    </div>
                    <div className="text-3xl font-bold text-slate-800">$142k</div>
                    <div className="text-sm text-green-600 flex items-center gap-1 mt-2">
                      <TrendingUp size={14} /> +12% this month
                    </div>
                  </div>
                </div>
                
                {/* Chart Area */}
                <div className="bg-slate-50 rounded-xl p-4 border border-slate-100 h-48 flex items-end gap-2 justify-between">
                  {[40, 70, 45, 90, 65, 85, 100].map((height, i) => (
                    <div key={i} className="w-full bg-brand-secondary/20 rounded-t-sm relative group">
                      <div 
                        className="absolute bottom-0 w-full bg-brand-secondary rounded-t-sm transition-all duration-1000 ease-out"
                        style={{ height: `${height}%` }}
                      ></div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          <div className="w-full lg:w-1/2">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Insights That Drive <span className="text-brand-secondary">Action</span>
            </h2>
            <p className="text-lg text-brand-primary/70 mb-8">
              Make data-driven decisions with real-time analytics. Monitor attendance trends, fee collection status, and academic performance from a central command center.
            </p>
            
            <ul className="space-y-6">
              <li className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-brand-secondary/10 flex items-center justify-center flex-shrink-0">
                  <BarChart3 className="text-brand-secondary" />
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-2">Customizable Widgets</h4>
                  <p className="text-brand-primary/70">Pin the metrics that matter most to your role and get a personalized view of operations.</p>
                </div>
              </li>
              <li className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-brand-secondary/10 flex items-center justify-center flex-shrink-0">
                  <TrendingUp className="text-brand-secondary" />
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-2">Trend Analysis</h4>
                  <p className="text-brand-primary/70">Compare historical data to spot patterns in student enrollment and academic outcomes.</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DashboardShowcase;
