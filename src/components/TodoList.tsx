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
    <div style={{ maxHeight: "300px", overflowY: "auto" }}>
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
        locale={{ emptyText: "There is no ToDo" }} // ToDo가 없을 때 표시되는 텍스트
      />
    </div>
  );
};

export default TodoList;
