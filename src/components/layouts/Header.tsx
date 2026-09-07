import Logo from '../shared/Logo';
import { useEffect, useState } from 'react';
import { cn } from 'cn';
import MobileNav from '../shared/MobileNav';
import { navData } from '@/data/01-navData';
import { Button } from '../ui/button';

const Header = () => {
  const [isScroll, setIsScroll] = useState(false);
  const [isOverHero, setIsOverHero] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScroll(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);

    const heroElement = document.getElementById('home');

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => setIsOverHero(!entry.isIntersecting));
      },
      {
        threshold: 0.1,
      }
    );

    if (heroElement) {
      observer.observe(heroElement);
    }

    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, []);
  const navLinks = navData.navItems;
  const ctaButton = navData.ctaButton;
  const Icon = ctaButton.icon;
  return (
    <header
      className={cn(
        'fixed w-full max-w-360 mx-auto z-50',
        isScroll && 'backdrop-blur-2xl',
        isOverHero ? 'text-neutral-950' : 'text-neutral-25'
      )}
    >
      <nav className='px-4 sm:px-10 lg:px-15 xl:px-30 h-21.5 flex justify-between items-center'>
        <Logo />
        <MobileNav />
        <nav className='hidden lg:flex w-full max-w-136'>
          <ul className='flex justify-between w-full'>
            {navLinks.map((link) => (
              <li key={link.id} className='hover:underline'>
                <a href={link.href}>{link.label}</a>
              </li>
            ))}
          </ul>
        </nav>
        <Button asChild className='hidden lg:flex w-full max-w-43'>
          <a href={ctaButton.href} className='gap-2 items-center'>
            <Icon /> <span>Hire Me</span>
          </a>
        </Button>
      </nav>
    </header>
  );
};

export default Header;
