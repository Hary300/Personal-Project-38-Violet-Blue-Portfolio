import { footerData } from '@/data/12-footerData';
import Logo from '../shared/Logo';
import SocialLinks from '../shared/SocialLinks';
import gradientBackground from '@/assets/images/background/heroGradientBackground.webp';

const Footer = () => {
  return (
    <footer className='relative px-4 sm:px-10 lg:px-15 xl:px-30 bg-neutral-950 py-10 lg:pt-25.5 lg:pb-36.25 '>
      <div className='absolute inset-0 overflow-hidden'>
        <img
          src={gradientBackground}
          alt='gradient background'
          className='size-full object-bottom'
        />
      </div>
      <div className='relative flex flex-col gap-8 items-center text-neutral-25'>
        <Logo />
        <p className='text-center text-sm lg:text-md'>{footerData.tagline}</p>
        <SocialLinks />
      </div>
    </footer>
  );
};

export default Footer;
