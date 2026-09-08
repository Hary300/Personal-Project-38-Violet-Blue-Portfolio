import SectionWrapper from '@/components/layouts/SectionWrapper';
import SectionTitle from '@/components/shared/SectionTitle';
import { careerData } from '@/data/08-careerData';

const CareerSection = () => {
  const header = careerData.header;
  const experiences = careerData.experiences;
  return (
    <SectionWrapper sectionId='career'>
      <SectionTitle title={header.title} badgeText={header.badge} />
      <div className='flex flex-col gap-4'>
        {experiences.map((experience) => (
          <div
            key={experience.id}
            className='relative px-4 pb-4 pt-15 sm:pl-40.75 sm:py-6 sm:pr-6 rounded-xl lg:rounded-2xl border overflow-hidden'
          >
            <div className='absolute top-0 left-0 text-sm font-semibold lg:text-md rounded-r-full bg-gradient-purple  text-neutral-25 sm:bottom-0 h-13.75 w-27.25 flex justify-center items-center sm:h-50 sm:-top-10 sm:shrink-0'>
              {experience.period}
            </div>
            <div className='flex flex-col gap-3 sm:grid sm:grid-cols-[0.6fr_1fr] sm:items-center sm:gap-4'>
              <div className='flex flex-col gap-3 shrink-0'>
                <p className='text-lg font-semibold lg:text-xl'>
                  {experience.role}
                </p>
                <div className='flex gap-2'>
                  <div>
                    <img src={experience.logo} alt='logo' />
                  </div>
                  <span className='text-md lg:text-lg font-medium'>
                    {experience.company}
                  </span>
                </div>
              </div>

              <p className='text-neutral-800 text-sm lg:text-md max-w-175'>
                {experience.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default CareerSection;
