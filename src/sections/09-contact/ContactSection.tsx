import SectionWrapper from '@/components/layouts/SectionWrapper';
import SectionTitle from '@/components/shared/SectionTitle';
import { contactData } from '@/data/11-contactData';
import ContactForm from './components/ContactForm';
import contactSubtract from '@/assets/images/background/contactSubtract.png';
import contactDecoration from '@/assets/images/background/contactDecoration.png';

const ContactSection = () => {
  const header = contactData.header;
  return (
    <SectionWrapper sectionId='contact' className='relative'>
      <div className='absolute inset-x-0 -z-1 bottom-0'>
        <img src={contactSubtract} alt='subtract' />
      </div>
      <div className='absolute inset-0 -z-2'>
        <img
          src={contactDecoration}
          alt='decoration'
          className='size-full object-cover'
        />
      </div>
      <SectionTitle title={header.title} badgeText={header.badge} />
      <ContactForm />
    </SectionWrapper>
  );
};

export default ContactSection;
