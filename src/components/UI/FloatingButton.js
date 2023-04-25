import styled, { css, keyframes } from 'styled-components';
import { AiOutlineFilter } from 'react-icons/ai';
import { colors } from '../../constants/colors';

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
  top: 6rem;
  left: 3rem;
  font-size: 2.5rem;
  cursor: pointer;
  outline: none;
  border-radius: 90px;
  opacity: 1;
  background-color: ${colors.buttons};
  padding: 0.171em 0.4em;
  transition-duration: 0.4s;
  cursor: pointer;
  z-index: 20;

  &:active {
    animation: ${bump} 300ms ease-out;
  }

  &:hover {
    opacity: 1;
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
  cursor: pointer;
`;

const FloatingButton = ({ onClick }) => {
  return (
    <IconContainer onClick={onClick}>
      <FilterIcon onClick={onClick} />
    </IconContainer>
  );
};

export default FloatingButton;
