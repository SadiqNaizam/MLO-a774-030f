import React from 'react';
import { cn } from '@/lib/utils';
import StatsCard, { StatsCardProps } from './StatsCard';
import { ArrowUp, ArrowDown, DollarSign, Users } from 'lucide-react';

const statsData: StatsCardProps[] = [
  {
    title: 'NEW ACCOUNTS',
    value: '234 %',
    icon: ArrowUp,
    iconColor: 'text-accentGreen',
    badgeValue: '58',
    badgeColor: 'border-primary bg-primary/10 text-primary',
    valuePrefix: '',
  },
  {
    title: 'TOTAL EXPENSES',
    value: '71 %',
    icon: ArrowDown,
    iconColor: 'text-accentRed',
    badgeValue: '62',
    badgeColor: 'border-accentRed bg-accentRed/10 text-accentRed',
    valuePrefix: '',
  },
  {
    title: 'COMPANY VALUE',
    value: '1,45M',
    icon: DollarSign, // Placeholder, image doesn't show a clear icon for value itself
    iconColor: 'text-accentYellow', // Text color of value
    badgeValue: '72',
    badgeColor: 'border-accentYellow bg-accentYellow/10 text-accentYellow',
    valuePrefix: '$ ',
  },
  {
    title: 'NEW EMPLOYEES',
    value: '34 hires',
    icon: Users, // Using Users icon for new employees
    iconColor: 'text-accentGreen',
    badgeValue: '81',
    badgeColor: 'border-accentGreen bg-accentGreen/10 text-accentGreen',
    valuePrefix: '+ ',
  },
];

interface StatsCardGridProps {
  className?: string;
}

const StatsCardGrid: React.FC<StatsCardGridProps> = ({ className }) => {
  return (
    <div className={cn('grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6', className)}>
      {statsData.map((stat, index) => (
        <StatsCard
          key={index}
          title={stat.title}
          value={stat.value}
          icon={stat.icon}
          iconColor={stat.iconColor}
          badgeValue={stat.badgeValue}
          badgeColor={stat.badgeColor}
          valuePrefix={stat.valuePrefix}
        />
      ))}
    </div>
  );
};

export default StatsCardGrid;
