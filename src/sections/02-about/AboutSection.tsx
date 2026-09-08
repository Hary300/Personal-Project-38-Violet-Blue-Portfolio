import SectionWrapper from '@/components/layouts/SectionWrapper';
import SectionTitle from '@/components/shared/SectionTitle';
import { aboutData } from '@/data/03-aboutData';
import { cn } from 'cn';

const AboutSection = () => {
  const header = aboutData.header;
  const categories = aboutData.categories;
  const stats = aboutData.stats;
  return (
    <SectionWrapper sectionId='about'>
      <div className='flex flex-col gap-10 md:flex-row md:justify-between md:items-center'>
        <div className='flex flex-col gap-3 p-4 rounded-2xl lg:rounded-3xl lg:p-6 bg-primary-100 w-full'>
          {categories.map((category) => {
            return (
              <div
                key={category.id}
                className='flex gap-4 p-4 lg:p-6 items-center rounded-xl lg:rounded-2xl bg-white'
              >
                <div
                  className={cn(
                    'size-12 md:size-16 rounded-full flex justify-center items-center shrink-0',
                    category.bgColor
                  )}
                >
                  <img
                    src={category.icon}
                    alt='icon'
                    className='w-7 md:w-9.5'
                  />
                </div>
                <div className='flex flex-col gap-0.5 lg:gap-1'>
                  <p className='font-semibold text-md lg:text-lg'>
                    {category.title}
                  </p>
                  <p className='text-neutral-500 text-sm lg:text-md'>
                    {category.projectCount} Project
                  </p>
                </div>
              </div>
            );
          })}
        </div>
        <div className='flex flex-col gap-10 sm:max-w-150 lg:max-w-178.75 '>
          <div className='flex flex-col gap-6'>
            <SectionTitle
              badgeText={header.badge}
              title={header.title}
              className='items-start'
            />
            <p className='text-neutral-800 text-sm lg:text-md'>
              {aboutData.description}
            </p>
          </div>
          <div className='flex flex-col gap-6 sm:flex-row sm:justify-between sm:items-center'>
            {stats.map((stat) => {
              if (!stat.iconOrAvatars) return null;
              return (
                <div
                  key={stat.id}
                  className='sm:flex gap-6 grid grid-cols-2 items-center'
                >
                  {typeof stat.iconOrAvatars === 'string' ? (
                    <div className='mx-auto'>
                      <img src={stat.iconOrAvatars} alt='folder icon' />
                    </div>
                  ) : (
                    <div className='flex -space-x-3 mx-auto'>
                      {stat.iconOrAvatars.map((avatar, index) => (
                        <div
                          key={index}
                          className='size-12 lg:size-13 rounded-full overflow-hidden'
                        >
                          <img src={avatar} alt='avatar' />
                        </div>
                      ))}
                    </div>
                  )}
                  <div className='flex flex-col'>
                    <p className='font-bold text-[32px] lg:text-display-2xl'>
                      {stat.value}
                    </p>
                    <p className='text-neutral-800 text-sm lg:text-md'>
                      {stat.label}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default AboutSection;
