import { Button } from '@/components/ui/button';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import type { ProjectItem } from '@/data/07-projectsData';
import { chunk } from '@/lib/chunk';
import { GoArrowUpRight } from 'react-icons/go';

interface ProjectCarouselProps {
  projects: ProjectItem[];
  size: number;
}

const ProjectCarousel = ({ projects, size }: ProjectCarouselProps) => {
  const slides = chunk(projects, size);
  return (
    <div>
      <Carousel className='w-full flex flex-col gap-4 lg:gap-8 items-center '>
        <CarouselContent className='w-full -ml-1'>
          {slides.map((slide, index) => (
            <CarouselItem
              key={index}
              className='basis-full sm:basis-auto lg:max-w-145 lg:shrink-0 flex flex-col gap-4'
            >
              {slide.map((item) => (
                <div
                  key={item.id}
                  className='relative h-68.5 lg:h-110.25  rounded-xl lg:rounded-2xl overflow-hidden '
                >
                  <div className='absolute inset-0 bg-linear-to-t from-black/80 via-black/26 to-transparent' />

                  <img
                    src={item.image}
                    alt='preview'
                    className='size-full object-cover'
                  />

                  <div className='absolute px-4 pb-4 lg:px-8 lg:pb-8 bottom-0 flex w-full justify-between items-center'>
                    <div className='flex flex-col gap-3 lg:gap-4'>
                      <p className='text-lg font-semibold lg:text-xl text-neutral-25'>
                        {item.title}
                      </p>
                      <div className='flex gap-2'>
                        {item.tags.map((tag, index) => (
                          <p
                            key={index}
                            className='rounded-full py-1 px-2 text-xs lg:text-sm bg-neutral-25'
                          >
                            {tag}
                          </p>
                        ))}
                      </div>
                    </div>
                    <Button className='size-12 lg:size-16 rounded-full bg-neutral-25 shrink-0 flex justify-center items-center'>
                      <GoArrowUpRight className='size-5 lg:size-6 text-neutral-950' />
                    </Button>
                  </div>
                </div>
              ))}
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className='flex gap-2'>
          <CarouselPrevious className='static' />
          <CarouselNext className='static' />
        </div>
      </Carousel>
    </div>
  );
};

export default ProjectCarousel;
