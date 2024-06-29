import { useEffect, useState } from 'react';
import TodoForm_s from './TodoForm_s';
import TodoList from './TodoList_s';
import images from '../constants/images';

// const todos = [
//   {
//     id: 1,
//     title: 'Learn React',
//     completed: false,
//   },
//   {
//     id: 2,
//     title: 'Learn Javascript',
//     completed: false,
//   },
//   {
//     id: 3,
//     title: 'Learn TypeScript',
//     completed: false,
//   },
// ];

const TodoPage_s = () => {
  const [todoList, setTodoList] = useState(() => {
    return JSON.parse(localStorage.getItem('todoList')) || [];
  });

  // useEffect(() => {
  //   const todos = JSON.parse(localStorage.getItem('todoList'));
  //   if (todos) {
  //     setTodoList(todos);
  //   }
  // }, []);

  useEffect(() => {
    localStorage.setItem('todoList', JSON.stringify(todoList));
  }, [todoList]);

  const addTodo = (title) => {
    if (!title) return;
    setTodoList([
      ...todoList,
      {
        id: todoList.length + 1,
        title,
        completed: false,
      },
    ]);
  };

  const updateTodo = (title, id) => {
    if (!title) return;
    setTodoList(todoList.map((todo) => (todo.id === id ? { ...todo, title } : todo)));
  };

  const toggleTodo = (id) => {
    if (id <= 0) return;
    setTodoList(
      todoList.map((todo) => (todo.id === id ? { ...todo, completed: !todo.completed } : todo))
    );
  };

  const deleteTodo = (id) => {
    if (id <= 0) return;
    setTodoList(todoList.filter((todo) => todo.id !== id));
  };

  // console.log(images.backgoundImage);

  return (
    <div
      className={`bg-[url('${images.backgoundImage}')] bg-center bg-cover bg- w-screen h-screen flex justify-center`}
    >
      <div className="bg-white w-[360px] sm:w-[600px] p-3 pt-10 md:p-10 my-10 rounded-lg flex flex-col">
        <TodoForm_s addTodo={addTodo} />
        <TodoList
          todoList={todoList}
          updateTodo={updateTodo}
          toggleTodo={toggleTodo}
          deleteTodo={deleteTodo}
        />
      </div>
    </div>
  );
};

export default TodoPage_s;
