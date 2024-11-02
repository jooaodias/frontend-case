import { useAuthUser } from "../../shared/providers";
import { Login } from "./Login";
import { Transaction } from "./Transaction";

function IBanking() {
  const {loggedUser} = useAuthUser();

  if (!loggedUser) {
    return <Login />;
  }

  return <Transaction />;
}

export { IBanking };
