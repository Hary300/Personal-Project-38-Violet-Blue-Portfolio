import type { SkillItem } from '@/data/04-skillData';

interface CircularSkillProgressProps {
  skill: SkillItem;
}
const CircularSkillProgress = ({ skill }: CircularSkillProgressProps) => {
  const radius = 40;
  const gradientId = `gradient-${skill.id}`;
  return (
    <div className='size-25 lg:size-30 shrink-0 relative flex justify-center items-center'>
      <span>{skill.percentage}%</span>
      <svg viewBox='0 0 100 100' className='absolute inset-0 w-full h-full '>
        <defs>
          <linearGradient id={gradientId} x1='0%' y1='50%' x2='100%' y2='0%'>
            <stop offset='0%' stopColor='#9747ff' />
            <stop offset='35%' stopColor='#9747ff' />
            <stop offset='100%' stopColor='#6958ff' />
          </linearGradient>
        </defs>
        <circle
          cx='50'
          cy='50'
          r={radius}
          fill='none'
          stroke='currentColor'
          strokeWidth='8'
          className='text-neutral-300'
        />
        <circle
          cx='50'
          cy='50'
          r={radius}
          fill='none'
          // stroke='url(#gradient-purple)'
          // stroke='#000000'
          stroke={`url(#${gradientId})`}
          // stroke='#9747ff'
          strokeWidth='8'
          strokeDasharray={2 * Math.PI * radius}
          strokeDashoffset={(1 - skill.percentage / 100) * 2 * Math.PI * radius}
          strokeLinecap='round'
        />
      </svg>
    </div>
  );
};

export default CircularSkillProgress;
