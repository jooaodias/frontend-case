import { IResponseItem } from "../../../../../shared/models";
import { amountFormatter, dateWithHourFormatter } from "../../utils/utils";

interface ITransactionItemProps {
  transaction: IResponseItem;
}

export const TransactionItem = ({ transaction }: ITransactionItemProps) => {
  const isCredit = transaction.entry === "CREDIT";
  const isReversal = transaction.status === "REVERSAL";
  return (
    <div key={transaction.id} className="flex flex-row w-full">
      <div
        className={`basis-1/4 ${
          isCredit ? "text-blue-primary" : "text-active"
        }`}
      >
        Icon {transaction.name}
      </div>
      <div className="text-gray basis-1/4">{transaction.label}</div>

      <div className="text-gray basis-1/4 text-center">
        {dateWithHourFormatter(transaction.dateEvent)}
      </div>

      <div
        className={`font-extrabold basis-1/4 text-end ${
          isCredit ? "text-blue-primary" : "text-active "
        }
          ${isReversal && "line-through"}
          `}
      >
        {!isReversal ? isCredit ? "+ " : "- " : ''}
        {amountFormatter(transaction.amount)}
      </div>
    </div>
  );
};
