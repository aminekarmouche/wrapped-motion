// Motion/src/types.ts
// Type definitions for the Wrapped Experience component

export interface Holding {
  name: string;
  ticker: string;
  amountInvestedSek: number;
  percentOfPortfolio: number;
}

export interface WrappedTheme {
  primary: string;
  secondary: string;
  background: string;
  accent: string;
}

export interface WrappedProps {
  holdings: Holding[];
  theme: WrappedTheme;
  onExit?: () => void;
}
