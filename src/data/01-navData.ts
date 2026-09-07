import type { IconType } from 'react-icons';
import logo from '@/assets/images/logo.svg';
import { HiOutlineMail } from 'react-icons/hi';

export type Href =
  | '#home'
  | '#about'
  | '#skill'
  | '#projects'
  | '#faq'
  | '#contact';

export interface NavItem {
  id: string;
  label: string;
  href: Href;
}

export interface CtaButton {
  label: string;
  href: '#contact';
  icon: IconType;
}

export interface NavbarLogo {
  text: string;
  imageSrc: string;
  href: '#home';
}

export interface NavData {
  logo: NavbarLogo;
  navItems: NavItem[];
  ctaButton: CtaButton;
}

export const navData: NavData = {
  logo: {
    text: 'Your Logo',
    imageSrc: logo,
    href: '#home',
  },
  navItems: [
    { id: 'home', label: 'Home', href: '#home' },
    { id: 'about', label: 'About', href: '#about' },
    { id: 'skill', label: 'Skill', href: '#skill' },
    { id: 'projects', label: 'Projects', href: '#projects' },
    { id: 'faq', label: 'FAQ', href: '#faq' },
    { id: 'contact', label: 'Contact', href: '#contact' },
  ],
  ctaButton: {
    label: 'Hire Me',
    href: '#contact',
    icon: HiOutlineMail,
  },
};
