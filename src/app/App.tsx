import Footer from '@/components/layouts/Footer';
import Header from '@/components/layouts/Header';
import HeroSection from '@/sections/01-hero';
import AboutSection from '@/sections/02-about';
import SkillSection from '@/sections/03-skill';
import ProjectSection from '@/sections/05-project';
import ComparisonSection from '@/sections/04-comparison';
import CareerSection from '@/sections/06-career';
import TestimonialsSection from '@/sections/07-testimonials';
import FaqSection from '@/sections/08-faq';
import ContactSection from '@/sections/09-contact';

function App() {
  return (
    <div className='max-w-360 mx-auto'>
      <Header />
      <HeroSection />
      <AboutSection />
      <SkillSection />
      <ComparisonSection />
      <ProjectSection />
      <CareerSection />
      <TestimonialsSection />
      <FaqSection />
      <ContactSection />
      <Footer />
    </div>
  );
}

export default App;
