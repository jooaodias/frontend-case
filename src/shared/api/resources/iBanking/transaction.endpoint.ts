import { IResponseList } from "../../../models";
import appAxios from "../../axios/appAxios";

export const transactionEndpoint = async (): Promise<IResponseList> => {
  const response = await appAxios.get("list");
  return response.data;
};
