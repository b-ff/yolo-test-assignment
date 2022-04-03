import React, { FC, ReactElement } from "react";
import styled from "styled-components";
import { CurrenciesListItem } from "./CurrenciesListItem";

type CurrenciesListProps = {
  currencyCodes: string[];
  onRemoveCurrencyCode: Function;
};

export const CurrenciesList: FC<CurrenciesListProps> = ({
  currencyCodes,
  onRemoveCurrencyCode,
}: CurrenciesListProps): ReactElement => {
  return (
    <StyledCurrenciesList>
      {currencyCodes.map(
        (currencyCode: string): ReactElement => (
          <CurrenciesListItem
            key={currencyCode}
            currencyCode={currencyCode}
            price={100}
            onRemove={() => onRemoveCurrencyCode(currencyCode)}
          />
        )
      )}
    </StyledCurrenciesList>
  );
};

const StyledCurrenciesList = styled.div`
  display: flex;
  flex-direction: column;
  width: 350px;
`;
