import type { SectionHeader } from '@/types/sectionHeader';
import devImage from '@/assets/images/dev/DevCloseUp.webp';
import otherDev from '@/assets/images/dev/otherDev.svg';

export interface ComparisonCard {
  id: string;
  title: string;
  avatar: string;
  isHighlighted: boolean;
  features: string[];
}

export interface ComparisonData {
  header: SectionHeader;
  cards: ComparisonCard[];
}

export const comparisonData: ComparisonData = {
  header: {
    badge: 'COMPARISON',
    title: 'Why I Stand Out',
  },
  cards: [
    {
      id: 'with-me',
      title: 'With Me',
      avatar: devImage,
      isHighlighted: true,
      features: [
        'React Expert',
        'Precise Website Implementation',
        'TypeScript Proficiency',
        'Clean, Maintainable Code',
        'Responsive Website Development',
        'Performance Optimization',
        'UI Design Proficiency (Figma)',
      ],
    },
    {
      id: 'another-talent',
      title: 'Another Talent',
      avatar: otherDev,
      isHighlighted: false,
      features: [
        'Basic React Knowledge',
        'Inconsistent Design Translation',
        'Little to No TypeScript Knowledge',
        'Unstructured Code',
        'Inconsistent Responsiveness',
        'Slow and Heavy Websites',
        'No Design Skills',
      ],
    },
  ],
};
