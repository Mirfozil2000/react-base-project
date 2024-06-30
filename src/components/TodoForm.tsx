import React, { FormEvent, useState } from "react";

interface TodoFormProps {
  addTodo: (task: string) => void;
}

const TodoForm: React.FC<TodoFormProps> = ({ addTodo }) => {
  const [value, setValue] = useState("");
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (value) {
      addTodo(value);
      console.log(addTodo(value));
    }
    setValue("");
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={value}
          className="p-5"
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

export default TodoForm;
