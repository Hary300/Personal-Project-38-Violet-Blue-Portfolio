import { navData } from '@/data/01-navData';
import { Button } from '../ui/button';
import { cn } from 'cn';
import type { ComponentProps } from 'react';

type LogoProps = ComponentProps<typeof Button> & {
  className?: string;
};

const Logo = ({ className, ...props }: LogoProps) => {
  const logoData = navData.logo;
  const Icon = logoData.image;
  return (
    <Button
      asChild
      variant='ghost'
      className={cn(
        'flex items-center gap-2 font-semibold text-xl px-0 rounded-none h-auto',
        className
      )}
      {...props}
    >
      <a href={logoData.href}>
        <Icon className='size-6.5' />
        <span>{logoData.text}</span>
      </a>
    </Button>
  );
};

export default Logo;
