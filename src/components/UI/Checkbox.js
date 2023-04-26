import styled from 'styled-components';
import { colors } from '../../constants/colors';

const CheckboxInput = styled.input`
  /* removing default appearance */
  -webkit-appearance: none;
  appearance: none;
  /* creating a custom design */
  width: 1.6em;
  height: 1.6em;
  border-radius: 0.15em;
  margin-right: 0.5em;
  border: 0.15em solid ${colors.navbar_background};
  outline: none;
  cursor: pointer;

  &:checked {
    background-color: ${colors.buttons};
    position: relative;
  }

  &:checked::before {
    content: '\\2714';
    font-size: 1.5em;
    color: ${colors.navbar_background};
    position: absolute;
    right: 1px;
    top: -3px;
  }

  &:disabled {
    border-color: #c0c0c0;
    background-color: #c0c0c0;
  }

  &:focus {
    box-shadow: 0 0 2px ${colors.navbar_background};
  }
`;

const CheckboxWrapper = styled.div`
  //border-bottom: 1px solid #c6c6c6;
  margin-bottom: 20px;

  &:last-child {
    border-bottom: none;
    margin-bottom: 0;
  }

  label {
    cursor: pointer;
    display: flex;
    align-items: center;
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
        <span role='checkbox' tabIndex={'0'}>
          {value}
        </span>
      </label>
    </CheckboxWrapper>
  );
};

export default Checkbox;
