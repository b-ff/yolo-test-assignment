export interface IMarket {
  marketSymbol: string;
  ticker: {
    lastPrice: string;
  };
}

export interface IMarkets {
  markets: IMarket[];
}

export interface ICurrencyListItemData {
  currencyCode: string;
  price: number;
}
