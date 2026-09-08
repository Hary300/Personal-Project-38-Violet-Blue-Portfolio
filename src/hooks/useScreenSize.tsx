import { useEffect, useState } from 'react';

interface UseScreenSizeProps {
  screenSize: 'desktop' | 'tablet';
}

const useScreenSize = ({ screenSize }: UseScreenSizeProps) => {
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const size = screenSize === 'desktop' ? 768 : 640;
      setIsDesktop(window.innerWidth > size);
    };

    handleResize();

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [screenSize]);

  return isDesktop;
};

export default useScreenSize;
