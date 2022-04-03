import React, { FC, MouseEventHandler, ReactElement } from "react";
import styled from "styled-components";
import { config } from "../config";
import { ReactComponent as Icon } from "../icons/icon.svg";
import { ReactComponent as Remove } from "../icons/remove.svg";

type CurrencySignsMap = {
  [key: string]: string;
};

const CURRENCY_SIGNS: CurrencySignsMap = {
  EUR: "€",
  USD: "$",
};

type CurrenciesListItemProps = {
  currencyCode: string;
  price: number;
  onRemove: MouseEventHandler;
};

export const CurrenciesListItem: FC<CurrenciesListItemProps> = ({
  currencyCode,
  price,
  onRemove,
}: CurrenciesListItemProps): ReactElement => {
  return (
    <StyledCurrenciesListItem>
      <StyledIcon />
      <StyledCurrencyInfo>
        <StyledCurrencyCode>{currencyCode}</StyledCurrencyCode>
        <StyledCurrencyPrice>
          {price.toFixed(2)} {CURRENCY_SIGNS[config.baseCurrencyCode]}
        </StyledCurrencyPrice>
      </StyledCurrencyInfo>
      <StyledRemoveButton onClick={onRemove}>
        <StyledRemove />
      </StyledRemoveButton>
    </StyledCurrenciesListItem>
  );
};

const StyledCurrenciesListItem = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 15px 15px 15px 0;

  &:after {
    position: absolute;
    left: 0;
    bottom: 0;
    display: block;
    content: " ";
    width: 100%;
    height: 1px;
    background: linear-gradient(
      90deg,
      var(--secondary-background-color),
      transparent
    );
    opacity: 0.25;
  }
`;

const StyledIcon = styled(Icon)`
  width: 40px;
  height: 49px;
  margin-right: 35px;
`;

const StyledCurrencyInfo = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

const StyledCurrencyCode = styled.h3`
  margin: 0 0 15px;
  padding: 0;
  font-size: 18px;
  font-weight: 400;
`;

const StyledCurrencyPrice = styled.p`
  margin: 0;
  padding: 0;
  font-size: 14px;
  font-weight: 300;
  opacity: 0.5;
`;

const StyledRemoveButton = styled.button`
  margin: 0;
  padding: 10px;
  background: transparent;
  border: none;
  cursor: pointer;

  &:hover svg {
    opacity: 1;
    transform: rotate(90deg);
  }
`;

const StyledRemove = styled(Remove)`
  width: 14px;
  height: auto;
  fill: var(--primary-font-color);
  opacity: 0.5;
  transition: all 0.1s ease-in-out;
`;
