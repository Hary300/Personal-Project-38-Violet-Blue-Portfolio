import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { testimonialsData } from '@/data/09-testimonialsData';
import { BiSolidQuoteRight } from 'react-icons/bi';

const TestimonialsCarousel = () => {
  const testimonials = testimonialsData.testimonials;

  return (
    <Carousel className='flex flex-col gap-4 lg:gap-6'>
      <CarouselContent>
        {testimonials.map((testimonial) => (
          <CarouselItem
            key={testimonial.id}
            className='basis-full sm:basis-auto sm:w-100'
          >
            <div className='flex flex-col gap-8 lg:gap-12 border p-4 lg:p-6 rounded-2xl h-full justify-between hover:bg-gradient-purple hover:text-white group'>
              <div className='max-w-16.5 sm:max-w-33.25 w-full'>
                <img src={testimonial.companyLogo} alt='company logo' />
              </div>
              <BiSolidQuoteRight className='text-neutral-300 size-8 sm:size-10 group-hover:text-white' />
              <p className='text-xl font-medium lg:text-display-sm'>
                {testimonial.quote}
              </p>
              <div className='flex gap-3 items-center'>
                <div className='rounded-full size-15 shrink-0 overflow-hidden'>
                  <img src={testimonial.avatar} alt='avatar' />
                </div>
                <div className='flex flex-col'>
                  <p className='font-semibold text-sm lg:text-md'>
                    {testimonial.authorName}
                  </p>
                  <p className='text-sm lg:text-md text-neutral-500 group-hover:text-white'>
                    {testimonial.authorRole}
                  </p>
                </div>
              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <div className='flex gap-2 w-full justify-center'>
        <CarouselPrevious className='static' />
        <CarouselNext className='static' />
      </div>
    </Carousel>
  );
};

export default TestimonialsCarousel;
