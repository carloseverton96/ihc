import React from 'react'
import { Link } from 'react-router-dom'; // Import Link component

import { Container, Content } from './styles'
import { 
  FaTimes, 
  FaHome, 
  FaEnvelope, 
  FaRegSun, 
  FaUserAlt, 
  FaIdCardAlt, 
  FaRegFileAlt,
  FaRegCalendarAlt,
  FaChartBar
} from 'react-icons/fa'

import SidebarItem from '../sidebarItem'

const Sidebar = ({ active }) => {

  const closeSidebar = () => {
    active(false)
  }

  
  return (
    <Container sidebar={active}>
      <FaTimes onClick={closeSidebar} /> 
      <Content>
        <SidebarItem Icon={FaHome} Text="Home" path="/" />
        <SidebarItem Icon={FaChartBar} Text="Statistics" path="/statistics" />
        <SidebarItem Icon={FaUserAlt} Text="Users" path="/users" />
        <SidebarItem Icon={FaEnvelope} Text="Mail" path="/mail" />
        <SidebarItem Icon={FaRegCalendarAlt} Text="Calendar" path="/calendar" />
        <SidebarItem Icon={FaIdCardAlt} Text="Employees" path="/employees" />
        <SidebarItem Icon={FaRegFileAlt} Text="Reports" path="/reports" />
        <SidebarItem Icon={FaRegSun} Text="Settings" path="/settings" />
        <Link to="/pessoa-fisica"> 
          <SidebarItem Icon={FaUserAlt} Text="Pessoa Física"  /> 
        </Link>
      </Content>
    </Container>
  )
}

export default Sidebar