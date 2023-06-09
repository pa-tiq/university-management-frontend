import styled from 'styled-components';
import { colors } from '../../constants/colors';

const CheckboxInput = styled.input`
  /* removing default appearance */
  -webkit-appearance: none;
  appearance: none;
  /* creating a custom design */
  width: 1.6em;
  height: 1.6em;
  border-radius: 0.19em;
  margin-right: 0.4em;
  border: 0.15em solid ${colors.background};
  color: ${colors.background};
  outline: none;
  cursor: pointer;

  &:checked {
    background-color: ${colors.buttons};
    position: relative;
  }

  &:checked::before {
    content: '\\2714';
    font-size: 1.2em;
    color: ${colors.background};
    position: absolute;
    right: 2px;
    top: -3px;
  }

  &:disabled {
    border-color: #c0c0c0;
    background-color: #c0c0c0;
  }

  &:focus {
    box-shadow: 0 0 2px ${colors.background};
  }
`;

const CheckboxWrapper = styled.div`
  //border-bottom: 1px solid #c6c6c6;
  margin-bottom: 0px;

  &:last-child {
    border-bottom: none;
    margin-bottom: 0;
  }

  label {
    cursor: pointer;
    display: flex;
    align-items: center;
    color: ${colors.background};
    margin-right: 0.4rem;
  }

  label + p {
    color: grey;
  }
`;

const Checkbox = ({ value, label, checked, onChange }) => {
  return (
    <CheckboxWrapper key={value}>
      <label htmlFor={value}>
        <CheckboxInput
          id={value}
          label={label ? label : value}
          type='checkbox'
          checked={checked}
          onChange={onChange}
        />
        <span
          role='checkbox'
          aria-checked={checked}
          tabIndex={'0'}
          style={{ color: colors.background }}
        >
          {value}
        </span>
      </label>
    </CheckboxWrapper>
  );
};

export default Checkbox;
