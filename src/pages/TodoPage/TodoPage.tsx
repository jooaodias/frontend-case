import { useState, ChangeEvent, useMemo } from "react";

import logoImage from "../../assets/logo.svg";
import { TODO_LIST } from "./initial-state";
import { ITodoItem, ITodoTypes } from "./TodoPage.types";

import "./index.css";
import { TodoItem } from "./components/TodoItem/TodoItem";

export function TodoPage() {
  const [items, setItems] = useState<ITodoItem[]>(TODO_LIST);
  const [searchInputValue, setSearchInputValue] = useState("");

  const filteredTasks = useMemo(() => {
    return items.filter((item) =>
      item.title.toLowerCase().includes(searchInputValue.toLowerCase())
    );
  }, [items, searchInputValue]);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchInputValue(event.target.value);
  };

  const handleSearch = (event: ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  const handleDeleteTask = (id: string) => {
    const newItems = items.filter((item) => item.id !== id);
    setItems(newItems);
  };

  const handleChangeTaskStatus = (id: string, status: ITodoTypes) => {
    const reversedStatus: ITodoTypes =
      status === "pending" ? "done" : "pending";

    const editedItems = items.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          status: reversedStatus,
        };
      }
      return item;
    });

    setItems(editedItems);
  };

  return (
    <main id="page" className="todo">
      <div>
        <img src={logoImage} alt="Cora" title="Cora"></img>
        <h1>Weekly to-do list &#128467;</h1>
        <h2>
          Bem-vindo ao nosso produto <i>fake</i> de <strong>to-do</strong> list
        </h2>
        <p>
          Marque como{" "}
          <strong>
            <u>done</u>
          </strong>{" "}
          as tasks que você conseguir concluir (elas já precisam renderizar com
          o status <strong>done</strong>)
        </p>
        <p className="disclaimer">
          Items obrigatórios marcados com arteristico (<strong>*</strong>)
        </p>
        <div className="todo__wrapper">
          <form className="todo__search" onSubmit={handleSearch}>
            <input
              id="search"
              placeholder="busca por texto..."
              value={searchInputValue}
              onChange={handleChange}
            />
            <button type="submit">buscar</button>
          </form>
          <ul className="todo__list">
            {filteredTasks.length === 0 && (
              <span>
                <strong>Ops!!!</strong> Nenhum resultado foi encontrado
                &#128533;
              </span>
            )}
            {filteredTasks.map((item, i) => (
              <TodoItem
                item={item}
                order={i + 1}
                key={item.id}
                handleChangeTaskStatus={handleChangeTaskStatus}
                handleDeleteTask={handleDeleteTask}
              />
            ))}
          </ul>
        </div>
      </div>
    </main>
  );
}
