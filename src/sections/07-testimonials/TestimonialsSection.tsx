import SectionWrapper from '@/components/layouts/SectionWrapper';
import SectionTitle from '@/components/shared/SectionTitle';
import { testimonialsData } from '@/data/09-testimonialsData';

const TestimonialsSection = () => {
  const header = testimonialsData.header;
  return (
    <SectionWrapper sectionId='testimonials'>
      <SectionTitle title={header.title} badgeText={header.badge} />
    </SectionWrapper>
  );
};

export default TestimonialsSection;
