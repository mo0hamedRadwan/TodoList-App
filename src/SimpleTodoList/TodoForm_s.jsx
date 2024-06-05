import { useState } from 'react';

const TodoForm_s = ({ addTodo }) => {
  const [todo, setTodo] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo(todo);
    setTodo('');
  };
  return (
    <form
      className=" flex flex-col sm:flex-row justify-around items-center gap-3 mb-8"
      onSubmit={handleSubmit}
    >
      <input
        type="text"
        placeholder="todo..."
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
        className="w-full sm:w-[400px] border border-gray-300 px-2 py-2 rounded-2xl outline-none"
      />
      <button
        type="button"
        onClick={() => {
          addTodo(todo);
          setTodo('');
        }}
        className="w-full sm:w-auto px-6 py-1.5 rounded-full bg-primary flex justify-center gap-2"
      >
        <span className="text-white font-semibold">Add</span>
        <img src="./src/assets/icons/add.png" alt="todo icon" className="w-6 h-6" />
      </button>
    </form>
  );
};

export default TodoForm_s;
