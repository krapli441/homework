import React from "react";
import { List, Checkbox, Button } from "antd";

interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

interface TodoItemProps {
  todo: Todo;
  toggleTodo: (id: number) => void;
  deleteTodo: (id: number) => void;
}

const TodoItem: React.FC<TodoItemProps> = ({
  todo,
  toggleTodo,
  deleteTodo,
}) => {
  return (
    <List.Item
      actions={[
        <Button type="link" danger onClick={() => deleteTodo(todo.id)}>
          삭제
        </Button>,
      ]}
    >
      <Checkbox checked={todo.completed} onChange={() => toggleTodo(todo.id)}>
        <span
          style={{ textDecoration: todo.completed ? "line-through" : "none" }}
        >
          {todo.text}
        </span>
      </Checkbox>
    </List.Item>
  );
};

export default TodoItem;
