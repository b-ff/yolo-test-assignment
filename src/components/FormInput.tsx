import React, {
  FC,
  HTMLInputTypeAttribute,
  InputHTMLAttributes,
  ReactElement,
} from "react";
import styled from "styled-components";

interface FormInputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label: string;
}

const DEFAULT_INPUT_TYPE: HTMLInputTypeAttribute = "text";

export const FormInput: FC<FormInputProps> = ({
  name,
  type,
  label,
  style,
  placeholder,
  ...props
}: FormInputProps): ReactElement => {
  return (
    <StyledLabelContainer htmlFor={name} style={style}>
      <StyledInput
        name={name}
        type={type || DEFAULT_INPUT_TYPE}
        placeholder={placeholder || label}
        {...props}
      />
      <StyledFloatingLabel>{label || placeholder}</StyledFloatingLabel>
    </StyledLabelContainer>
  );
};

const StyledLabelContainer = styled.label`
  position: relative;
  margin: 0;
  padding: 0;

  & * {
    font-family: var(--primary-font);
    font-size: 14px;
    font-weight: 500;
    line-height: 1.2em;
    letter-spacing: initial;
  }
`;

const StyledFloatingLabel = styled.span`
  position: absolute;
  display: inline-block;
  top: 0;
  left: 1px;
  max-width: calc(100% - 2px);
  height: 100%;
  white-space: nowrap;
  text-overflow: ellipsis;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  pointer-events: none;
  background-color: var(--secondary-background-color);
  transition: all 0.1s ease-in-out;
  overflow: hidden;
`;

const StyledInput = styled.input`
  color: #000;
  padding: 10px 12px;
  border: 1px solid var(--secondary-font-color);
  border-radius: 3px;

  &:focus {
    outline: 1px solid var(--primary-background-color);
  }

  &:invalid {
    border-color: red;
  }

  &::placeholder {
    color: transparent;
    text-transform: uppercase;
  }

  &:placeholder-shown ~ span {
    padding: 2px 1em 0;
    margin: 0;
    transform: translateY(0);
    font-size: 14px;
    opacity: 0.5;
  }

  & ~ span,
  &:focus ~ span {
    padding: 2px 0.5em 0;
    margin: 0 0.5em;
    transform: translateY(-80%);
    font-size: 9px;
    opacity: 1;
  }
`;
