import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Content } from './styles';
import { FaTimes, FaHome, FaChartBar, FaEnvelope, FaRegSun, FaUserAlt, FaIdCardAlt, FaRegFileAlt, FaRegCalendarAlt } from 'react-icons/fa';
import SidebarItem from '../sidebarItem';

const Sidebar = ({ active, onClose }) => { // Accept closeSidebar prop

  return (
    <Container sidebar={active}>
      <FaTimes onClick={onClose} />
      <Content>
        <SidebarItem Icon={FaHome} Text="Home" path="/" />
        <SidebarItem Icon={FaChartBar} Text="Statistics" path="/statistics" />
        <Link to="/pessoa-fisica">
          <SidebarItem Icon={FaUserAlt} Text="Pessoa Física" />
        </Link>
        <Link to="/servico-social">
          <SidebarItem Icon={FaUserAlt} Text="Serviço Social" />
        </Link>
        <SidebarItem Icon={FaEnvelope} Text="Mail" path="/mail" />
        <SidebarItem Icon={FaRegCalendarAlt} Text="Calendar" path="/calendar" />
        <SidebarItem Icon={FaIdCardAlt} Text="Employees" path="/employees" />
        <SidebarItem Icon={FaRegFileAlt} Text="Reports" path="/reports" />
        <SidebarItem Icon={FaRegSun} Text="Settings" path="/settings" />
      </Content>
    </Container>
  );
};

export default Sidebar;
