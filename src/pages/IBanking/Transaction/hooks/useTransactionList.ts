import { useQuery } from "@tanstack/react-query";
import { transactionEndpoint } from "../../../../shared/api/resources/iBanking";
import { IResponseList } from "../../../../shared/models";
import { UseTransactionList } from "./useTransaction.types";

export const useTransactionList: UseTransactionList = () => {
  const { data: transactionList, isLoading } = useQuery<IResponseList>({
    queryKey: ["transactionList"],
    queryFn: transactionEndpoint, 
    refetchOnWindowFocus: false
  });

  const debitList =
    transactionList?.results
      ?.map((result) => result.items)
      .flat()
      .filter((item) => item.entry === "DEBIT") || [];

 const creditList =
    transactionList?.results
      ?.map((result) => result.items)
      .flat()
      .filter((item) => item.entry === "CREDIT") || []; 
//   const creditList =
//     transactionList?.results?.items?.filter(
//       (item) => item.entry === "CREDIT"
//     ) || [];

  return { debitList, creditList, isLoading };
};
