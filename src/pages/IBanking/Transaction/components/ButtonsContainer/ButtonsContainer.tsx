import { useAuthUser } from "../../../../../shared/providers";
import { IButtonsContainerProps } from "./ButtonsContainer.types";

export const ButtonsContainer = ({
  handleModeEntry,
  modeEntry,
}: IButtonsContainerProps) => {
  const { logout, loggedUser } = useAuthUser();

  return (
    <div className="flex ">
      <div className="flex w-full justify-between">
        <div className="flex space-x-4">
          <button
            onClick={() => handleModeEntry("")}
            className={`py-1 px-4 rounded-2xl ${
              modeEntry === ""
                ? "bg-active text-white"
                : "bg-lighter-gray text-medium-gray"
            }`}
          >
            Todos
          </button>
          <button
            onClick={() => handleModeEntry("DEBIT")}
            className={`py-1 px-4 rounded-2xl ${
              modeEntry === "DEBIT"
                ? "bg-active text-white"
                : "bg-lighter-gray text-medium-gray"
            }`}
          >
            Débito
          </button>
          <button
            onClick={() => handleModeEntry("CREDIT")}
            className={`py-1 px-4 rounded-2xl ${
              modeEntry === "CREDIT"
                ? "bg-active text-white"
                : "bg-lighter-gray text-medium-gray"
            }`}
          >
            Crédito
          </button>
        </div>
        <span className="flex gap-2 items-center">
          <span className="text-sm">
            <span className="text-medium-gray">Usuário: </span>
            <span className="text-active font-semibold">{loggedUser?.name}</span>
          </span>
          <button
            className={`py-1 px-4 rounded-2xl bg-lighter-gray text-active`}
            onClick={logout}
          >
            Logout
          </button>
        </span>
      </div>
    </div>
  );
};
