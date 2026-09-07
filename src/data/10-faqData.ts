import type { SectionHeader } from '@/types/sectionHeader';

export interface FaqItem {
  value: string;
  trigger: string;
  content: string;
}

export interface FaqData {
  header: SectionHeader;
  questions: FaqItem[];
}

export const faqData: FaqData = {
  header: {
    badge: 'QNA',
    title: 'Your Questions, Answered',
  },
  questions: [
    {
      value: 'approach',
      trigger: "What's your approach to front-end development?",
      content:
        'I focus on clean, maintainable code and prioritize user experience. My approach involves close collaboration with designers to ensure exact implementation and seamless interactions across all devices.',
    },
    {
      value: 'performance',
      trigger: 'How do you ensure websites load quickly and efficiently?',
      content:
        'I optimize assets, implement code splitting, leverage modern image formats, and write efficient TypeScript logic to minimize rendering bottlenecks and ensure fast page loads.',
    },
    {
      value: 'specialization',
      trigger: 'What kind of projects do you specialize in?',
      content:
        'I specialize in building responsive web applications, SaaS dashboards, interactive landing pages, and complex user interfaces using React, Next.js, and Tailwind CSS.',
    },
    {
      value: 'deadlines',
      trigger: 'How do you handle project deadlines?',
      content:
        'I break projects down into manageable milestones, communicate progress transparently, and use agile workflows to ensure high-quality deliverables are handed over on schedule.',
    },
    {
      value: 'technologies',
      trigger: 'What technologies do you use?',
      content:
        'My core tech stack includes React, TypeScript, Next.js, Tailwind CSS, Node.js, Express, and modern state management libraries alongside tools like Git and Docker.',
    },
  ],
};
