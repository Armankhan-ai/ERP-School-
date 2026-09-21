import { Calendar, CheckCircle } from 'lucide-react';

const TimetableShowcase = () => {
  const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'];
  const times = ['08:00', '09:00', '10:00', '11:00', '12:00'];

  return (
    <section className="py-24 bg-white text-brand-primary overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Build Smarter Timetables</h2>
          <p className="text-lg text-brand-primary/70 max-w-2xl mx-auto">
            Conflict-free scheduling for teachers and classes. Automatically detect overlaps and ensure a balanced schedule for everyone.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <div className="w-full lg:w-2/3">
            <div className="bg-white rounded-2xl shadow-xl border border-slate-100 p-6 overflow-x-auto">
              <div className="min-w-[600px]">
                <div className="grid grid-cols-6 gap-4 mb-4">
                  <div className="font-bold text-slate-400 text-sm"></div>
                  {days.map(d => <div key={d} className="font-bold text-center text-slate-500">{d}</div>)}
                </div>
                
                {times.map((time, i) => (
                  <div key={time} className="grid grid-cols-6 gap-4 mb-4">
                    <div className="font-medium text-slate-400 text-sm flex items-center justify-end pr-4">{time}</div>
                    {days.map((_, j) => (
                      <div key={`${i}-${j}`} className={`h-16 rounded-lg border p-2 text-xs flex flex-col justify-center
                        ${(i === 1 && j === 2) ? 'bg-brand-accent/20 border-brand-accent text-brand-primary font-bold' : 'bg-slate-50 border-slate-100 hover:bg-slate-100 transition-colors'}
                      `}>
                        <div className="font-semibold">{['Math', 'Science', 'English', 'History', 'Art'][(i+j)%5]}</div>
                        <div className="text-brand-primary/60 mt-1">Class {8+((i+j)%3)}A</div>
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          <div className="w-full lg:w-1/3 space-y-6">
            <div className="bg-slate-50 rounded-xl p-6 border border-slate-100">
              <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
                <Calendar className="text-brand-secondary" /> Validation
              </h3>
              <ul className="space-y-4">
                <li className="flex items-center gap-3 text-green-600 font-medium">
                  <CheckCircle size={18} /> <span>No Teacher Conflict</span>
                </li>
                <li className="flex items-center gap-3 text-green-600 font-medium">
                  <CheckCircle size={18} /> <span>No Room Conflict</span>
                </li>
                <li className="flex items-center gap-3 text-green-600 font-medium">
                  <CheckCircle size={18} /> <span>Balanced Schedule</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TimetableShowcase;
