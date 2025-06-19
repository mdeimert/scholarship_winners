export interface WinnerAttributes {
  winnerName: string;
  amountWon: number;
  wonAt: string;
  winnerPhoto: string;
  published: boolean;
}

export interface Winner {
  id: string;
  type: 'winner';
  attributes: WinnerAttributes;
}

export interface JsonApiLinks {
  self?: string;
  first?: string;
  prev?: string;
  next?: string;
  last?: string;
}

export interface JsonApiResponse<T> {
  data: T[];
  links?: JsonApiLinks;
  meta?: Record<string, any>;
}
