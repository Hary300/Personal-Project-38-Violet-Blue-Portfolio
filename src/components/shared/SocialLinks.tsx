import { socialLinksData } from '@/data/socialLinksData';

const SocialLinks = () => {
  return (
    <div className='flex gap-3 w-full max-w-42 justify-between'>
      {socialLinksData.map((link) => {
        const Icon = link.icon;
        return (
          <a
            href={link.url}
            target='_blank'
            key={link.id}
            className='size-12 lg:size-15 rounded-full shrink-0 bg-neutral-950/50 backdrop-blur-2xl flex justify-center items-center hover:text-neutral-950 hover:bg-neutral-25 transition-all duration-300'
          >
            <Icon className='size-6 lg:size-9 shrink-0' />
          </a>
        );
      })}
    </div>
  );
};

export default SocialLinks;
