import styled from 'styled-components';
import { FaTimes } from 'react-icons/fa';
import { colors } from '../../constants/colors';
import { Link as LinkRouter } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import { Link as LinkScroll } from 'react-scroll';

export const SidebarContainer = styled.div`
  position: fixed;
  z-index: 999;
  width: 100%;
  height: 100%;
  background: ${colors.navbar_background};
  display: grid;
  align-items: center;
  top: 0;
  left: 0;
  transition: 0.3s ease-in-out;
  opacity: ${({ isOpen }) => (isOpen ? '100%' : '0')};
  top: ${({ isOpen }) => (isOpen ? '0' : '-100%')};
`;

export const CloseIcon = styled(FaTimes)`
  color: ${colors.background};
`;

export const IconContainer = styled.div`
  position: absolute;
  top: 1.2rem;
  right: 1.5rem;
  background: transparent;
  font-size: 2rem;
  cursor: pointer;
  outline: none;
`;

export const SidebarWrapper = styled.div`
  color: ${colors.background};
`;

export const SidebarMenu = styled.ul`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(4, 70px);
  margin-left: -2.4rem;
  text-align: center;

  @media screen and (max-width: 480px) {
    grid-template-rows: repeat(4, 60px);
  }

  @media screen and (max-height: 480px) {
    grid-template-rows: repeat(4, 40px);
  }
`;

export const SidebarLink = styled(NavLink)`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  text-decoration: none;
  list-style: none;
  transition: 0.2s ease-in-out;
  text-decoration: none;
  color: ${colors.background};
  cursor: pointer;

  &:hover {
    color: ${colors.buttons};
    transition: 0.2s ease-in-out;
  }
`;

export const SidebarButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const SidebarRoute = styled(LinkRouter)`
  border-radius: 50px;
  background: ${colors.buttons};
  white-space: nowrap;
  padding: 16px 30px;
  color: #010606;
  font-size: 20px;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  &:hover {
    background: ${colors.background};
    color: ${colors.navbar_background};
    transition: all 0.2s ease-in-out;
  }
`;
