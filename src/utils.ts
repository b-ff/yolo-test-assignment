import { ICurrencyListItemData, IMarket } from "./interfaces";

export const uniq = (arr: any[]): any[] => [...new Set(arr)];

export const getCurrencyCodesWithPricesFromMarkets = (
  markets: IMarket[]
): ICurrencyListItemData[] =>
  Object.entries(
    markets.reduce(
      (
        acc: { [key: string]: number },
        market: IMarket
      ): { [key: string]: number } => {
        const currencyCode: string =
          market.marketSymbol.split(":").pop()?.split("/").shift() || "Unknown";

        if (acc[currencyCode]) {
          return acc;
        }

        const price: number = parseFloat(market.ticker.lastPrice);

        return {
          ...acc,
          [currencyCode]: price,
        };
      },
      {}
    )
  ).map(
    ([currencyCode, price]: [string, number]): ICurrencyListItemData => ({
      currencyCode,
      price,
    })
  );
