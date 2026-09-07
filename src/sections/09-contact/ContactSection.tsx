import SectionWrapper from '@/components/layouts/SectionWrapper';
import SectionTitle from '@/components/shared/SectionTitle';
import { contactData } from '@/data/11-contactData';

const ContactSection = () => {
  const header = contactData.header;
  return (
    <SectionWrapper sectionId='contact'>
      <SectionTitle title={header.title} badgeText={header.badge} />
    </SectionWrapper>
  );
};

export default ContactSection;
