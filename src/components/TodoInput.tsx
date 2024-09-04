import React, { useState } from "react";
import { Input, Button } from "antd";

interface TodoInputProps {
  addTodo: (text: string) => void;
}

const TodoInput: React.FC<TodoInputProps> = ({ addTodo }) => {
  const [inputValue, setInputValue] = useState("");

  const handleAddTodo = () => {
    if (inputValue.trim()) {
      addTodo(inputValue);
      setInputValue("");
    }
  };

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      handleAddTodo();
    }
  };

  return (
    <div style={{ display: "flex", gap: "10px" }}>
      <Input
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onKeyDown={handleKeyPress}
        placeholder="할 일을 입력하세요"
        autoFocus
      />
      <Button type="primary" onClick={handleAddTodo}>
        추가
      </Button>
    </div>
  );
};

export default TodoInput;
