import SectionWrapper from '@/components/layouts/SectionWrapper';
import SectionTitle from '@/components/shared/SectionTitle';
import { testimonialsData } from '@/data/09-testimonialsData';
import TestimonialsCarousel from './components/TestimonialsCarousel';

const TestimonialsSection = () => {
  const header = testimonialsData.header;
  return (
    <SectionWrapper sectionId='testimonials' className='overflow-hidden'>
      <SectionTitle title={header.title} badgeText={header.badge} />
      <TestimonialsCarousel />
    </SectionWrapper>
  );
};

export default TestimonialsSection;
