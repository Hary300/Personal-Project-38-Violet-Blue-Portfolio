import SectionWrapper from '@/components/layouts/SectionWrapper';
import SectionTitle from '@/components/shared/SectionTitle';
import { projectsData } from '@/data/07-projectsData';

const ProjectSection = () => {
  const header = projectsData.header;
  return (
    <SectionWrapper sectionId='projects'>
      <SectionTitle title={header.title} badgeText={header.badge} />
    </SectionWrapper>
  );
};

export default ProjectSection;
