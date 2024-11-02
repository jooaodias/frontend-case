import { IResponseItem } from "../../../../shared/models";

export type UseTransactionList = () => {
  debitList: IResponseItem[];
  creditList: IResponseItem[];
  isLoading: boolean
};