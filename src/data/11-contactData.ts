import type { SectionHeader } from '@/types/sectionHeader';
import type { IconType } from 'react-icons';
import { FiSend } from 'react-icons/fi';

export type FieldName = 'name' | 'email' | 'message';
export type FieldLabel = 'Name' | 'Email' | 'Message';
export type FieldType = 'text' | 'email' | 'textarea';

export interface FormField {
  id: string;
  label: FieldLabel;
  name: FieldName;
  type: FieldType;
  placeholder: string;
}

export interface ContactData {
  header: SectionHeader;
  formFields: FormField[];
  buttonText: string;
  buttonIcon: IconType;
}

export const contactData: ContactData = {
  header: {
    badge: 'CONTACT',
    title: 'Get in Touch',
  },
  formFields: [
    {
      id: 'name',
      label: 'Name',
      name: 'name',
      type: 'text',
      placeholder: 'Your Name',
    },
    {
      id: 'email',
      label: 'Email',
      name: 'email',
      type: 'email',
      placeholder: 'Your Email Address',
    },
    {
      id: 'message',
      label: 'Message',
      name: 'message',
      type: 'textarea',
      placeholder: 'Your Message',
    },
  ],
  buttonText: 'Submit',
  buttonIcon: FiSend,
};
