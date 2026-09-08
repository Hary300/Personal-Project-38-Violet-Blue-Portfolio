import { cn } from 'cn';
import type { ReactNode } from 'react';

type SectionId =
  | 'home'
  | 'about'
  | 'skill'
  | 'projects'
  | 'faq'
  | 'contact'
  | (string & {});

interface SectionWrapperProps {
  sectionId: SectionId;
  children: ReactNode;
  className?: string;
  hasGap?: boolean;
  noBigScreenPx?: boolean;
  hasPy?: boolean;
}

const SectionWrapper = ({
  sectionId,
  children,
  className,
  hasGap = true,
  noBigScreenPx = false,
  hasPy = true,
}: SectionWrapperProps) => {
  return (
    <section
      id={sectionId}
      className={cn(
        'px-4 sm:px-10 lg:px-15 xl:px-30',
        hasGap && 'flex flex-col gap-6 lg:gap-12',
        noBigScreenPx && 'sm:px-0 lg:px-0 xl:px-0',
        hasPy && 'py-10 lg:py-20',
        className
      )}
    >
      {children}
    </section>
  );
};

export default SectionWrapper;
