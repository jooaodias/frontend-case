import { format } from "date-fns";
import { IResponseItem } from "../../../../shared/models";
import { ptBR } from "date-fns/locale";

export const filterByDate = (transactions: IResponseItem[]) => {
  return transactions.reduce(
    (groups: { [key: string]: IResponseItem[] }, transaction) => {
      const date = new Date(transaction.dateEvent).toDateString();
      if (!groups[date]) {
        groups[date] = [];
      }
      groups[date].push(transaction);
      return groups;
    },
    {}
  );
};

export const amountFormatter = (amount: number) => {
  const convertAmount = amount / 100; // cents to reais
  return (
    "R$" +
    convertAmount.toLocaleString("pt-BR", {
      minimumFractionDigits: 2,
    })
  );
};

export const dateFormatter = (date: string) => {
  return format(new Date(date), "d 'de' MMMM", { locale: ptBR });
};

export const dateWithHourFormatter = (date: string) => {
    return format(new Date(date), "dd MMM yyyy - HH:mm", { locale: ptBR });
};
