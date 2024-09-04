import React from "react";
import { Layout, Typography } from "antd";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import useTodos from "./hooks/useTodo";

const { Header, Content } = Layout;
const { Title } = Typography;

const App: React.FC = () => {
  const { todos, addTodo, toggleTodo, deleteTodo } = useTodos();

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Header>
        <Title style={{ color: "white", textAlign: "center" }}>
          To - Do List
        </Title>
      </Header>
      <Content style={{ padding: "20px", maxWidth: "600px", margin: "0 auto" }}>
        <TodoInput addTodo={addTodo} />
        <TodoList
          todos={todos}
          toggleTodo={toggleTodo}
          deleteTodo={deleteTodo}
        />
      </Content>
    </Layout>
  );
};

export default App;
