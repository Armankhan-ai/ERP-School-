import FeaturesHero3D from '../components/FeaturesHero3D';
import FeaturesSection from '../components/FeaturesSection';
import ReportCardShowcase from '../components/ReportCardShowcase';
import TimetableShowcase from '../components/TimetableShowcase';
import DashboardShowcase from '../components/DashboardShowcase';
import CTASection from '../components/CTASection';

const FeaturesPage = () => {
  return (
    <>
      <FeaturesHero3D />
      <FeaturesSection />
      <ReportCardShowcase />
      <TimetableShowcase />
      <DashboardShowcase />
      <CTASection />
    </>
  );
};

export default FeaturesPage;
