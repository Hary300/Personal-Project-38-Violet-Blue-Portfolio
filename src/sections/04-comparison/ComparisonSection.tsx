import SectionWrapper from '@/components/layouts/SectionWrapper';
import SectionTitle from '@/components/shared/SectionTitle';
import { comparisonData } from '@/data/06-comparisonData';
import { cn } from 'cn';
import { FaCheck } from 'react-icons/fa';
import { RxCross2 } from 'react-icons/rx';

const ComparisonSection = () => {
  const header = comparisonData.header;
  const cards = comparisonData.cards;
  return (
    <SectionWrapper sectionId='comparison' className='relative'>
      <div className='absolute inset-0 bg-linear-to-t from-primary-100 to-transparent -z-1' />
      <SectionTitle title={header.title} badgeText={header.badge} />
      <div className='flex flex-col md:flex-row gap-4 md:gap-6'>
        {cards.map((card) => (
          <div
            key={card.id}
            className={cn(
              'flex flex-1 flex-col gap-6 lg:gap-10 p-6 lg:p-8 text-lg items-center rounded-xl lg:rounded-2xl',
              card.isHighlighted
                ? 'bg-gradient-purple text-neutral-25'
                : 'bg-white border'
            )}
          >
            <div className='flex flex-col gap-6 font-semibold items-center'>
              <p>{card.title}</p>
              <div
                className={cn(
                  'relative size-20 lg:size-25 rounded-full shrink-0  overflow-hidden',
                  card.isHighlighted ? 'bg-neutral-25' : 'bg-neutral-300'
                )}
              >
                <img
                  src={card.avatar}
                  alt='avatar'
                  className={cn(
                    'absolute left-1/2 -translate-x-1/2',
                    card.isHighlighted ? 'bottom-0' : 'top-1/2 -translate-y-1/2'
                  )}
                />
              </div>
            </div>
            <ul
              className={cn(
                'flex flex-col gap-6',
                card.isHighlighted && 'font-medium'
              )}
            >
              {card.features.map((feature, index) => (
                <li
                  key={index}
                  className='flex gap-2 items-center justify-center text-center w-full'
                >
                  {card.isHighlighted ? (
                    <FaCheck />
                  ) : (
                    <RxCross2 className='text-red-500 stroke-2' />
                  )}
                  <span className='text-[clamp(0.75rem,-0.3929rem+5.7143vw,1.125rem)]'>
                    {feature}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default ComparisonSection;
