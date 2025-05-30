import React from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import {
  LayoutDashboard,
  FileText,
  Users,
  Settings,
  Briefcase,
  BarChart3,
  ChevronDown,
  ChevronUp,
  Grid,
  ListChecks,
  PieChart as PieChartIcon,
  UserCircle
} from 'lucide-react';

interface NavItem {
  id: string;
  label: string;
  icon: React.ElementType;
  href?: string;
  subItems?: NavItem[];
}

const mainNavItems: NavItem[] = [
  {
    id: 'dashboards',
    label: 'Dashboards',
    icon: LayoutDashboard,
    subItems: [
      { id: 'analytics', label: 'Analytics', href: '#' },
      { id: 'commerce', label: 'Commerce', href: '#' },
      { id: 'sales', label: 'Sales', href: '#' },
      { id: 'minimal', label: 'Minimal', href: '#', subItems: [
        { id: 'variation1', label: 'Variation 1', href: '#', /* active in image */ },
        { id: 'variation2', label: 'Variation 2', href: '#' },
      ]},
      { id: 'crm', label: 'CRM', href: '#' },
    ],
  },
  {
    id: 'pages',
    label: 'Pages',
    icon: FileText,
    subItems: [
      { id: 'applications', label: 'Applications', href: '#' },
    ],
  },
  {
    id: 'ui_components',
    label: 'UI COMPONENTS',
    icon: Grid, // Using Grid as a generic icon for UI components section
    subItems: [
      { id: 'elements', label: 'Elements', href: '#' },
      { id: 'components', label: 'Components', href: '#' },
      { id: 'tables', label: 'Tables', href: '#' },
    ],
  },
  {
    id: 'dashboard_widgets',
    label: 'DASHBOARD WIDGETS',
    icon: ListChecks,
    subItems: [
      { id: 'chart_boxes1', label: 'Chart Boxes 1', href: '#' },
      { id: 'chart_boxes2', label: 'Chart Boxes 2', href: '#' },
      { id: 'chart_boxes3', label: 'Chart Boxes 3', href: '#' },
      { id: 'profile_boxes', label: 'Profile Boxes', href: '#' },
    ],
  },
  {
    id: 'forms',
    label: 'FORMS',
    icon: Briefcase,
    subItems: [
      { id: 'elements_forms', label: 'Elements', href: '#' },
      { id: 'widgets_forms', label: 'Widgets', href: '#' },
    ],
  },
  {
    id: 'charts',
    label: 'CHARTS',
    icon: BarChart3,
    subItems: [
      { id: 'chartjs', label: 'ChartJS', href: '#' },
      { id: 'apex_charts', label: 'Apex Charts', href: '#' },
      { id: 'chart_sparklines', label: 'Chart Sparklines', href: '#' },
    ],
  },
];

interface SidebarNavItemProps {
  item: NavItem;
  level?: number;
  activeItem: string;
  onItemClick: (id: string) => void;
  openItems: Record<string, boolean>;
  toggleOpen: (id:string) => void;
}

const SidebarNavItem: React.FC<SidebarNavItemProps> = ({ item, level = 0, activeItem, onItemClick, openItems, toggleOpen }) => {
  const Icon = item.icon;
  const isOpen = openItems[item.id] || false;
  const isActive = activeItem === item.id || (item.subItems?.some(sub => activeItem === sub.id) && level === 0 && !item.href);
  const isSubItemActive = item.href && activeItem === item.id;

  const handleToggle = (e: React.MouseEvent) => {
    if (item.subItems) {
      e.preventDefault();
      toggleOpen(item.id);
    }
    if(item.href) {
      onItemClick(item.id);
    }
  };

  return (
    <li className={cn('mb-1', level > 0 && 'ml-2')}>
      <a
        href={item.href || '#'}
        onClick={handleToggle}
        className={cn(
          'flex items-center justify-between p-2 rounded-md text-sm hover:bg-sidebar-accent hover:text-sidebar-accent-foreground',
          level === 0 ? 'font-medium text-sidebar-foreground' : 'text-sidebar-foreground/80',
          isActive && level === 0 && !item.href && 'bg-sidebar-accent text-sidebar-accent-foreground',
          isSubItemActive && 'bg-primary/10 text-primary dark:bg-primary/20 dark:text-primary',
          item.label === 'Variation 1' && 'bg-primary/10 text-primary dark:bg-primary/20 dark:text-primary', // Specific active state for Variation 1 as per image
          {'pl-4': level === 1, 'pl-8': level === 2}
        )}
      >
        <div className="flex items-center">
          {level === 0 && Icon && <Icon className="w-5 h-5 mr-3 text-sidebar-foreground/70" />}
          <span>{item.label}</span>
        </div>
        {item.subItems && (
          isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />
        )}
      </a>
      {item.subItems && isOpen && (
        <ul className="mt-1">
          {item.subItems.map((subItem) => (
            <SidebarNavItem
              key={subItem.id}
              item={subItem}
              level={level + 1}
              activeItem={activeItem}
              onItemClick={onItemClick}
              openItems={openItems}
              toggleOpen={toggleOpen}
            />
          ))}
        </ul>
      )}
    </li>
  );
};

const SidebarNav: React.FC = () => {
  const [activeItem, setActiveItem] = React.useState<string>('variation1'); // Default to 'Variation 1'
  const [openItems, setOpenItems] = React.useState<Record<string, boolean>>({
    'dashboards': true, // Dashboards open by default
    'minimal': true, // Minimal open by default
  });

  const handleItemClick = (id: string) => {
    setActiveItem(id);
  };

  const toggleOpen = (id: string) => {
    setOpenItems(prev => ({...prev, [id]: !prev[id]}));
  };

  return (
    <aside className="w-64 fixed top-0 left-0 h-screen bg-sidebar text-sidebar-foreground flex flex-col border-r border-sidebar-border">
      <div className="h-[70px] flex items-center px-6 border-b border-sidebar-border">
        <PieChartIcon className="h-8 w-8 text-primary mr-2" /> 
        <h1 className="text-2xl font-bold text-foreground">Architect</h1>
      </div>
      <ScrollArea className="flex-1 px-4 py-4">
        <nav>
          <ul>
            {mainNavItems.map((item) => (
              <React.Fragment key={item.id}>
                {item.id === 'ui_components' || item.id === 'dashboard_widgets' || item.id === 'forms' || item.id === 'charts' ? (
                  <li className="px-2 pt-4 pb-1 text-xs font-semibold uppercase text-muted-foreground tracking-wider">
                    {item.label}
                  </li>
                ) : null}
                 { (item.id === 'ui_components' || item.id === 'dashboard_widgets' || item.id === 'forms' || item.id === 'charts') && item.subItems ? (
                    item.subItems.map(subItem => (
                        <SidebarNavItem
                            key={subItem.id}
                            item={subItem}
                            level={1} // These are treated as top-level for display but nested logically
                            activeItem={activeItem}
                            onItemClick={handleItemClick}
                            openItems={openItems}
                            toggleOpen={toggleOpen}
                        />
                    ))
                 ) : (
                    <SidebarNavItem
                        item={item}
                        activeItem={activeItem}
                        onItemClick={handleItemClick}
                        openItems={openItems}
                        toggleOpen={toggleOpen}
                    />
                 )
                }
              </React.Fragment>
            ))}
          </ul>
        </nav>
      </ScrollArea>
      <div className="p-4 mt-auto border-t border-sidebar-border">
        <Button variant="outline" className="w-full bg-sidebar-accent hover:bg-sidebar-accent/90">
          <Settings className="w-4 h-4 mr-2" />
          Settings
        </Button>
      </div>
    </aside>
  );
};

export default SidebarNav;
