import { IButtonsFilterProps } from "./ButtonsFilter.types";

export const ButtonsFilter = ({
  handleModeEntry,
  modeEntry,
}: IButtonsFilterProps) => {
  return (
    <div className="flex ">
      <div className="flex space-x-4">
      <button
          onClick={() => handleModeEntry("")}
          className={` text-white py-1 px-4 rounded-2xl ${
            modeEntry === ""
              ? "bg-active text-white"
              : "bg-lighter-gray text-light-gray"
          }`}
        >
          Todos
        </button>
        <button
          onClick={() => handleModeEntry("DEBIT")}
          className={` text-white py-1 px-4 rounded-2xl ${
            modeEntry === "DEBIT"
              ? "bg-active text-white"
              : "bg-lighter-gray text-light-gray"
          }`}
        >
          Débito
        </button>
        <button
          onClick={() => handleModeEntry("CREDIT")}
          className={` text-white py-1 px-4 rounded-2xl ${
            modeEntry === "CREDIT"
              ? "bg-active text-white"
              : "bg-lighter-gray text-light-gray"
          }`}
        >
          Crédito
        </button>
      
      </div>
    </div>
  );
};
