import React from "react";
import { Layout, Typography, Row, Col, Card, Empty } from "antd";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import useTodos from "./hooks/useTodo";

const { Content } = Layout;
const { Title } = Typography;

const App: React.FC = () => {
  const { todos, addTodo, toggleTodo, deleteTodo } = useTodos();

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Content>
        <Row justify="center" align="middle" style={{ minHeight: "100vh" }}>
          <Col xs={24} sm={20} md={16} lg={12} xl={8}>
            <Card
              bordered={false}
              style={{
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                padding: "20px",
                height: "500px",
                maxHeight: "500px",
                overflow: "hidden",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              <Title
                level={2}
                style={{ textAlign: "center", marginBottom: "20px" }}
              >
                ToDo App
              </Title>
              <TodoInput addTodo={addTodo} />
              <div
                style={{
                  height: "100%",
                  maxHeight: "300px",
                  overflowY: "auto",
                  marginTop: "20px",
                }}
              >
                {todos.length === 0 ? (
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      height: "100%",
                    }}
                  >
                    <Empty description="There is no Todo" />
                  </div>
                ) : (
                  <TodoList
                    todos={todos}
                    toggleTodo={toggleTodo}
                    deleteTodo={deleteTodo}
                  />
                )}
              </div>
            </Card>
          </Col>
        </Row>
      </Content>
    </Layout>
  );
};

export default App;
