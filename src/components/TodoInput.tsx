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

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      event.preventDefault();
      handleAddTodo();
    }
  };

  return (
    <div style={{ display: "flex", gap: "10px" }}>
      <Input
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onKeyUp={handleKeyDown} // 'Enter' 키 입력 감지
        placeholder="할 일을 입력하세요"
        autoFocus
      />
      <Button type="primary" onClick={handleAddTodo}>
        +
      </Button>
    </div>
  );
};

export default TodoInput;
