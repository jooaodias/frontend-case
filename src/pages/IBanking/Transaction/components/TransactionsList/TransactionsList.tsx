import { IResponseItem } from "../../../../../shared/models";
import { amountFormatter, dateFormatter } from "../../utils/utils";
import { TransactionItem } from "../TransactionItem/TransactionItem";

interface ITransactionListProps {
  groupedTransactions: {
    [key: string]: IResponseItem[];
  };
}

export const TransactionsList = ({
  groupedTransactions,
}: ITransactionListProps) => {
  return (
    <div className="mt-6">
      {Object.keys(groupedTransactions).map((date) => (
        <div key={date} className="mb-8">
          <div className="flex justify-between mb-4 text-xs text-active">
            <span className="font-extrabold">{dateFormatter(date)}</span>
            <span>
              <span className="text-gray">saldo do dia </span>
              <span className="font-extrabold">
                {amountFormatter(
                  groupedTransactions[date].reduce((total, item) => {
                    if (item.status === "REVERSAL") {
                      return total;
                    }
                    if (item.entry === "CREDIT") {
                      return total + item.amount;
                    } else if (item.entry === "DEBIT") {
                      return total - item.amount;
                    } else {
                      return total;
                    }
                  }, 0)
                )}
              </span>
            </span>
          </div>
          <div className="border border-border-color rounded-xl py-4 px-6">
            <div className="flex flex-col gap-y-6 py-4">
              {groupedTransactions[date].map((transaction) => (
                <TransactionItem
                  key={transaction.id}
                  transaction={transaction}
                />
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
