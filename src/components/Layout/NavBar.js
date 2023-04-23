import React from 'react';
import { FaBars } from 'react-icons/fa';
import {
  Nav,
  NavLogo,
  NavbarContainer,
  MobileIcon,
  NavLinks,
  NavItem,
  NavMenu,
  NavButton,
  NavButtonLink,
} from './NavbarElements';

const NavBar = ({ toggleSideBar }) => {
  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavLogo to='/'>UniMGMT</NavLogo>
          <MobileIcon onClick={toggleSideBar}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks to='about'>About</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to='discover'>Discover</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to='services'>Services</NavLinks>
            </NavItem>
          </NavMenu>
          <NavButton>
            <NavButtonLink to='/signin'>Sign in</NavButtonLink>
          </NavButton>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default NavBar;
