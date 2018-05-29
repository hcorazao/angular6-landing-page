export interface ICurrencyMask {
  prefix: string;
  includeThousandsSeparator: boolean;
  thousandsSeparatorSymbol: string;
  allowDecimal: boolean;
  decimalSymbol: string;
  decimalLimit: number;
  requireDecimal: boolean;
  allowNegative: boolean;
}
