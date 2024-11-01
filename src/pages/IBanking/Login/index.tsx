import { useState, ChangeEvent } from "react";
import logoFullImage from "../../../assets/logo-full.svg";
import arrowRightImage from "../../../assets/arrow-right.svg";
import "./login.css";
import { loginEndpoint } from "../../../shared/services/endpoints";

function Login() {
  const [cpf, setCpf] = useState("");
  const [password, setPassword] = useState("");

  const handleChangeCPF = (e: ChangeEvent<HTMLInputElement>) => {
    setCpf(e.target.value);
  };

  const handleChangePassword = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleAuth = async () => {
    try {
      const response = await loginEndpoint(cpf, password);
      return response.token;
    } catch (error) {
      console.log(error);
    }

    const response = await loginEndpoint(cpf, password);
    const data = response.token;
    console.log(data);
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

export { Login };
