import React from 'react';
import Sidebar from './Sidebar';
import Header from './Header';
import { cn } from '@/lib/utils';

interface MainAppLayoutProps {
  children: React.ReactNode;
  className?: string;
}

const MainAppLayout: React.FC<MainAppLayoutProps> = ({ children, className }) => {
  // Placeholder for sidebar toggle logic. 
  // The current project context implies a fixed-width desktop sidebar (w-64).
  // The onToggleSidebar prop is passed to the Header, where TopHeader.tsx uses it 
  // for a hamburger menu typically shown on smaller screens (lg:hidden).
  // If the desktop layout required a collapsible sidebar, state management (e.g., useState)
  // would be added here to dynamically adjust main content and header margins.
  const handleToggleSidebar = () => {
    console.log('Sidebar toggle action triggered. Implement behavior if sidebar state changes affect desktop layout.');
  };

  return (
    <div className={cn('min-h-screen bg-background', className)}>
      <Sidebar />
      <Header onToggleSidebar={handleToggleSidebar} />
      
      {/* 
        Main content area configuration based on Layout Requirements:
        - Sidebar: fixed w-64 (results in `ml-64` for main content).
        - Header: fixed h-[70px] (results in `mt-[70px]` for main content).
        - `mainContent.layout`: "p-6 mt-[70px]" (p-6 for padding, mt-[70px] already handled by main's margin).
        - `mainContent.container`: "grid gap-6" (applied to an inner div wrapping children).
        - `overall.sizing.mainContent`: "min-w-0 overflow-y-auto".
      */}
      <main
        className={cn(
          'ml-64',      // Offset for the fixed w-64 sidebar.
          'mt-[70px]',  // Offset for the fixed h-[70px] header.
          'p-6',        // Padding for the content area itself.
          'min-w-0',    // From overall.sizing.mainContent: Prevents content from breaking layout in flex/grid scenarios.
          'overflow-y-auto' // From overall.sizing.mainContent: Allows vertical scrolling for content that exceeds viewport height.
          // bg-background is inherited from the root div or body, so not strictly needed here unless overriding.
        )}
        // Ensures the main area can fill the vertical space remaining after the fixed header.
        // Useful for layouts where content might be short but the area should still occupy available space.
        style={{ minHeight: 'calc(100vh - 70px)' }} 
      >
        {/* This inner div acts as the direct container for page content, styled as a grid. */}
        <div className="grid gap-6">
          {children}
        </div>
      </main>
    </div>
  );
};

export default MainAppLayout;
