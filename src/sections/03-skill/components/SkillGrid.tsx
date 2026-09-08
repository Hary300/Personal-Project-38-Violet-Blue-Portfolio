import type { SkillItem } from '@/data/04-skillData';
import { chunk } from '@/lib/chunk';
import CircularSkillProgress from './CircularSkillProgress';

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';

interface SkillGridProps {
  array: SkillItem[];
  size: number;
}
const SkillGrid = ({ array, size }: SkillGridProps) => {
  const slides = chunk(array, size);
  return (
    <Carousel className='w-full flex flex-col gap-4 lg:gap-8 items-center'>
      <CarouselContent>
        {slides.map((slide, index) => (
          <CarouselItem key={index}>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
              {slide.map((skill) => (
                <div
                  key={skill.id}
                  className='flex gap-6 p-4 lg:p-6 rounded-xl border'
                >
                  <CircularSkillProgress skill={skill} />
                  <div className='flex flex-col gap-1 lg:gap-2'>
                    <div className='flex gap-2 items-center'>
                      <div className='flex items-center justify-center size-8 rounded-full bg-neutral-100 shrink-0'>
                        <img
                          src={skill.icon}
                          alt={`${skill.name} icon`}
                          className='w-4.5'
                        />
                      </div>
                      <span className='font-semibold text-md lg:text-lg'>
                        {skill.name}
                      </span>
                    </div>
                    <p className='text-sm text-neutral-800'>
                      {skill.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <div className='flex gap-2'>
        <CarouselPrevious className='static' />
        <CarouselNext className='static' />
      </div>
    </Carousel>
  );
};

export default SkillGrid;
