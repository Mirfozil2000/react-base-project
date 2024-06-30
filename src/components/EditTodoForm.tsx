import React, { FormEvent, useState } from "react";

interface EditTodoFormProps {
  task: { id: string; task: string };
  editTodo: (task: string, id: string) => void;
}

const EditTodoForm: React.FC<EditTodoFormProps> = ({ task, editTodo }) => {
  const [value, setValue] = useState(task.task);
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    editTodo(value, task.id);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={value}
          className="text-red-500"
          placeholder="Напишите что-то"
          onChange={(e) => setValue(e.target.value)}
        />
        <button type="submit" className="">
          Add
        </button>
      </form>
    </div>
  );
};

export default EditTodoForm;
