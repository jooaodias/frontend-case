import { useState } from "react";
import { useTransactionList } from "./hooks";
import {
  amountFormatter,
  dateFormatter,
  dateWithHourFormatter,
  filterByDate,
} from "./utils/utils";

export const Transaction = () => {
  const [modeEntry, setModeEntry] = useState("DEBIT");
  const { creditList, debitList, isLoading } = useTransactionList();

  const filteredList = modeEntry === "DEBIT" ? debitList : creditList;

  const groupedTransactions = filterByDate(filteredList);

  const handleModeEntry = (mode: string) => {
    setModeEntry(mode);
  };
  if (isLoading) return <></>;

  return (
    <div className="flex flex-col mt-6 w-4/6 justify-items-center mx-auto">
      <div className="flex ">
        <div className="flex space-x-4">
          <button
            onClick={() => handleModeEntry("DEBIT")}
            className={` text-white py-1 px-4 rounded-2xl ${
              modeEntry === "DEBIT"
                ? "bg-active text-white"
                : "bg-inactive text-gray-medium"
            }`}
          >
            Débito
          </button>
          <button
            onClick={() => handleModeEntry("CREDIT")}
            className={` text-white py-1 px-4 rounded-2xl ${
              modeEntry === "CREDIT"
                ? "bg-active text-white"
                : "bg-inactive text-gray-medium"
            }`}
          >
            Crédito
          </button>
        </div>
      </div>

      <div>
        {Object.keys(groupedTransactions).map((date) => (
          <div key={date} className="mb-6">
            <div className="flex justify-between">
              <span>{dateFormatter(date)}</span>
              <span>
                saldo do dia{" "}
                {amountFormatter(
                  groupedTransactions[date].reduce(
                    (total, item) => total + item.amount,
                    0
                  )
                )}
              </span>
            </div>
            <div className="flex flex-col gap-y-4 py-4 ">
              {groupedTransactions[date].map((item) => (
                <div key={item.id} className="flex justify-between w-full">
                  <span className="border border-black">Icon</span>
                  <span>{item.name}</span>
                  <span>{item.label}</span>
                  <span>{item.description}</span>
                  <span>{dateWithHourFormatter(item.dateEvent)}</span>

                  <span>{amountFormatter(item.amount)}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
