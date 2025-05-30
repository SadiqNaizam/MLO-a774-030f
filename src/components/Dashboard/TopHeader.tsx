import React from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import {
  Menu as MenuIcon,
  Search,
  Bell,
  Grid as GridIcon, // Renamed to avoid conflict with Grid component name
  Settings,
  User,
  LogOut,
  ChevronDown
} from 'lucide-react';

// Based on image, a simplified country flag icon might be desired.
// Lucide doesn't have country flags. Using Globe as a placeholder.
import { Globe } from 'lucide-react';

interface TopHeaderProps {
  onToggleSidebar?: () => void; // Optional: if sidebar toggle is managed outside
}

const TopHeader: React.FC<TopHeaderProps> = ({ onToggleSidebar }) => {
  return (
    <header className="fixed top-0 left-64 right-0 h-[70px] bg-card text-card-foreground flex items-center justify-between px-6 border-b z-10">
      <div className="flex items-center">
        {/* Hamburger menu to toggle sidebar, visible on smaller screens or if sidebar is collapsible */} 
        <Button variant="ghost" size="icon" onClick={onToggleSidebar} className="mr-4 lg:hidden">
          <MenuIcon className="h-6 w-6" />
        </Button>

        {/* Mega Menu dropdown (example) */} 
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="text-sm font-medium">
              Mega Menu <ChevronDown className="ml-1 h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="start">
            <DropdownMenuItem>Link 1</DropdownMenuItem>
            <DropdownMenuItem>Link 2</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Another Action</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        <Button variant="ghost" className="text-sm font-medium ml-2">
          <Settings className="mr-1 h-4 w-4" /> Settings
        </Button>
        <Button variant="ghost" className="text-sm font-medium ml-2">
          <GridIcon className="mr-1 h-4 w-4" /> Projects
        </Button>
      </div>

      <div className="flex items-center space-x-3">
        <div className="relative w-64 max-w-xs hidden md:block">
          <Input type="search" placeholder="Search..." className="pl-10 h-9" />
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        </div>

        <Button variant="ghost" size="icon">
          <GridIcon className="h-5 w-5 text-muted-foreground" /> 
        </Button>

        <Button variant="ghost" size="icon">
          <Bell className="h-5 w-5 text-muted-foreground" />
        </Button>

        {/* Placeholder for flag icon */} 
        <Button variant="ghost" size="icon">
          <Globe className="h-5 w-5 text-muted-foreground" />
        </Button>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="flex items-center space-x-2">
              <Avatar className="h-8 w-8">
                <AvatarImage src="https://i.pravatar.cc/40?u=alina" alt="Alina Mclourd" />
                <AvatarFallback>AM</AvatarFallback>
              </Avatar>
              <div className="text-left hidden sm:block">
                <p className="text-sm font-medium text-foreground">Alina Mclourd</p>
                <p className="text-xs text-muted-foreground">VP People Manager</p>
              </div>
              <ChevronDown className="h-4 w-4 text-muted-foreground" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-56">
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <User className="mr-2 h-4 w-4" />
              <span>Profile</span>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Settings className="mr-2 h-4 w-4" />
              <span>Settings</span>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <LogOut className="mr-2 h-4 w-4" />
              <span>Log out</span>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        
        {/* Right sidebar toggle, as seen in image */}
        <Button variant="ghost" size="icon">
          <MenuIcon className="h-6 w-6 text-muted-foreground" />
        </Button>
      </div>
    </header>
  );
};

export default TopHeader;
