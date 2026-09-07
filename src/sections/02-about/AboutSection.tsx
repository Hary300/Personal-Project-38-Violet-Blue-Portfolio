import SectionWrapper from '@/components/layouts/SectionWrapper';
import SectionTitle from '@/components/shared/SectionTitle';
import { aboutData } from '@/data/03-aboutData';

const AboutSection = () => {
  const header = aboutData.header;
  return (
    <SectionWrapper sectionId='about'>
      <div className='flex flex-col gap-10 md:flex-row md:justify-between'>
        <div></div>
        <SectionTitle badgeText={header.badge} title={header.title} />
      </div>
    </SectionWrapper>
  );
};

export default AboutSection;
