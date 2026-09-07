import successEnvelope from '@/assets/images/modal/successEnvelope.png';
import errorEnvelope from '@/assets/images/modal/errorEnvelope.png';
export type ModalStatus = 'success' | 'error';

export interface ModalContent {
  status: ModalStatus;
  title: string;
  message: string;
  buttonText: string;
  icon: string;
}

export type ModalData = Record<ModalStatus, ModalContent>;

export const modalData: ModalData = {
  success: {
    status: 'success',
    title: 'Message Sent Successfully!',
    message:
      "Thank you for reaching out. I'll get back to you as soon as possible",
    buttonText: 'Back to Home',
    icon: successEnvelope,
  },
  error: {
    status: 'error',
    title: 'Oops! Something went wrong.',
    message:
      "We couldn't send your message. Please try again later or contact us directly.",
    buttonText: 'Try Again',
    icon: errorEnvelope,
  },
};
