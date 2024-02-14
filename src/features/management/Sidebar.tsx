import React, { FC, useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { IconContext } from 'react-icons';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { SidebarData } from './SidebarData';
import Submenu from './Submenu';
import styles from './sidebar.module.css';
import { useNavigate } from 'react-router-dom';
import Otsilogo from './Otsilogo.png';

const Nav = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: 5rem;
  background-color: black;
`;

const SidebarNav = styled.div`
  width: 250px;
  height: 100vh;
  background-color: black;
  position: fixed;
  top: 0;
  left:0;
  transition: left 350ms; /* Updated transition property */
`;

const NavIcon = styled(Link)`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: 5rem;
  font-size: 2rem;
  margin-left: 2rem;
`;

const SidebarWrap = styled.div`

`;

const Sidebar: FC = () => {
  const [sidebar, setSidebar] = useState(false);
  const navigate = useNavigate();

  const closeSidebar = () => {
    console.log('closecalled')
    setSidebar(false)
  }
  

  const handleGoBack = () => {
    navigate('/plans');
    closeSidebar(); // Close the sidebar after navigating
  };

  return (
    <IconContext.Provider value={{ color: '#fff' }}>
      <Nav>
      
        <button className={styles.myAcc} onClick={handleGoBack}>
          Go back
        </button>
      </Nav>
      <SidebarNav>
        <SidebarWrap>
        <img src={Otsilogo} className={styles.logo} onClick={() => navigate('')} />
          {SidebarData.map((item, index) => (
            <div>
                <Submenu item={item} key={index}/> 
            </div>
              ))}
        </SidebarWrap>
      </SidebarNav>
    </IconContext.Provider>
    );
};

export default Sidebar;
