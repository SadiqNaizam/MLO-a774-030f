import React from 'react';
import MainAppLayout from '../components/layout/MainAppLayout';
import PageHeader from '../components/Dashboard/PageHeader';
import StatsCardGrid from '../components/Dashboard/StatsCardGrid';
import BarChartCard from '../components/Dashboard/BarChartCard';
import CircularProgressCard from '../components/Dashboard/CircularProgressCard';
import TargetStatsCard from '../components/Dashboard/TargetStatsCard';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Info } from 'lucide-react';

const DashboardOverviewPage: React.FC = () => {
  // Breadcrumbs data for the PageHeader
  // Using 'as const' for stricter typing, ensuring labels and hrefs are treated as literals.
  const breadcrumbs = [
    { label: 'Dashboards', href: '#' },
    { label: 'Minimal Dashboard Example' },
  ] as const;

  return (
    <MainAppLayout>
      {/* Page Title and Breadcrumbs */}
      <PageHeader title="Minimal Dashboard" breadcrumbs={breadcrumbs} />

      {/* Informational Alert Message */}
      {/* Styling based on the blue alert box seen in the provided image. */}
      {/* Shadcn's Alert component handles icon positioning and spacing. */}
      {/* The parent grid in MainAppLayout provides gap between elements, so no explicit margins needed here. */}
      <Alert className="bg-blue-50 border-blue-200 text-blue-700 dark:bg-blue-900/30 dark:border-blue-700 dark:text-blue-300">
        <Info className="h-4 w-4" /> {/* Icon should inherit text color from Alert's text-blue-700 */}
        <AlertDescription>
          This dashboard example was created using only the available elements and components, no additional SCSS was written!
        </AlertDescription>
      </Alert>

      {/* Grid of Statistical Cards */}
      <StatsCardGrid />

      {/* Section for Charts: Arranged in a responsive grid. */}
      {/* On large screens (lg), BarChartCard takes 2/3 width, CircularProgressCard takes 1/3. */}
      {/* On smaller screens, they stack vertically. */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <BarChartCard />
        </div>
        <div className="lg:col-span-1">
          <CircularProgressCard />
        </div>
      </div>

      {/* Card for Target Statistics */}
      <TargetStatsCard />
    </MainAppLayout>
  );
};

export default DashboardOverviewPage;
