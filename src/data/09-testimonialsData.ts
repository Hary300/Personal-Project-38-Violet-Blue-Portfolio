import type { SectionHeader } from '@/types/sectionHeader';
import adobe from '@/assets/images/testimonials/adobe.svg';
import airbnb from '@/assets/images/testimonials/airbnb.svg';
import figma from '@/assets/images/testimonials/figma.svg';
import loom from '@/assets/images/testimonials/loom.svg';
import slack from '@/assets/images/testimonials/slack.svg';
import spotify from '@/assets/images/testimonials/spotify.svg';

export interface TestimonialItem {
  id: string;
  companyName: string;
  companyLogo: string;
  quote: string;
  authorName: string;
  authorRole: string;
  avatar: string;
}

export interface TestimonialsData {
  header: SectionHeader;
  testimonials: TestimonialItem[];
}

export const testimonialsData: TestimonialsData = {
  header: {
    badge: 'TESTIMONIALS',
    title: 'What Our Clients Say',
  },
  testimonials: [
    {
      id: 'adobe-jack',
      companyName: 'Adobe',
      companyLogo: adobe,
      quote: 'They tailor their solutions to our specific needs and goals.',
      authorName: 'Jack Grealish',
      authorRole: 'CEO Adobe',
      avatar:
        'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80',
    },
    {
      id: 'airbnb-kevin',
      companyName: 'Airbnb',
      companyLogo: airbnb,
      quote:
        'They organized their work and internal management was outstanding.',
      authorName: 'Kevin De Bruyne',
      authorRole: 'Project Manager Air BNB',
      avatar:
        'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80',
    },
    {
      id: 'loom-jeremy',
      companyName: 'Loom',
      companyLogo: loom,
      quote: 'Working with them was a great experience.',
      authorName: 'Jeremy Doku',
      authorRole: 'Senior Developers Loom',
      avatar:
        'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=150&auto=format&fit=crop&q=80',
    },
    {
      id: 'spotify-sarah',
      companyName: 'Spotify',
      companyLogo: spotify,
      quote:
        'The team delivered exceptional code quality and met every deadline effortlessly.',
      authorName: 'Sarah Jenkins',
      authorRole: 'Product Lead Spotify',
      avatar:
        'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80',
    },
    {
      id: 'slack-marcus',
      companyName: 'Slack',
      companyLogo: slack,
      quote:
        'Their attention to detail in UI responsiveness transformed our web application.',
      authorName: 'Marcus Vance',
      authorRole: 'CTO Slack',
      avatar:
        'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=150&auto=format&fit=crop&q=80',
    },
    {
      id: 'figma-elena',
      companyName: 'Figma',
      companyLogo: figma,
      quote:
        'Seamless communication and incredible technical implementation from start to finish.',
      authorName: 'Elena Rostova',
      authorRole: 'Design System Lead Figma',
      avatar:
        'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&auto=format&fit=crop&q=80',
    },
  ],
};
