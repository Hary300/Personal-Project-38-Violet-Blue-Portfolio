export interface FooterData {
  logo: {
    text: string;
    icon: string;
  };
  tagline: string;
}

export const footerData: FooterData = {
  logo: {
    text: 'Your Logo',
    icon: '/assets/icons/logo.svg',
  },
  tagline:
    'Front-End Developer with a passion for clean code and intuitive design. Turning ideas into functional beauty',
};
