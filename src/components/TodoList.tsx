import React from "react";
import { List } from "antd";
import TodoItem from "./TodoItem";

interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

interface TodoListProps {
  todos: Todo[];
  toggleTodo: (id: number) => void;
  deleteTodo: (id: number) => void;
}

const TodoList: React.FC<TodoListProps> = ({
  todos,
  toggleTodo,
  deleteTodo,
}) => {
  return (
    <List
      bordered
      dataSource={todos}
      renderItem={(todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          toggleTodo={toggleTodo}
          deleteTodo={deleteTodo}
        />
      )}
    />
  );
};

export default TodoList;
