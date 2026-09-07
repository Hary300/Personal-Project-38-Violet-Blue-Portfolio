import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from '@/components/ui/sheet';
import { Dialog as SheetPrimitive } from 'radix-ui';
import { navData } from '@/data/01-navData';
import { HiMenuAlt3 } from 'react-icons/hi';
import { Button } from '../ui/button';
import Logo from './Logo';
import { XIcon } from 'lucide-react';

const MobileNav = () => {
  const navLinks = navData.navItems;
  const ctaButton = navData.ctaButton;
  const Icon = ctaButton.icon;
  return (
    <div className='lg:hidden'>
      <Sheet>
        <SheetTrigger asChild>
          <Button variant='ghost' className='px-0 h-auto'>
            <HiMenuAlt3 className='size-6' />
          </Button>
        </SheetTrigger>
        <SheetContent side='top' className='pb-4 flex-col gap-4'>
          <SheetHeader className='flex items-center justify-between'>
            <SheetPrimitive.Close data-slot='sheet-close' asChild>
              <Logo />
            </SheetPrimitive.Close>
            <SheetPrimitive.Close data-slot='sheet-close' asChild>
              <Button variant='ghost' className=' top-3 right-3' size='icon-sm'>
                <XIcon className='size-6' />
                <span className='sr-only'>Close</span>
              </Button>
            </SheetPrimitive.Close>
          </SheetHeader>

          <div className='flex flex-col gap-4 px-4'>
            <ul className='text-md flex flex-col gap-4 px-4'>
              {navLinks.map((link) => (
                <li key={link.id}>
                  <SheetPrimitive.Close data-slot='sheet-close' asChild>
                    <a href={link.href}>{link.label}</a>
                  </SheetPrimitive.Close>
                </li>
              ))}
            </ul>
            <SheetPrimitive.Close data-slot='sheet-close' asChild>
              <Button asChild>
                <a href={ctaButton.href} className='flex gap-2 items-center'>
                  <Icon /> <span>Hire Me</span>
                </a>
              </Button>
            </SheetPrimitive.Close>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default MobileNav;
