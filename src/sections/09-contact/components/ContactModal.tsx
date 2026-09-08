import { Button } from '@/components/ui/button';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import type { ModalContent } from '@/data/modalData';

interface ContactModalProps {
  isOpen: boolean;
  onOpenChange: (isOpen: boolean) => void;
  modal: ModalContent;
}

const ContactModal = ({ modal, onOpenChange, isOpen }: ContactModalProps) => {
  return (
    <Dialog onOpenChange={onOpenChange} open={isOpen}>
      <DialogContent className='sm:max-w-119.75'>
        <div className='relative flex flex-col gap-6 pt-20 px-6 pb-6 lg:px-8 lg:pb-8 items-center'>
          <div className='absolute left-1/2 -translate-x-1/2 top-[-96px] size-30 lg:size-40'>
            <img src={modal.icon} alt='status icon' />
          </div>
          <div className='flex flex-col gap-2 text-center'>
            <p className='font-semibold text-lg lg:text-xl'>{modal.title}</p>
            <p className='text-sm lg:text-md text-neutral-500'>
              {modal.message}
            </p>
          </div>
          <Button onClick={() => onOpenChange(false)} className='w-full'>
            {modal.buttonText}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ContactModal;
