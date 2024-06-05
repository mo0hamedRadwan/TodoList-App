import { useState } from 'react';

const TodoItem_s = ({ todo, updateTodo, toggleTodo, deleteTodo }) => {
  const [updateTitle, setUpdateTitle] = useState(false);
  const [title, setTitle] = useState(todo.title);
  return (
    <div className=" my-2">
      <div className="flex justify-between items-center">
        {updateTitle ? (
          <>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-[250px] sm:w-[400px] border border-gray-300 px-2 py-1 rounded-xl"
            />
            <div className="flex gap-2">
              <img
                src="./src/assets/icons/done.png"
                alt=""
                className="w-6 h-6 cursor-pointer"
                onClick={() => {
                  updateTodo(title, todo.id);
                  setUpdateTitle(false);
                }}
              />
              <img
                src="./src/assets/icons/cancel.png"
                alt=""
                className="w-6 h-6 cursor-pointer"
                onClick={() => setUpdateTitle(false)}
              />
            </div>
          </>
        ) : (
          <>
            <p className={`font-semibold cursor-pointer ${todo.completed && 'line-through'}`} onClick={() => toggleTodo(todo.id)}>
              {todo.title}
            </p>
            <div className="flex gap-2">
              <img
                src="./src/assets/icons/edit.png"
                alt=""
                className="w-6 h-6 cursor-pointer"
                onClick={() => setUpdateTitle(true)}
              />
              <img
                src="./src/assets/icons/delete.png"
                alt=""
                className="w-6 h-6 cursor-pointer"
                onClick={() => deleteTodo(todo.id)}
              />
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default TodoItem_s;
