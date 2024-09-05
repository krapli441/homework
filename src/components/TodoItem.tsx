import React from "react";
import { List, Checkbox, Button } from "antd";
import { DeleteOutlined } from "@ant-design/icons"; // Ant Design 아이콘 import

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
        <Button
          type="primary"
          danger
          shape="circle"
          icon={<DeleteOutlined />}
          onClick={() => deleteTodo(todo.id)}
          style={{
            backgroundColor: "red",
            borderColor: "red", 
            color: "white",
          }}
        />,
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
