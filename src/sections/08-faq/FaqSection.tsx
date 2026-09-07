import SectionWrapper from '@/components/layouts/SectionWrapper';
import SectionTitle from '@/components/shared/SectionTitle';
import { faqData } from '@/data/10-faqData';

const FaqSection = () => {
  const header = faqData.header;
  return (
    <SectionWrapper sectionId='faq'>
      <SectionTitle title={header.title} badgeText={header.badge} />
    </SectionWrapper>
  );
};

export default FaqSection;
