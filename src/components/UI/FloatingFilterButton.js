import styled, { css, keyframes } from 'styled-components';
import { AiOutlineFilter } from 'react-icons/ai';
import { colors } from '../../constants/colors';
import { FaTimes } from 'react-icons/fa';

const bump = keyframes`
  0% {
    transform: scale(1);
  }
  10% {
    transform: scale(0.95);
  }
  30% {
    transform: scale(1.04);
  }
  50% {
    transform: scale(1.06);
  }
  70% {
    transform: scale(1.03);
  }
  100% {
    transform: scale(1);
  } 
  `;

const IconContainer = styled.div`
  position: absolute;
  justify-content: center;
  align-items: center;
  align-content: center;
  top: 5.4rem;
  left: -2rem;
  font-size: 2rem;
  cursor: pointer;
  outline: none;
  border-radius: 90px;
  opacity: 1;
  background-color: ${colors.buttons};
  padding: 0.14em 1.4em;
  transition-duration: 0.4s;
  cursor: pointer;
  z-index: 19;

  &:active {
    animation: ${bump} 300ms ease-in-out;
  }

  &:hover {
    background-color: ${colors.navbar_background};
  }

  ${(props) =>
    props.primary &&
    css`
      background: ${colors.buttons};
      color: white;
    `}

  ${(props) =>
    props.disabled &&
    css`
      opacity: 0.6;
      cursor: not-allowed;
    `}
`;

const FilterIcon = styled(AiOutlineFilter)`
  color: ${colors.background};
  margin-top: 0.6rem;
  margin-left: 0.1rem;
  margin-right: -1.5rem;
  cursor: pointer;
`;

const CloseIcon = styled(FaTimes)`
  color: ${colors.background};
  margin-top: 0.6rem;
  margin-left: 0.1rem;
  margin-right: -1.5rem;
  cursor: pointer;
`;

const FloatingFilterButton = ({ onClick, checked }) => {
  return (
    <IconContainer onClick={onClick}>
      {checked ? (
        <CloseIcon onClick={onClick} />
      ) : (
        <FilterIcon onClick={onClick} />
      )}
    </IconContainer>
  );
};

export default FloatingFilterButton;
