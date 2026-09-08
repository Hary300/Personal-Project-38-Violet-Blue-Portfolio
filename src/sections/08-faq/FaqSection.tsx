import SectionWrapper from '@/components/layouts/SectionWrapper';
import SectionTitle from '@/components/shared/SectionTitle';
import { faqData } from '@/data/10-faqData';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const FaqSection = () => {
  const header = faqData.header;
  const faqs = faqData.questions;
  return (
    <SectionWrapper sectionId='faq'>
      <SectionTitle title={header.title} badgeText={header.badge} />
      <Accordion type='single' collapsible defaultValue='approach'>
        {faqs.map((item) => (
          <AccordionItem
            value={item.value}
            key={item.value}
            className=' rounded-xl p-px bg-neutral-300 data-[state=open]:bg-gradient-purple '
          >
            <div className='relative rounded-xl px-4 lg:px-8 py-5 bg-neutral-50 overflow-hidden '>
              <div className='absolute inset-y-0 w-[6px] lg:w-2.5 left-0 bg-primary-700' />
              <AccordionTrigger className='text-md font-semibold lg:text-xl data-[state=open]:text-primary-300 cursor-pointer'>
                {item.trigger}
              </AccordionTrigger>
              <AccordionContent className='text-sm lg:text-md'>
                {item.content}
              </AccordionContent>
            </div>
          </AccordionItem>
        ))}
      </Accordion>
    </SectionWrapper>
  );
};

export default FaqSection;
