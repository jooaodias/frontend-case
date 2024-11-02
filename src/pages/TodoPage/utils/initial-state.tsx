import { ITodoItem } from "../TodoPage.types";

export const TODO_LIST: ITodoItem[] = [
  {
    id: crypto.randomUUID(),
    title: "Visualizar to-do list corretamente",
    description: (
      <>
        1. Criar rota e conseguir visualizar o to-do list.
        <br />
        2. Visualizar todas as tasks corretamente.
        <br />
        <br />
        <strong>Info:</strong> Ta conseguindo ver o to-do list com a quantidade
        correta de tasks? Parabéns, você finalizou a sua primeira task &#127881;
      </>
    ),
    status: "done",
    required: true,
  },
  {
    id: crypto.randomUUID(),
    title: "Resolver to-do bugs",
    description: (
      <>
        Nos ajude com o nosso produto de to-do list e resolva os bugs abaixo:
        <br />
        <br />
        1. A troca de status, de <strong>done</strong> para{" "}
        <strong>done</strong> e vice-versa, não esta funcionando corretamenta.
        <br />
        2. A busca não esta funcionando corretamente.
        <br />
        3. O <strong>delete</strong> não ta removendo o item.
        <br />
        4. A nossa lista ta começando com o número <strong>0</strong>, mas
        precisamos que ela comece com o número <strong>1</strong>.
        <br />
        5. Alguns links não estão funcionando.
      </>
    ),
    status: "done",
    required: true,
  },
  {
    id: crypto.randomUUID(),
    title: "Página de login - CSS",
    description: (
      <>
        A página de Login já esta estruturada corretamente, mas parece que tem
        alguma coisa errada com o CSS dessa página :/
      </>
    ),
    status: "done",
    required: true,
    links: [
      {
        name: "figma",
        url: "https://www.figma.com/file/TXxt0VFxbzDoho4tmt9XPP/Teste_FrontWeb?type=design&node-id=3-2773&mode=dev",
      },
    ],
  },
  {
    id: crypto.randomUUID(),
    title: "Página de login - Integração",
    description: (
      <>
        1. Faça a integração com o endpoint de autenticação.
        <br />
        <br />O contrato esta no <strong>README.md</strong> do projeto.
        <br />
        <br />
        <strong>Info:</strong> Sinta-se livre para fazer melhorias :)
      </>
    ),
    status: "done",
    required: true,
    links: [
      {
        name: "endpoint de autenticação",
        url: "http://localhost:3000/auth",
      },
    ],
  },
  {
    id: crypto.randomUUID(),
    title: "Página de lista de transações",
    description: (
      <>
        1. Crie a página de lista de transações de acordo com o link do figma
        (não esqueça que essa é uma página de área logada).
        <br />
        2. Faça a integração com o endpoint de lista.
        <br />
        <br />O contrato esta no <strong>README.md</strong> do projeto.
      </>
    ),
    status: "done",
    required: true,
    links: [
      {
        name: "figma",
        url: "https://www.figma.com/file/TXxt0VFxbzDoho4tmt9XPP/Teste_FrontWeb?type=design&node-id=5-3378&mode=dev",
      },
      {
        name: "endpoint de lista",
        url: "http://localhost:3000/list",
      },
    ],
  },
  {
    id: crypto.randomUUID(),
    title: "Filtro por tipo de transação",
    description: (
      <>
        Adicione a possibilidade de filtrar a tela de transações por tipo de
        transação (tela feita na task anterior).
        <br />
        <br />
        <strong>Note:</strong> Utilize os <u>buttons</u> que aparecem no topo da
        tela de lista de transações para fazer o filtro.
        <br />
        <br />
        <strong>Important:</strong> O tipo da transação é a chave{" "}
        <strong>entry</strong>, com valor <strong>DEBIT</strong> ou{" "}
        <strong>CREDIT</strong>, dentro do response retornado pela api.
      </>
    ),
    status: "done",
    required: true,
    links: [
      {
        name: "figma",
        url: "https://www.figma.com/file/TXxt0VFxbzDoho4tmt9XPP/Teste_FrontWeb?type=design&node-id=5-3396&mode=dev",
      },
    ],
  },
  {
    id: crypto.randomUUID(),
    title: "Extra",
    description: (
      <>
        Agora é o seu momento de brilhar. Teste a usabilidade e avalie o código,
        na <strong>To-do</strong> list e página de <strong>Login</strong>, para
        encontrar bugs, falhas de comportamento e possíveis melhorias
        (performance, código, boas práticas).
        <br />
        <br />
        <strong>Se faça a seguinte pergunta</strong>: Se esse produto fosse meu,
        quais melhorias eu faria no código e no produto?
        <br />
        <br />
        <strong>Note:</strong> Essa task não é obrigatória. Ela pode fazer a
        diferença na avaliação geral e/ou na hora de decidirmos o melhor perfil
        para a vaga.
        <br />
        <br />
        <strong>Important:</strong> Encontrou algo? Crie novas tasks nessa lista
        de to-dos, para conseguirmos te avaliar de uma forma mais assertiva.
        🚀🚀
      </>
    ),
    status: "done",
    required: false,
  },
  {
    id: crypto.randomUUID(),
    title: "Fluxo de login",
    description: (
      <>
       Com a página de <strong>login</strong>, é possível criar um fluxo de autenticação: <br />
       1. Salve o token no navegador para quando o usuário acessar a página novamente já estar autenticado <br />
       2. Apresente o nome do usuário na tela de transações <br />
       3. Coloque um botão de logout na tela de transações para limpar a sessão de autenticação e redirecione o usuário para tela de login <br /><br/>
       🚀🚀
      </>
    ),
    status: "done",
    required: false,
  },
];
