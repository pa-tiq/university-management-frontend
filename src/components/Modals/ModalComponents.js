import styled, { keyframes } from 'styled-components';
import { colors } from '../../constants/colors';
import { FaTimes } from 'react-icons/fa';

const DivBackdrop = styled.div`
  opacity: ${({ hide }) => (hide ? '0' : '100%')};
  position: absolute;
  width: ${({ width }) => (width ? width : '100%')};
  height: ${({ height }) => (height ? height : '100%')};
  z-index: 20;
  background-color: ${colors.navbar_background};
  transition: all 0.2s ease-in-out;
`;

export const DivBackdropUpDown = styled(DivBackdrop)`
  top: ${({ hide, height }) => (!hide ? '0' : height ? `-${height}` : '-100%')};
`;

export const DivBackdropDownUp = styled(DivBackdrop)`
  bottom: ${({ hide, height }) =>
    !hide ? '0' : height ? `-${height}` : '-100%'};
`;

export const DivBackdropLeftRight = styled(DivBackdrop)`
  left: ${({ hide, width }) => (!hide ? '0' : width ? `-${width}` : '-100%')};
`;

const appear = keyframes`
  from {
      opacity: 0;
  }
  to {
      opacity: 1;
  }
`;

const CenteredFixedDiv = styled.div`
  //visibility: ${({ hide }) => (hide ? 'hidden' : 'visible')};
  //display: ${({ hide }) => (hide ? 'none' : 'block')};
  opacity: ${({ hide }) => (hide ? '0' : '100%')};
  position: fixed;
  width: ${({ width }) => (width ? width : '100%')};
  height: ${({ height }) => (height ? height : 'inherit')};
  z-index: 30;
  transition: all 0.2s ease-in-out;
  max-width: inherit;
`;

export const CenteredFixedDivUpDown = styled(CenteredFixedDiv)`
  top: ${({ hide }) => (hide ? '-100%' : '0')};
`;

export const CenteredFixedDivDownUp = styled(CenteredFixedDiv)`
  bottom: ${({ hide }) => (hide ? '-100%' : '0')};
`;

export const CenteredFixedDivLeftRight = styled(CenteredFixedDiv)`
  left: ${({ hide }) => (hide ? '-100%' : '0')};
`;

export const DivOverlay = styled.div`
  position: static;
  width: ${({ width }) => (width ? width : '75%')};
  height: ${({ height }) => (height ? height : '39%')};
  margin-top: ${({ marginTop }) => (marginTop ? marginTop : '10px')};
  margin-bottom: ${({ marginBottom }) =>
    marginBottom ? marginBottom : 'auto'};
  margin-left: ${({ marginLeft }) => (marginLeft ? marginLeft : 'auto')};
  margin-right: ${({ marginRight }) => (marginRight ? marginRight : 'auto')};
  background-color: ${colors.background};
  color: ${colors.navbar_background};
  border-radius: 14px;
  z-index: 40;
  padding-top: 0.3rem;
  padding-left: 0.3rem;
  padding-right: 0.3rem;
  padding-bottom: 2rem;
  text-align: center;
  transition: all 0.2s ease-in-out;

  animation: ${appear} 300ms ease-out forwards;
`;

export const CloseIcon = styled(FaTimes)`
  color: ${colors.background};
`;

export const IconContainer = styled.div`
  position: absolute;
  background: transparent;
  font-size: 2rem;
  cursor: pointer;
  outline: none;
`;

export const IconContainerUpRight = styled.div`
  top: 1.2rem;
  right: 1.5rem;
`;

export const IconContainerBottomRight = styled(IconContainer)`
  bottom: 11rem;
  right: 1.5rem;
`;

export const IconContainerUpLeft = styled(IconContainer)`
  top: 1.2rem;
  left: 1.5rem;
`;
