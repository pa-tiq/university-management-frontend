import styled, { keyframes } from 'styled-components';
import { colors } from '../../constants/colors';
import { FaTimes } from 'react-icons/fa';

export const DivBackdrop = styled.div`
  opacity: ${({ hide }) => (hide ? '0' : '100%')};
  top: ${({ hide, height }) => (!hide ? '0' : height ? `-${height}` : '-100%')};
  position: absolute;
  width: 100%;
  height: ${({ height }) => (height ? height : '100%')};
  z-index: 20;
  background-color: ${colors.navbar_background};
  transition: all 0.2s ease-in-out;
`;

export const DivBackdropDownUp = styled.div`
  opacity: ${({ hide }) => (hide ? '0' : '100%')};
  bottom: ${({ hide, height }) =>
    !hide ? '0' : height ? `-${height}` : '-100%'};
  position: absolute;
  width: 100%;
  height: ${({ height }) => (height ? height : '100%')};
  z-index: 20;
  background-color: ${colors.navbar_background};
  transition: all 0.2s ease-in-out;
`;

const appear = keyframes`
  from {
      opacity: 0;
  }
  to {
      opacity: 1;
  }
`;

export const CenteredFixedDiv = styled.div`
  //visibility: ${({ hide }) => (hide ? 'hidden' : 'visible')};
  //display: ${({ hide }) => (hide ? 'none' : 'block')};
  opacity: ${({ hide }) => (hide ? '0' : '100%')};
  top: ${({ hide }) => (hide ? '-100%' : '0')};
  position: fixed;
  width: 100%;
  z-index: 30;
  transition: all 0.2s ease-in-out;
`;

export const CenteredFixedDivDownUp = styled.div`
  opacity: ${({ hide }) => (hide ? '0' : '100%')};
  bottom: ${({ hide }) => (hide ? '-100%' : '0')};
  position: fixed;
  width: 100%;
  z-index: 30;
  transition: all 0.2s ease-in-out;
`;

export const DivOverlay = styled.div`
  position: static;
  width: 50%;
  margin-top: ${({ marginTop }) => (marginTop ? marginTop : '10%')};
  margin-left: auto;
  margin-right: auto;
  background-color: ${colors.background};
  color: ${colors.navbar_background};
  border-radius: 14px;
  z-index: 40;
  padding: 1rem;
  text-align: center;
  transition: all 0.2s ease-in-out;

  animation: ${appear} 300ms ease-out forwards;
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

export const IconContainerDown = styled.div`
  position: absolute;
  bottom: 11rem;
  right: 1.5rem;
  background: transparent;
  font-size: 2rem;
  cursor: pointer;
  outline: none;
`;
