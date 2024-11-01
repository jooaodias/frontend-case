import appAxios from "../../axios/appAxios";

export const loginEndpoint = async (
  cpf: string,
  password: string
): Promise<{ token: string }> => {
  const response = await appAxios.post("auth", { cpf, password });
  return response.data;
};
