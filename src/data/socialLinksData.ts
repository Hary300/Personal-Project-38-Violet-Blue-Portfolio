import type { IconType } from 'react-icons';
import { FaDribbble, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

export type SocialPlatform = 'dribbble' | 'instagram' | 'linkedin';

export interface SocialLink {
  id: string;
  platform: SocialPlatform;
  url: string;
  icon: IconType;
}

export const socialLinksData: SocialLink[] = [
  {
    id: 'dribbble',
    platform: 'dribbble',
    url: 'https://dribbble.com',
    icon: FaDribbble,
  },
  {
    id: 'instagram',
    platform: 'instagram',
    url: 'https://instagram.com',
    icon: FaInstagram,
  },
  {
    id: 'linkedin',
    platform: 'linkedin',
    url: 'https://linkedin.com',
    icon: FaLinkedinIn,
  },
];
