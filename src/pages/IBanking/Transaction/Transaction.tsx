import { useState } from "react";
import { useTransactionList } from "./hooks";
import { filterByDate } from "./utils/utils";
import { ButtonsContainer } from "./components";
import { TransactionsList } from "./components/TransactionsList";

export const Transaction = () => {
  const [modeEntry, setModeEntry] = useState("");
  const { creditList, debitList, isLoading } = useTransactionList();

  const filteredList = () => {
    if (modeEntry === "DEBIT") {
      return debitList;
    }
    if (modeEntry === "CREDIT") {
      return creditList;
    }
    return [debitList, creditList].flat();
  };

  const groupedTransactions = filterByDate(filteredList());

  const handleModeEntry = (mode: string) => {
    setModeEntry(mode);
  };
  if (isLoading) return <></>;

  return (
    <div className="flex flex-col mt-6 w-3/5 justify-items-center mx-auto">
      <ButtonsContainer handleModeEntry={handleModeEntry} modeEntry={modeEntry} />
    
      <TransactionsList groupedTransactions={groupedTransactions} />
    </div>
  );
};
