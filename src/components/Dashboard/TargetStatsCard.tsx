import React from 'react';
import { cn } from '@/lib/utils';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Button } from '@/components/ui/button';
import { Settings } from 'lucide-react';

interface TargetItem {
  id: string;
  label: string;
  value: number;
  targetLabel: string;
  progressColor: string; // Tailwind class for progress bar e.g., 'bg-primary'
  textColor: string; // Tailwind class for text e.g., 'text-primary'
  mainValue?: string;
  mainValueChange?: string;
  mainValueChangeColor?: string;
}

const targetData: TargetItem[] = [
  {
    id: 'income',
    label: 'Income',
    value: 71,
    targetLabel: 'Income Target',
    progressColor: 'bg-accentRed', // Based on image: Income target is red
    textColor: 'text-accentRed',
    mainValue: '$ 5,456',
    mainValueChange: '+14%',
    mainValueChangeColor: 'text-accentGreen',
  },
  {
    id: 'expenses',
    label: 'Expenses',
    value: 54,
    targetLabel: 'Expenses Target',
    progressColor: 'bg-accentGreen', // Based on image: Expenses target is green
    textColor: 'text-accentGreen',
    mainValue: '$ 4,764',
    mainValueChange: '- 8%', // Image shows up arrow, but logic dictates expenses going down could be good, or red if over budget. Using red for % value as per image for simplicity
    mainValueChangeColor: 'text-accentRed',
  },
  {
    id: 'spendings',
    label: 'Spendings',
    value: 32,
    targetLabel: 'Spendings Target',
    progressColor: 'bg-accentYellow', // Based on image: Spendings target is yellow
    textColor: 'text-accentYellow',
    mainValue: '$ 1.5M',
    mainValueChange: '- 15%',
    mainValueChangeColor: 'text-accentGreen', // Assuming green for reduction in spending is good
  },
  {
    id: 'totals',
    label: 'Totals',
    value: 89,
    targetLabel: 'Totals Target',
    progressColor: 'bg-primary', // Based on image: Totals target is blue
    textColor: 'text-primary',
    mainValue: '$ 31,564',
    mainValueChange: '+76%',
    mainValueChangeColor: 'text-accentGreen',
  },
];

interface TargetStatsCardProps {
  className?: string;
}

const TargetStatsCard: React.FC<TargetStatsCardProps> = ({ className }) => {
  return (
    <Card className={cn('shadow-sm hover:shadow-md transition-shadow relative', className)}>
      <CardHeader>
        <div className="flex items-center justify-between">
            <div>
                <CardTitle className="text-lg font-semibold">Target Section</CardTitle>
                <CardDescription className="text-sm text-muted-foreground">Overview of key financial targets.</CardDescription>
            </div>
            <Button variant="link" className="text-primary text-sm">
                View Details
            </Button>
        </div>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-8 mb-6">
          {targetData.map((item) => (
            <div key={item.id}>
              <div className="flex justify-between items-baseline mb-1">
                <span className="text-sm font-medium text-muted-foreground">{item.label}</span>
                {item.mainValueChange && (
                  <span className={cn("text-xs font-semibold", item.mainValueChangeColor)}>{item.mainValueChange}</span>
                )}
              </div>
              <p className="text-2xl font-bold text-foreground mb-3">{item.mainValue}</p>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-4">
          {targetData.map((item) => (
            <div key={`${item.id}-progress`}>
              <div className="flex justify-between items-baseline mb-1">
                <span className={cn("text-lg font-semibold", item.textColor)}>{item.value}%</span>
              </div>
              <Progress value={item.value} className="h-2 [&>div]:bg-transparent" indicatorClassName={item.progressColor} />
              <p className="text-xs text-muted-foreground mt-1">{item.targetLabel}</p>
            </div>
          ))}
        </div>
        <Button variant="default" size="icon" className="absolute bottom-4 right-4 rounded-full h-10 w-10 bg-accentYellow hover:bg-accentYellow/90 shadow-lg">
            <Settings className="h-5 w-5 text-white"/>
        </Button>
      </CardContent>
    </Card>
  );
};

export default TargetStatsCard;
