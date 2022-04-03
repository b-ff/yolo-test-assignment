import React, { FC, ReactElement } from "react";
import styled from "styled-components";
import { useQuery, gql } from "@apollo/client";
import { CurrenciesListItem } from "./CurrenciesListItem";
import { config } from "../config";
import { ICurrencyListItemData, IMarkets } from "../interfaces";
import { getCurrencyCodesWithPricesFromMarkets } from "../utils";
import { IWithQueryProps, withQuery } from "../hocs/withQuery";

interface IMarketsVars {
  currencyCodes: string[];
  baseCurrencyCode: string;
}

const GET_MARKETS = gql`
  query GetMarkets($currencyCodes: [String]!, $baseCurrencyCode: String!) {
    markets(
      filter: {
        baseSymbol: { _in: $currencyCodes }
        quoteSymbol: { _eq: $baseCurrencyCode }
        marketStatus: { _eq: Active }
      }
    ) {
      marketSymbol
      ticker {
        lastPrice
      }
    }
  }
`;

interface IWithQueryListProps extends IWithQueryProps {
  data: ICurrencyListItemData[];
  onRemoveCurrencyCode: Function;
}

const WithQueryListComponent = withQuery(
  ({ data, onRemoveCurrencyCode }: IWithQueryListProps): ReactElement => (
    <StyledCurrenciesList>
      {data.map(
        ({ currencyCode, price }: ICurrencyListItemData): ReactElement => (
          <CurrenciesListItem
            key={currencyCode}
            currencyCode={currencyCode}
            price={price}
            onRemove={() => onRemoveCurrencyCode(currencyCode)}
          />
        )
      )}
    </StyledCurrenciesList>
  )
);

type CurrenciesListProps = {
  currencyCodes: string[];
  onRemoveCurrencyCode: Function;
};

export const CurrenciesList: FC<CurrenciesListProps> = ({
  currencyCodes,
  onRemoveCurrencyCode,
}: CurrenciesListProps): ReactElement => {
  const { loading, data, error } = useQuery<IMarkets, IMarketsVars>(
    GET_MARKETS,
    {
      variables: {
        currencyCodes,
        baseCurrencyCode: config.baseCurrencyCode,
      },
      pollInterval: config.pollIntervalMS,
      fetchPolicy: "no-cache",
    }
  );

  const listData: ICurrencyListItemData[] =
    getCurrencyCodesWithPricesFromMarkets(data?.markets || []);

  return (
    <WithQueryListComponent
      loading={loading}
      error={error}
      data={listData}
      onRemoveCurrencyCode={onRemoveCurrencyCode}
    />
  );
};

const StyledCurrenciesList = styled.div`
  display: flex;
  flex-direction: column;
  width: 350px;
`;
