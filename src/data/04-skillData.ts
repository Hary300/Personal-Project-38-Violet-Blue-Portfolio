import type { SectionHeader } from '@/types/sectionHeader';
import html from '@/assets/icons/tech/html.png';
import ts from '@/assets/icons/tech/typescript.png';
import js from '@/assets/icons/tech/javascript.png';
import react from '@/assets/icons/tech/react.png';
import mongo from '@/assets/icons/tech/mongodb.png';
import docker from '@/assets/icons/tech/docker.png';
import reactNative from '@/assets/icons/tech/reactNative.png';
import css from '@/assets/icons/tech/css.png';
import ex from '@/assets/icons/tech/express.png';
import postgres from '@/assets/icons/tech/postgres.png';
import sequelize from '@/assets/icons/tech/sequelize.png';

export interface SkillItem {
  id: string;
  name: string;
  percentage: number;
  description: string;
  icon: string;
}

export interface SkillData {
  header: SectionHeader;
  skills: SkillItem[];
}

export const skillData: SkillData = {
  header: {
    badge: 'SKILL',
    title: 'Skillset',
  },
  skills: [
    {
      id: 'html',
      name: 'HTML',
      percentage: 90,
      description:
        'Building the structure of web pages with semantic markup for accessibility.',
      icon: html,
    },
    {
      id: 'css',
      name: 'CSS',
      percentage: 90,
      description: 'Styling and designing responsive, modern web page layouts.',
      icon: css,
    },
    {
      id: 'javascript',
      name: 'Javascript',
      percentage: 90,
      description:
        'Building the structure of web pages with semantic markup for accessibility.',
      icon: js,
    },
    {
      id: 'react-js',
      name: 'React JS',
      percentage: 90,
      description:
        'Building the structure of web pages with semantic markup for accessibility.',
      icon: react,
    },
    {
      id: 'mongo-db',
      name: 'Mongo DB',
      percentage: 90,
      description:
        'Building the structure of web pages with semantic markup for accessibility.',
      icon: mongo,
    },
    {
      id: 'docker',
      name: 'Docker',
      percentage: 90,
      description:
        'Building the structure of web pages with semantic markup for accessibility.',
      icon: docker,
    },
    {
      id: 'typescript',
      name: 'Typescript',
      percentage: 90,
      description:
        'Building the structure of web pages with semantic markup for accessibility.',
      icon: ts,
    },
    {
      id: 'react-native',
      name: 'React Native',
      percentage: 85,
      description:
        'Developing cross-platform mobile applications for iOS and Android.',
      icon: reactNative,
    },
    {
      id: 'express-js',
      name: 'Express JS',
      percentage: 85,
      description: 'Building robust RESTful APIs and backend web applications.',
      icon: ex,
    },
    {
      id: 'postgresql',
      name: 'PostgreSQL',
      percentage: 85,
      description:
        'Managing relational databases with complex queries and data integrity.',
      icon: postgres,
    },
    {
      id: 'sequelize',
      name: 'Sequelize',
      percentage: 80,
      description:
        'Handling Object-Relational Mapping (ORM) for Node.js and SQL databases.',
      icon: sequelize,
    },
  ],
};
