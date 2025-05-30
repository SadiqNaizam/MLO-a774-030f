import React from 'react';
import { cn } from '@/lib/utils';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import { Settings, MoreVertical, AlignJustify } from 'lucide-react';

interface CircularProgressCardProps {
  className?: string;
}

const CircularProgressCard: React.FC<CircularProgressCardProps> = ({ className }) => {
  const percentage = 75;
  const data = [
    { name: 'Completed', value: percentage, color: 'hsl(var(--accent-green-val))' }, // Green part
    { name: 'Remaining', value: 100 - percentage, color: 'hsl(var(--primary))' }, // Blue part
  ];

  return (
    <Card className={cn('shadow-sm hover:shadow-md transition-shadow', className)}>
      <CardHeader className="flex flex-row items-center justify-between">
        <div>
          <CardTitle className="text-lg font-semibold">Income</CardTitle>
          <CardDescription className="text-sm text-muted-foreground">
            Current income status.
          </CardDescription>
        </div>
        <div className="flex items-center space-x-1">
          <Button variant="ghost" size="icon">
            <Settings className="h-5 w-5 text-muted-foreground" />
          </Button>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon">
                {/* Using AlignJustify as per image for dropdown options, MoreVertical can also be used */} 
                <AlignJustify className="h-5 w-5 text-muted-foreground" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem>View Details</DropdownMenuItem>
              <DropdownMenuItem>Export Data</DropdownMenuItem>
              <DropdownMenuItem>Settings</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </CardHeader>
      <CardContent className="flex flex-col items-center justify-center pt-4 pb-8">
        <div className="relative h-48 w-48 mb-4">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                innerRadius={'70%'}
                outerRadius={'100%'}
                paddingAngle={0}
                dataKey="value"
                startAngle={90}
                endAngle={-270} // Makes it go clockwise from top
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} stroke={entry.color} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <span className="text-xs text-muted-foreground">Percent</span>
            <span className="text-4xl font-bold text-foreground">{percentage}</span>
          </div>
        </div>
        <p className="text-center text-muted-foreground">
          <span className="font-semibold text-foreground">32%</span> Spendings Target
        </p>
      </CardContent>
    </Card>
  );
};

export default CircularProgressCard;
