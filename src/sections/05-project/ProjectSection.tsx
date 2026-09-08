import SectionWrapper from '@/components/layouts/SectionWrapper';
import SectionTitle from '@/components/shared/SectionTitle';
import { projectsData } from '@/data/07-projectsData';
import ProjectCarousel from './components/ProjectCarousel';
import useScreenSize from '@/hooks/useScreenSize';

const ProjectSection = () => {
  const header = projectsData.header;
  const projects = projectsData.projects;
  const size = useScreenSize({ screenSize: 'tablet' }) ? 1 : 2;
  console.log(size);
  return (
    <SectionWrapper sectionId='projects' noBigScreenPx>
      <SectionTitle title={header.title} badgeText={header.badge} />
      <ProjectCarousel projects={projects} size={size} />
    </SectionWrapper>
  );
};

export default ProjectSection;
