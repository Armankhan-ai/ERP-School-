import { Users, BookOpen, Clock, FileText, Calendar, DollarSign, MessageSquare, BarChart } from 'lucide-react';

const features = [
  { icon: <Users />, title: 'Student Management', desc: 'Admissions, profiles, classes, sections and student records.' },
  { icon: <BookOpen />, title: 'Teacher Management', desc: 'Teacher profiles, subjects, classes, workload and attendance.' },
  { icon: <Clock />, title: 'Attendance', desc: 'Daily attendance, reports, analytics and tracking.' },
  { icon: <FileText />, title: 'Examination', desc: 'Exam schedules, marks entry, grading and academic reports.' },
  { icon: <FileText />, title: 'Report Card Generator', desc: 'Create customizable digital and printable report cards.' },
  { icon: <Calendar />, title: 'Timetable', desc: 'Build and manage class and teacher timetables.' },
  { icon: <DollarSign />, title: 'Fees & Finance', desc: 'Fee structures, payments, receipts, discounts and tracking.' },
  { icon: <MessageSquare />, title: 'Communication', desc: 'Announcements, notifications, circulars and parent communication.' },
  { icon: <BarChart />, title: 'Analytics', desc: 'School performance insights and operational dashboards.' },
];

const FeaturesSection = () => {
  return (
    <section id="features" className="py-24 bg-white text-brand-primary">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Everything Your School Needs</h2>
          <p className="text-lg text-brand-primary/70 max-w-2xl mx-auto">
            A comprehensive suite of tools designed to streamline every aspect of school administration.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, idx) => (
            <div key={idx} className="p-8 rounded-2xl bg-slate-50 border border-slate-100 hover:shadow-lg transition-all group">
              <div className="w-14 h-14 rounded-xl bg-brand-primary/5 flex items-center justify-center text-brand-secondary mb-6 group-hover:scale-110 transition-transform">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-brand-primary/70 leading-relaxed">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
