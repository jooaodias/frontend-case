export enum TransactionEntry {  
    DEBIT = "DEBIT",
    CREDIT = "CREDIT",
    }

export interface IResponseItem {
  id: string;
  description: string;
  label: string;
  entry: TransactionEntry;
  amount: number; 
  name: string;
  dateEvent: string;
  status: string;
}

export interface IResponseList {
  results: {
    items: IResponseItem[];
    date: string; 
  }[];
  itemsTotal: number;
}
