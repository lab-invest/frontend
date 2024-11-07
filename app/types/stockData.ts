export interface StockData {
  aditional_data: {
    Open: number;
    High: number;
    Close: number;
    Low: number;
    Volume: number;
  };
  rentability: number;
  historical_data: {
    [key: string]: number;
  };
  stock_cotation: number;
  company_name: string;
  img: string;
}
