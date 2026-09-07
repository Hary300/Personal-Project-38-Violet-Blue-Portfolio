import type { SectionHeader } from '@/types/sectionHeader';
import { projectsData } from './06-projectsData';
import folder from '@/assets/icons/aboutMe/folder.svg';

export interface ServiceCategory {
  id: string;
  title: string;
  projectCount: number;
  icon: string;
}

export interface StatItem {
  id: string;
  value: string;
  label: string;
  iconOrAvatars?: string | string[];
}

export interface AboutData {
  header: SectionHeader;
  description: string;
  categories: ServiceCategory[];
  stats: StatItem[];
}

const totalLandingPage = projectsData.projects.filter(
  (project) => project.category === 'Landing Page'
).length;
const totalDashboardSaas = projectsData.projects.filter(
  (project) => project.category === 'Dashboard Saas'
).length;
const totalCompanyProfile = projectsData.projects.filter(
  (project) => project.category === 'Company Profile'
).length;

export const aboutData: AboutData = {
  header: {
    badge: 'ABOUT ME',
    title: 'What Do I Help?',
  },
  description:
    "I am a Frontend Developer dedicated to solving problems and creating impactful digital experiences. By combining process-driven design and modern development practices, I build intuitive and responsive digital products that not only enhance user satisfaction but also drive business success. Let's collaborate to bring your vision to life and elevate your digital presence",
  categories: [
    {
      id: '1',
      title: 'Landing Page',
      projectCount: totalLandingPage,
      icon: 'monitor',
    },
    {
      id: '2',
      title: 'Dashboard Saas',
      projectCount: totalDashboardSaas,
      icon: 'layout',
    },
    {
      id: '3',
      title: 'Company Profile',
      projectCount: totalCompanyProfile,
      icon: 'briefcase',
    },
  ],
  stats: [
    {
      id: '1',
      value: '200+',
      label: 'Project Completed',
      iconOrAvatars: folder,
    },
    {
      id: '2',
      value: '50+',
      label: 'Happy Clients',
      iconOrAvatars: [
        'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80',
        'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=80',
        'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&auto=format&fit=crop&q=80',
        'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&auto=format&fit=crop&q=80',
      ],
    },
  ],
};
