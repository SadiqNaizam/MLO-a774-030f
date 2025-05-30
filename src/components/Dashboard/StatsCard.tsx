import React from 'react';
import { cn } from '@/lib/utils';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { LucideProps } from 'lucide-react';

export interface StatsCardProps {
  title: string;
  value: string;
  icon?: React.ElementType<LucideProps>;
  iconColor?: string;
  badgeValue: string;
  badgeColor: string; // Tailwind classes for border, bg, text, e.g. 'border-primary bg-primary/10 text-primary'
  valuePrefix?: string;
  className?: string;
}

const StatsCard: React.FC<StatsCardProps> = ({
  title,
  value,
  icon: Icon,
  iconColor = 'text-foreground',
  badgeValue,
  badgeColor,
  valuePrefix = '',
  className,
}) => {
  return (
    <Card className={cn('shadow-sm hover:shadow-md transition-shadow', className)}>
      <CardHeader className="pb-2">
        <CardTitle className="text-sm font-medium text-muted-foreground tracking-wider">
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent className="flex items-center justify-between">
        <div className="flex items-center">
          {Icon && <Icon className={cn('h-6 w-6 mr-2', iconColor)} />}
          <span className={cn('text-3xl font-bold', iconColor)}> {valuePrefix}{value}</span>
        </div>
        <div
          className={cn(
            'flex items-center justify-center h-10 w-10 rounded-full border-2 text-sm font-semibold',
            badgeColor
          )}
        >
          {badgeValue}
        </div>
      </CardContent>
    </Card>
  );
};

export default StatsCard;
