import SectionWrapper from '@/components/layouts/SectionWrapper';
import SectionTitle from '@/components/shared/SectionTitle';
import { skillData } from '@/data/04-skillData';
import SkillGrid from './components/SkillGrid';
import useIsDesktop from '@/hooks/useIsDesktop';

const SkillSection = () => {
  const header = skillData.header;
  const skills = skillData.skills;
  const size = useIsDesktop() ? 6 : 3;
  return (
    <SectionWrapper sectionId='skill'>
      <SectionTitle title={header.title} badgeText={header.badge} />
      <SkillGrid array={skills} size={size} />
    </SectionWrapper>
  );
};

export default SkillSection;
