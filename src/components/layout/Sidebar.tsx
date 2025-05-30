import React from 'react';
import SidebarNav from '../Dashboard/SidebarNav';

// This component wraps SidebarNav. 
// The SidebarNav component (from context code) is already styled with fixed positioning,
// specific width (w-64), and background colors as per the layout requirements.
// Therefore, this Sidebar component primarily serves as a structural element within the layout system.
const Sidebar: React.FC = () => {
  return <SidebarNav />;
};

export default Sidebar;
