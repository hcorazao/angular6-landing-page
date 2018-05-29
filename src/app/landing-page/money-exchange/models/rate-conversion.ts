// TODO Add dynamic key value to rates attribute
export interface IRateConversion {
  base: string;
  date: string;
  rates: {
  	EUR: number;
  };
}
