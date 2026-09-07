import SectionWrapper from '@/components/layouts/SectionWrapper';
import SectionTitle from '@/components/shared/SectionTitle';
import { careerData } from '@/data/08-careerData';

const CareerSection = () => {
  const header = careerData.header;
  return (
    <SectionWrapper sectionId='career'>
      <SectionTitle title={header.title} badgeText={header.badge} />
    </SectionWrapper>
  );
};

export default CareerSection;
