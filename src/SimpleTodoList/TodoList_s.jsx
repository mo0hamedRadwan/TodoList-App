import TodoItem_s from './TodoItem_s';

const TodoList_s = ({ todoList, updateTodo, toggleTodo, deleteTodo }) => {
  return todoList && todoList.length > 0 ? (
    <ul className="flex flex-col gap-2">
      {todoList.map((todo) => (
        <TodoItem_s
          todo={todo}
          updateTodo={updateTodo}
          toggleTodo={toggleTodo}
          deleteTodo={deleteTodo}
          key={todo.id}
        />
      ))}
    </ul>
  ) : (
    <p className="text-gray-500 flex justify-center">Todo List is Empty</p>
  );
};

export default TodoList_s;
