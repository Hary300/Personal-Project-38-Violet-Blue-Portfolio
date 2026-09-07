import devCloseUp from '@/assets/images/dev/DevCloseUp.webp';

export type SocialPlatform = 'dribbble' | 'instagram' | 'linkedin';

export interface HeroData {
  greeting: string;
  name: string;
  description: string;
  profileImage: string;
  scrollTarget: '#comparison';
}

export const heroData: HeroData = {
  greeting: 'Hey There,',
  name: "I'm Hary300",
  description:
    'Front-End Developer with a passion for clean code and intuitive design. Turning ideas into functional beauty',
  profileImage: devCloseUp,

  scrollTarget: '#comparison',
};
