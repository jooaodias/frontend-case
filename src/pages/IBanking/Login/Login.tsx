import { useState, ChangeEvent } from "react";
import logoFullImage from "../../../assets/logo-full.svg";
import arrowRightImage from "../../../assets/arrow-right.svg";
import "./login.css";
import { loginEndpoint } from "../../../shared/api/resources";
import { useAuthUser } from "../../../shared/providers";
import { getUserInfo } from "../../../shared/utils";

export function Login() {
  const [cpf, setCpf] = useState("");
  const [password, setPassword] = useState("");
  const { setLoggedUser } = useAuthUser();

  const handleChangeCPF = (e: ChangeEvent<HTMLInputElement>) => {
    setCpf(e.target.value);
  };

  const handleChangePassword = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleAuth = async () => {
    try {
      const response = await loginEndpoint(cpf, password);
      const userDecoded = getUserInfo(response.token);
      localStorage.setItem("token", response.token);
      setLoggedUser(userDecoded);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <main id="login">
      <img src={logoFullImage} alt="Cora" title="Cora" />
      <h1>Fazer Login</h1>
      <input id="cpf" placeholder="Insira seu CPF" onChange={handleChangeCPF} />
      <input
        id="password"
        placeholder="Digite sua senha"
        onChange={handleChangePassword}
      />
      <button onClick={handleAuth}>
        Continuar
        <img src={arrowRightImage} />
      </button>
    </main>
  );
}

