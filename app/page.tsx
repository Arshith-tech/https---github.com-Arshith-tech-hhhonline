import HeroSection from '@/components/HeroSection';
import AboutHHH from '@/components/AboutHHH';
import TestimonialsSection from '@/components/TestimonialsSection';
import ProjectsWeSupport from '@/components/ProjectsWeSupport';
import OrganizationsWeSupport from '@/components/OrganizationsWeSupport';
import AwardsSection from '@/components/AwardsSection';

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutHHH />
      <TestimonialsSection />
      <ProjectsWeSupport />
      <OrganizationsWeSupport />
      <AwardsSection />
    </>
  );
}