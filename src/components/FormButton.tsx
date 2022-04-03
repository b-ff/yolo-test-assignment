import React, { ButtonHTMLAttributes, FC, ReactElement } from "react";
import styled from "styled-components";

interface FormButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export const FormButton: FC<FormButtonProps> = ({
  children,
  ...props
}: FormButtonProps): ReactElement => (
  <StyledButton {...props}>{children}</StyledButton>
);

const StyledButton = styled.button`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  height: 40px;
  font-family: var(--primary-font);
  font-size: 14px;
  background-color: var(--button-color);
  color: var(--primary-font-color);
  border-radius: 20px;
  outline: none;
  border: none;
  cursor: pointer;

  &:hover,
  &:active {
    background-color: var(--active-button-color);
  }

  &:active {
    outline: 1px solid var(--primary-background-color);
  }

  &:disabled {
    background-color: var(--secondary-font-color);
    pointer-events: none;
  }
`;
