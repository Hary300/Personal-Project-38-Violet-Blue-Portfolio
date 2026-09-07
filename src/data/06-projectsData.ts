import project1 from '@/assets/images/projects/project1.png';
import project2 from '@/assets/images/projects/project2.png';
import project3 from '@/assets/images/projects/project3.png';
import type { SectionHeader } from '@/types/sectionHeader';

export type CategoryType =
  | 'Landing Page'
  | 'Dashboard Saas'
  | 'Company Profile';

export interface ProjectItem {
  id: string;
  title: string;
  category: CategoryType;
  image: string;
  tags: string[];
  link?: string;
}

export interface ProjectsData {
  header: SectionHeader;
  projects: ProjectItem[];
}

export const projectsData: ProjectsData = {
  header: {
    badge: 'PORTFOLIO',
    title: 'Latest Project',
  },
  projects: [
    {
      id: 'vacation-landing-page',
      title: 'Vacation Landing Page',
      category: 'Landing Page',
      image: project1,
      tags: ['React', 'Tailwind', 'Responsive'],
      link: '#',
    },
    {
      id: 'saas-product-launch',
      title: 'SaaS Product Launch Landing',
      category: 'Landing Page',
      image:
        'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop&q=80',
      tags: ['Next.js', 'Tailwind', 'Framer Motion'],
      link: '#',
    },
    {
      id: 'mobile-app-promo',
      title: 'Mobile App Promo Page',
      category: 'Landing Page',
      image:
        'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&auto=format&fit=crop&q=80',
      tags: ['React', 'TypeScript', 'Tailwind'],
      link: '#',
    },
    {
      id: 'digital-wallet-dashboard',
      title: 'Digital Wallet & Financial Dashboard',
      category: 'Dashboard Saas',
      image: project2,
      tags: ['React', 'Chart.js', 'Tailwind'],
      link: '#',
    },
    {
      id: 'analytics-crm-platform',
      title: 'Analytics & CRM Platform',
      category: 'Dashboard Saas',
      image:
        'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=800&auto=format&fit=crop&q=80',
      tags: ['Next.js', 'TypeScript', 'Tailwind'],
      link: '#',
    },
    {
      id: 'visual-poetry-agency',
      title: 'Visual Poetry Minimalist Site',
      category: 'Company Profile',
      image: project3,
      tags: ['Vue.js', 'Tailwind', 'Minimalist'],
      link: '#',
    },
    {
      id: 'corporate-law-firm',
      title: 'Corporate Law Firm Website',
      category: 'Company Profile',
      image:
        'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&auto=format&fit=crop&q=80',
      tags: ['React', 'Tailwind', 'SEO Friendly'],
      link: '#',
    },
    {
      id: 'tech-startup-official',
      title: 'Tech Startup Official Site',
      category: 'Company Profile',
      image:
        'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&auto=format&fit=crop&q=80',
      tags: ['Next.js', 'Tailwind', 'TypeScript'],
      link: '#',
    },
  ],
};
