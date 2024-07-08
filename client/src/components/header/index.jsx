import React, { useState, useRef } from 'react';
import { Container } from './styles';
import { FaBars } from 'react-icons/fa';
import Sidebar from '../sidebar';

const Header = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const mainContentRef = useRef(null); // Reference for main content

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <Container>
      <FaBars onClick={toggleSidebar} aria-label="Toggle navigation sidebar" />
      {isSidebarOpen && <Sidebar active={toggleSidebar} onClose={() => setIsSidebarOpen(false)} />}
      <div
        ref={mainContentRef}
        className={`main-content ${isSidebarOpen ? 'sidebar-active' : ''}`}
      >
        {/* Your main app content goes here */}
      </div>
    </Container>
  );
};

export default Header;
