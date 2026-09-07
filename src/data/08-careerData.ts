import type { SectionHeader } from '@/types/sectionHeader';
import slack from '@/assets/images/career/slack.svg';
import tele from '@/assets/images/career/telegram.svg';
import line from '@/assets/images/career/line.svg';
import skype from '@/assets/images/career/skype.svg';

export interface ExperienceItem {
  id: string;
  period: string;
  role: string;
  company: string;
  logo: string;
  description: string;
}

export interface CareerData {
  header: SectionHeader;
  experiences: ExperienceItem[];
}

export const careerData: CareerData = {
  header: {
    badge: 'WORK EXPERIENCE',
    title: 'Professional Career',
  },
  experiences: [
    {
      id: 'slack-frontend-developer',
      period: '2023 - 2024',
      role: 'Senior Frontend Developer',
      company: 'Slack',
      logo: slack,
      description:
        'Spearheaded the core messaging UI architecture using React and TypeScript, boosting customer engagement retention by 30%.',
    },
    {
      id: 'telegram-frontend-developer',
      period: '2022 - 2023',
      role: 'Frontend Engineer',
      company: 'Telegram',
      logo: tele,
      description:
        'Optimized web application loading performance and state management, resulting in a 40% faster initial page render time.',
    },
    {
      id: 'line-frontend-developer',
      period: '2021 - 2022',
      role: 'UI/UX Frontend Developer',
      company: 'Line',
      logo: line,
      description:
        'Collaborated with cross-functional teams to build interactive landing pages and reusable component libraries using Tailwind CSS.',
    },
    {
      id: 'skype-frontend-developer',
      period: '2020 - 2021',
      role: 'Junior Web Developer',
      company: 'Skype',
      logo: skype,
      description:
        'Maintained legacy web interfaces, fixed UI bugs, and implemented accessible design components for international users.',
    },
  ],
};
