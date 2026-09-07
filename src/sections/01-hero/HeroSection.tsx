import SectionWrapper from '@/components/layouts/SectionWrapper';
import { heroData } from '@/data/02-heroData';
import heroSubtract from '@/assets/images/background/heroSubtract.png';
import heroBackground from '@/assets/images/background/heroGradientBackground.webp';
import SocialLinks from '@/components/shared/SocialLinks';
import { Button } from '@/components/ui/button';
import { IoArrowDownOutline } from 'react-icons/io5';

const HeroSection = () => {
  const devImg = heroData.profileImage;

  return (
    <SectionWrapper
      sectionId='home'
      hasGap={false}
      hasPy={false}
      className='relative pt-34.25 lg:pt-36.5 lg:pb-37 h-160 sm:h-270 bg-neutral-950 flex flex-col justify-between text-neutral-25 pb-11 sm:pb-37'
    >
      <div className='flex flex-col gap-5 md:flex-row md:justify-between md:items-center'>
        <p className='font-extrabold text-display-md sm:text-display-3xl md:max-w-95 lg:max-w-144'>
          {heroData.greeting}{' '}
          <span className='bg-gradient-purple bg-clip-text text-transparent '>
            {heroData.name}
          </span>
        </p>
        <p className='text-neutral-300 text-sm sm:text-lg md:max-w-70 lg:max-w-109 md:text-right'>
          {heroData.description}
        </p>
      </div>
      <div className='relative w-full flex justify-between z-1'>
        <SocialLinks />
        <Button
          asChild
          variant='outline'
          className='bg-neutral-950/50 backdrop-blur-2xl border-0   text-lg flex gap-2 sm:w-full sm:max-w-45 w-fit aspect-square'
        >
          <a href={heroData.scrollTarget}>
            <span className='hidden sm:block'>Scroll Down</span>{' '}
            <IoArrowDownOutline className='size-5' />
          </a>
        </Button>
      </div>

      <div className='absolute inset-0 bottom-0'>
        <img
          src={heroBackground}
          alt='background gradient'
          className='size-full'
        />
      </div>

      <div className='absolute bottom-0 max-w-95 sm:max-w-210 w-full left-1/2 -translate-x-1/2'>
        <img src={devImg} alt='dev image' />
      </div>
      <div className='absolute inset-x-0 bottom-0 h-6 sm:h-22.5 overflow-hidden '>
        <img src={heroSubtract} alt='subtract' />
      </div>
    </SectionWrapper>
  );
};

export default HeroSection;
