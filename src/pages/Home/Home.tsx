import { Link } from "react-router-dom";
import logoImage from "../../assets/logo.svg";

export function Home() {
  return (
    <main className="w-full max-w-[calc(100%-50px)] min-w-[320px] min-h-screen flex items-center justify-center py-12 text-center font-roboto mx-auto">
      <div>
        <img
          src={logoImage}
          alt="Cora"
          title="Cora"
          className="w-[36px] mb-6"
        />
        <h1 className="text-5xl font-bold leading-tight">
          Hey There &#128075;
        </h1>
        <h2 className="text-2xl font-normal text-main">
          Tenha um ótimo teste!!!
        </h2>
        <p className="max-w-[550px] mx-auto font-light text-lg leading-relaxed my-4 text-light-gray">
          <strong>Vamos começar?</strong> Como você faria os botões abaixo
          abrirem as suas respectivas páginas? (Comece pela{" "}
          <strong>TODO LIST</strong>, pois nela contem os próximos passos)
        </p>
        <p className="p-4 rounded-md border border-border-color bg-bg-black max-w-[450px] mx-auto text-light-gray">
          &#9888; Você pode encontrar alguns <strong>erros</strong> no meio do
          caminho, não desanime e fique atento para conseguir{" "}
          <strong>visualizar</strong> e <strong>renderizar</strong> as páginas.
        </p>
        <ul className="list-none mt-5">
          <li className="mb-2">
            <Link
              to="/todo"
              className="inline-block py-2 px-4 text-lg text-main border border-main rounded min-w-52"
            >
              TO-DO LIST
            </Link>
          </li>
          <li>
            <Link
              to="/banking"
              className="inline-block py-2 px-4 text-lg text-main border border-main rounded min-w-52"
            >
              IBANKING
            </Link>
          </li>
        </ul>
      </div>
    </main>
  );
}
