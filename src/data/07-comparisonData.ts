import type { SectionHeader } from '@/types/sectionHeader';
import devImage from '@/assets/images/dev/DevCloseUp.webp';
import otherDev from '@/assets/images/dev/otherDev.svg';

export interface ComparisonPoint {
  id: string;
  withMe: string;
  anotherTalent: string;
}

export interface ComparisonCard {
  title: string;
  avatar: string;
  isHighlighted: boolean;
}

export interface ComparisonData {
  header: SectionHeader;
  cards: {
    withMe: ComparisonCard;
    anotherTalent: ComparisonCard;
  };
  features: ComparisonPoint[];
}

export const comparisonData: ComparisonData = {
  header: {
    badge: 'COMPARISON',
    title: 'Why I Stand Out',
  },
  cards: {
    withMe: {
      title: 'With Me',
      avatar: devImage,
      isHighlighted: true,
    },
    anotherTalent: {
      title: 'Another Talent',
      avatar: otherDev,
      isHighlighted: false,
    },
  },
  features: [
    {
      id: 'react-expertise',
      withMe: 'React Expert',
      anotherTalent: 'Basic React Knowledge',
    },
    {
      id: 'design-implementation',
      withMe: 'Precise Website Implementation',
      anotherTalent: 'Inconsistent Design Translation',
    },
    {
      id: 'typescript-knowledge',
      withMe: 'TypeScript Proficiency',
      anotherTalent: 'Little to No TypeScript Knowledge',
    },
    {
      id: 'code-quality',
      withMe: 'Clean, Maintainable Code',
      anotherTalent: 'Unstructured Code',
    },
    {
      id: 'responsiveness',
      withMe: 'Responsive Website Development',
      anotherTalent: 'Inconsistent Responsiveness',
    },
    {
      id: 'performance',
      withMe: 'Performance Optimization',
      anotherTalent: 'Slow and Heavy Websites',
    },
    {
      id: 'ui-design',
      withMe: 'UI Design Proficiency (Figma)',
      anotherTalent: 'No Design Skills',
    },
  ],
};
