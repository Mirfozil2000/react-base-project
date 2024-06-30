import React from "react";
import { TiEdit, FaTrash } from "./icons/index";

interface TodoProps {
  task: { id: string; task: string; completed: boolean };
  deleteTodo: (id: string) => void;
  editTodo: (id: string) => void;
  toggleComplete: (id: string) => void;
}

const Todo: React.FC<TodoProps> = ({
  task,
  deleteTodo,
  editTodo,
  toggleComplete,
}) => {
  return (
    <div className="">
      <p
        className={`${task.completed ? "completed" : "incompleted"}`}
        onClick={() => toggleComplete(task.id)}
      >
        {task.task}
      </p>
      <div>
        <TiEdit onClick={() => editTodo(task.id)} />
        <FaTrash onClick={() => deleteTodo(task.id)} />
      </div>
    </div>
  );
};

export default Todo;
