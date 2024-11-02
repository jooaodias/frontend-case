import { jwtDecode } from "jwt-decode";
import { IAuthenticatedUser } from "../models";

export function getUserInfo(jwtToken: string): IAuthenticatedUser | null {
  try {
    const decodedToken = jwtDecode<IAuthenticatedUser>(jwtToken);
    const { name } = decodedToken;
    return { token: jwtToken, name };
  } catch (error) {
    console.error("Failed to decode JWT:", error);
    return null;
  }
}
