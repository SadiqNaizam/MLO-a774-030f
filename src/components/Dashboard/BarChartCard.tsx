import React from 'react';
import { cn } from '@/lib/utils';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, Line, ComposedChart } from 'recharts';
import { Settings, MoreVertical, Filter } from 'lucide-react';

const chartData = [
  { name: 'Jan 01', websiteBlog: 400, socialMedia: 240 },
  { name: 'Jan 02', websiteBlog: 500, socialMedia: 139 },
  { name: 'Jan 03', websiteBlog: 420, socialMedia: 680 },
  { name: 'Jan 04', websiteBlog: 220, socialMedia: 390 },
  { name: 'Jan 05', websiteBlog: 650, socialMedia: 480 },
  { name: 'Jan 06', websiteBlog: 400, socialMedia: 380 },
  { name: 'Jan 07', websiteBlog: 150, socialMedia: 430 },
  { name: 'Jan 08', websiteBlog: 380, socialMedia: 200 },
  { name: 'Jan 09', websiteBlog: 750, socialMedia: 510 },
  { name: 'Jan 10', websiteBlog: 480, socialMedia: 230 },
  { name: 'Jan 11', websiteBlog: 200, socialMedia: 150 },
  { name: 'Jan 12', websiteBlog: 320, socialMedia: 180 },
];

interface BarChartCardProps {
  className?: string;
}

const BarChartCard: React.FC<BarChartCardProps> = ({ className }) => {
  const [activeFilter, setActiveFilter] = React.useState<'monthly' | 'weekly' | 'daily'>('monthly');

  return (
    <Card className={cn('shadow-sm hover:shadow-md transition-shadow', className)}>
      <CardHeader className="flex flex-row items-center justify-between">
        <div>
          <CardTitle className="text-lg font-semibold">Traffic Sources</CardTitle>
          <CardDescription className="text-sm text-muted-foreground">
            Overview of website and social media traffic.
          </CardDescription>
        </div>
        <div className="flex items-center space-x-2">
          <Button variant="default" size="sm" className="bg-accentYellow hover:bg-accentYellow/90 text-white px-3 py-1 h-auto">
            Actions
          </Button>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon">
                <MoreVertical className="h-5 w-5" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem onSelect={() => setActiveFilter('daily')}>Daily</DropdownMenuItem>
              <DropdownMenuItem onSelect={() => setActiveFilter('weekly')}>Weekly</DropdownMenuItem>
              <DropdownMenuItem onSelect={() => setActiveFilter('monthly')}>Monthly</DropdownMenuItem>
              <DropdownMenuItem>
                <Filter className="mr-2 h-4 w-4" />
                Custom Filter
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Settings className="mr-2 h-4 w-4" />
                Chart Settings
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </CardHeader>
      <CardContent>
        <div className="h-[350px]">
          <ResponsiveContainer width="100%" height="100%">
            <ComposedChart data={chartData} margin={{ top: 5, right: 20, left: -20, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
              <XAxis 
                dataKey="name" 
                tickLine={false} 
                axisLine={false} 
                tick={{ fill: 'hsl(var(--muted-foreground))', fontSize: 12 }}
              />
              <YAxis 
                yAxisId="left" 
                orientation="left" 
                stroke="hsl(var(--muted-foreground))" 
                tickLine={false} 
                axisLine={false}
                tick={{ fill: 'hsl(var(--muted-foreground))', fontSize: 12 }}
              />
              <YAxis 
                yAxisId="right" 
                orientation="right" 
                stroke="hsl(var(--muted-foreground))" 
                tickLine={false} 
                axisLine={false}
                tick={{ fill: 'hsl(var(--muted-foreground))', fontSize: 12 }}
              />
              <Tooltip
                contentStyle={{ 
                  backgroundColor: 'hsl(var(--card))',
                  borderColor: 'hsl(var(--border))',
                  borderRadius: 'var(--radius)',
                }}
                labelStyle={{ color: 'hsl(var(--foreground))' }}
              />
              <Legend 
                iconSize={10}
                wrapperStyle={{ paddingTop: '20px' }}
                formatter={(value) => <span className="text-muted-foreground text-xs capitalize">{value.replace(/([A-Z])/g, ' $1').trim()}</span>}
              />
              <Bar yAxisId="left" dataKey="websiteBlog" fill="hsl(var(--primary))" barSize={20} radius={[4, 4, 0, 0]} />
              <Line yAxisId="right" type="monotone" dataKey="socialMedia" stroke="hsl(var(--accent-green-val))" strokeWidth={2} dot={{ r: 4, fill: 'hsl(var(--accent-green-val))' }} activeDot={{ r: 6 }} />
            </ComposedChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
};

export default BarChartCard;
