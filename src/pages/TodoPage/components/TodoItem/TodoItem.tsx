import { ITodoItem, ITodoTypes } from "../../TodoPage.types";

interface ITodoItemProps {
  item: ITodoItem;
  order: number;
  handleDeleteTask: (id: string) => void;
  handleChangeTaskStatus: (id: string, status: ITodoTypes) => void;
}

export const TodoItem = ({
  item,
  order,
  handleDeleteTask,
  handleChangeTaskStatus,
}: ITodoItemProps) => {
  const { id, description, status, title, links, required } = item;

  return (
    <li>
      <span>
        {order}
        {required ? "*" : ""}.
      </span>
      <div className="todo__content">
        <h3>
          {title}
          <span data-type={status}>{status}</span>
        </h3>
        <p>{description}</p>
        {links && links.length > 0 && (
          <div className="todo__links">
            {links.map((link) => (
              <a key={link.name} target="_blank" href={link.url}>
                {link.name}
              </a>
            ))}
          </div>
        )}
        <div className="todo__actions">
          <button onClick={() => handleDeleteTask(id)}>delete</button>
          <button onClick={() => handleChangeTaskStatus(id, status)}>
            change to{" "}
            <strong>
              <u>{status === "done" ? "pending" : "done"}</u>
            </strong>
          </button>
        </div>
      </div>
    </li>
  );
};
