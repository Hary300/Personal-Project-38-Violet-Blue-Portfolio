import { contactSchema, type ContactSchema } from '@/schema/contactSchema';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { LuSend } from 'react-icons/lu';
import { modalData, type ModalStatus } from '@/data/modalData';
import ContactModal from './ContactModal';
import InputField from './InputField';
import { contactData } from '@/data/11-contactData';

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactSchema>({
    defaultValues: {
      name: '',
      email: '',
      message: '',
    },
    resolver: zodResolver(contactSchema),
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const onSubmit = async (data: ContactSchema) => {
    try {
      setIsSubmitting(true);
      await new Promise((resolve) => setTimeout(resolve, 3000));
      setIsSuccess(true);
      console.log(data);
      reset();
    } catch (error) {
      setIsSuccess(false);
      console.log(error);
    } finally {
      setIsOpen(true);
      setIsSubmitting(false);
    }
  };

  const fields = contactData.formFields;

  const key: ModalStatus = isSuccess ? 'success' : 'error';
  const modal = modalData[key];
  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className='flex flex-col gap-4 p-4 lg:p-8 rounded-xl lg:rounded-2xl bg-neutral-25 max-w-150 mx-auto w-full shadow-card'
      >
        {fields.map((field) => {
          const errorMessage = errors[field.name]?.message;
          return (
            <InputField
              key={field.id}
              type={field.type}
              register={register}
              label={field.label}
              name={field.name}
              errorMessage={errorMessage}
            />
          );
        })}

        <Button
          disabled={isSubmitting}
          type='submit'
          className='w-full flex gap-2 items-center'
        >
          <LuSend /> <span>{isSubmitting ? 'Submitting...' : 'Submit'}</span>
        </Button>
      </form>
      <ContactModal
        isOpen={isOpen}
        modal={modal}
        onOpenChange={(isOpen) => setIsOpen(isOpen)}
      />
    </>
  );
};

export default ContactForm;
