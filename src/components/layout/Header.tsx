import React from 'react';
import TopHeader from '../Dashboard/TopHeader';

interface HeaderProps {
  onToggleSidebar?: () => void;
}

// This component wraps TopHeader.
// The TopHeader component (from context code) is styled with fixed positioning,
// specific height (h-[70px]), background, and left offset (left-64) to align with the sidebar.
// This Header component passes through the onToggleSidebar prop, which TopHeader might use
// for functionalities like a mobile navigation toggle.
const Header: React.FC<HeaderProps> = ({ onToggleSidebar }) => {
  return <TopHeader onToggleSidebar={onToggleSidebar} />;
};

export default Header;
