import SectionWrapper from '@/components/layouts/SectionWrapper';
import SectionTitle from '@/components/shared/SectionTitle';
import { skillData } from '@/data/04-skillData';

const SkillSection = () => {
  const header = skillData.header;
  return (
    <SectionWrapper sectionId='skill'>
      <SectionTitle title={header.title} badgeText={header.badge} />
    </SectionWrapper>
  );
};

export default SkillSection;
