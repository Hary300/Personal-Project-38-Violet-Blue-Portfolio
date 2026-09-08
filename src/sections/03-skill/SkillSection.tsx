import SectionWrapper from '@/components/layouts/SectionWrapper';
import SectionTitle from '@/components/shared/SectionTitle';
import { skillData } from '@/data/04-skillData';
import SkillCarousel from './components/SkillCarousel';
import useScreenSize from '@/hooks/useScreenSize';

const SkillSection = () => {
  const header = skillData.header;
  const skills = skillData.skills;
  const size = useScreenSize({ screenSize: 'desktop' }) ? 6 : 3;
  return (
    <SectionWrapper sectionId='skill'>
      <SectionTitle title={header.title} badgeText={header.badge} />
      <SkillCarousel array={skills} size={size} />
    </SectionWrapper>
  );
};

export default SkillSection;
