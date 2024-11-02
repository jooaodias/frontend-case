import { IResponseItem } from "../../../../../shared/models";
import { amountFormatter, dateWithHourFormatter } from "../../utils/utils";
import { Icon } from "../Icon";

interface ITransactionItemProps {
  transaction: IResponseItem;
}

export const TransactionItem = ({ transaction }: ITransactionItemProps) => {
  const isCredit = transaction.entry === "CREDIT";
  const isRefund = transaction.status === "REFUND";
  return (
    <div key={transaction.id} className="flex flex-row w-full">
      <div
        className={`basis-1/4 flex gap-4 ${
          isCredit ? "text-blue-primary" : "text-active"
        }`}
      >
        <Icon entry={isRefund ? "REFUND" : transaction.entry}/> {transaction.name}
      </div>
      <div className="text-gray basis-1/4">{transaction.label}</div>

      <div className="text-gray basis-1/4 text-center">
        {dateWithHourFormatter(transaction.dateEvent)}
      </div>

      <div
        className={`font-extrabold basis-1/4 text-end ${
          isCredit ? "text-blue-primary" : "text-active "
        }
          ${isRefund && "line-through"}
          `}
      >
        {!isRefund ? isCredit ? "+ " : "- " : ''}
        {amountFormatter(transaction.amount)}
      </div>
    </div>
  );
};
