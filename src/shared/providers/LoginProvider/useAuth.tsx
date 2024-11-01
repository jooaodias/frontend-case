import { useContext } from "react";
import { UserContext } from "./";

export const useAuthUser = () => useContext(UserContext);
