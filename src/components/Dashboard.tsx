import React, { FC, ReactElement, useCallback, useState } from "react";
import { HeroText } from "./HeroText";
import styled from "styled-components";
import { AddCurrencyForm } from "./AddCurrencyForm";
import { CurrenciesList } from "./CurrenciesList";
import { config } from "../config";
import { uniq } from "../utils";

export const Dashboard: FC = (): ReactElement => {
  const [currencyCodes, setCurrencyCodes] = useState<string[]>(
    config.defaultCurrencyCodes
  );

  const handleAddCurrencyCode = useCallback(
    (currencyCode: string): void => {
      setCurrencyCodes((codes: string[]): string[] =>
        uniq([...codes, currencyCode.toLocaleUpperCase()])
      );
    },
    [setCurrencyCodes]
  );

  const handleRemoveCurrencyCode = useCallback(
    (removedCurrencyCode: string): void => {
      setCurrencyCodes(
        currencyCodes.filter(
          (currencyCode: string): boolean =>
            currencyCode !== removedCurrencyCode
        )
      );
    },
    [currencyCodes, setCurrencyCodes]
  );

  return (
    <>
      <StyledDashboardRow>
        <HeroText />
        <AddCurrencyForm onSubmit={handleAddCurrencyCode} />
      </StyledDashboardRow>
      <CurrenciesList
        currencyCodes={currencyCodes}
        onRemoveCurrencyCode={handleRemoveCurrencyCode}
      />
    </>
  );
};

const StyledDashboardRow = styled.section`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  padding-bottom: 50px;
`;
