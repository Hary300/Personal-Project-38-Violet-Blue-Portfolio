interface SectionTitleProps {
  badgeText: string;
  title: string;
}

const SectionTitle = ({ title, badgeText }: SectionTitleProps) => {
  return (
    <div className='flex flex-col gap-3 lg:gap-4 items-center'>
      <p className='text-neutral-700 text-xs lg:text-sm rounded-4xl px-3 py-0.5 border w-fit'>
        {badgeText}
      </p>
      <p className='text-display-md lg:text-display-2xl font-bold'>{title}</p>
    </div>
  );
};

export default SectionTitle;
