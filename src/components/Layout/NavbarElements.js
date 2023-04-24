import styled, { keyframes } from 'styled-components';
import { colors } from '../../constants/colors';
import { Link as LinkRouter } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import { Link as LinkScroll } from 'react-scroll';

export const Nav = styled.nav`
  background: ${colors.navbar_background};
  height: 60px;
  //margin-top: -80px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 10;

  @media screen and (max-width: 960px) {
    transition: 0.8s all ease;
  }
`;

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 60px;
  z-index: 1;
  width: 100%;
  padding: 0 24px;
  max-width: 1100px;
`;

export const NavLogo = styled(NavLink)`
  color: #fff;
  justify-self: flex-start;
  cursor: pointer;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  margin-left: 0px;
  font-weight: bold;
  text-decoration: none;
  color: ${colors.background};
`;

export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: -0.5rem;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
    color: ${colors.background};
  }
`;

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  margin-right: 28px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavItem = styled.li`
  height: 20px;
`;

const border_appear = keyframes`
  0% {
    border-bottom: 0px solid ${colors.buttons};
  }
  100% {
    border-bottom: 2px solid ${colors.buttons};
  } 
  `;

const border_disappear = keyframes`
  0% {
    border-bottom: 2px solid ${colors.buttons};
  }
  100% {
    border-bottom: 0px solid ${colors.buttons};
  } 
  `;

export const NavLinks = styled(NavLink)`
  color: ${colors.background};
  display: flex;
  align-items: flex;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  transition: 0.5s;

  &:hover {
    color: ${colors.buttons};
    transition: 0.3s ease-in-out;
  }

  /* &:active {
    border-bottom: 5px solid ${colors.buttons};
  }

  &:active:after {
    border-bottom: 0px solid ${colors.buttons};
  } */

  &:active {
    animation: ${border_appear} 100ms ease-in;
    animation: ${border_disappear} 500ms ease-out;
  }
`;

export const NavButton = styled.nav`
  display: flex;
  align-items: center;
  margin-right: 15px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavButtonLink = styled(LinkRouter)`
  border-radius: 30px;
  background: ${colors.buttons};
  white-space: nowrap;
  padding: 7px 18px;
  color: #010606;
  font-size: 16px;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: ${colors.background};
    color: ${colors.navbar_background};
  }
`;
