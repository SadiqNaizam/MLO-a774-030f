import React from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Home, ChevronRight, CalendarDays, Printer } from 'lucide-react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

interface PageHeaderProps {
  title: string;
  breadcrumbs: Array<{ label: string; href?: string }>;
  className?: string;
}

const PageHeader: React.FC<PageHeaderProps> = ({ title, breadcrumbs, className }) => {
  return (
    <div className={cn("flex flex-col sm:flex-row items-start sm:items-center justify-between mb-6", className)}>
      <div>
        <h2 className="text-2xl font-semibold text-foreground mb-1 sm:mb-0">{title}</h2>
        <nav aria-label="breadcrumb">
          <ol className="flex items-center space-x-1 text-sm text-muted-foreground">
            <li>
              <a href="#" className="hover:text-primary">
                <Home className="h-4 w-4" />
              </a>
            </li>
            {breadcrumbs.map((crumb, index) => (
              <li key={index} className="flex items-center">
                <ChevronRight className="h-4 w-4" />
                {crumb.href ? (
                  <a href={crumb.href} className="ml-1 hover:text-primary">
                    {crumb.label}
                  </a>
                ) : (
                  <span className="ml-1 text-foreground font-medium">{crumb.label}</span>
                )}
              </li>
            ))}
          </ol>
        </nav>
      </div>
      <div className="flex items-center space-x-2 mt-4 sm:mt-0">
        <Select defaultValue="this_month">
          <SelectTrigger className="w-[180px] h-9">
            <CalendarDays className="h-4 w-4 mr-2 text-muted-foreground"/>
            <SelectValue placeholder="Select period" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="today">Today</SelectItem>
            <SelectItem value="this_week">This Week</SelectItem>
            <SelectItem value="this_month">This Month</SelectItem>
            <SelectItem value="this_year">This Year</SelectItem>
          </SelectContent>
        </Select>
        <Button variant="outline" size="icon" className="h-9 w-9">
          <Printer className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
};

export default PageHeader;
