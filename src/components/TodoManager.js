import React, { useEffect, useState } from "react";
import { Layout, Typography, Card, Divider, message } from "antd";
import { createTodo, deleteTodoById, getAllTodos, updateTodo } from "../services/ApiService";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

const { Header, Content } = Layout;
const { Title } = Typography;

const App = () => {
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        const fetchTodos = async () => {
            try {
                const response = await getAllTodos();
                setTodos(response);
            } catch (error) {
                message.error("Failed to fetch todos.");
            }
        };
        fetchTodos();
    }, []);


    const handleCreateTodo = async (todo) => {
        try {
            const response = await createTodo(todo);
            setTodos([...todos, response]);
            message.success("Task added successfully.");
        } catch (error) {
            message.error("Failed to add task.");
        }
    };


    const handleUpdateTodo = async (id, updatedTodo) => {
        try {
            const response = await updateTodo(id, updatedTodo);
            setTodos((prev) =>
                prev.map((todo) =>
                    todo.id === id ? { ...todo, completed: response.completed } : todo
                )
            );
            message.success("Task updated successfully.");
        } catch (error) {
            message.error("Failed to update task.");
        }
    };

    const handleDeleteTodo = async (id) => {
        try {
            await deleteTodoById(id);
            setTodos((prev) => prev.filter((todo) => todo.id !== id));
            message.success("Task deleted successfully.");
        } catch (error) {
            message.error("Failed to delete task.");
        }
    };

    return (
        <Layout style={{ minHeight: "50vh", padding: "20px", background: "#f0f2g5" }}>
            <Header style={{ background: "#fff", padding: "10px 20px" }}>
                <Title level={2} style={{ textAlign: "center", margin: 0 }}>
                    Quản Lý Công Việc
                </Title>
            </Header>
            <Content style={{ maxWidth: 600, margin: "0 auto", padding: "20px" }}>
                {/* Thêm task */}
                <Card title="Thêm Công Việc" bordered={false}>
                    <TodoForm onCreateTodo={handleCreateTodo} />
                </Card>
                <Divider />
                {/* Todo List */}
                <Card title="Công Việc Cần Làm" bordered={false}>
                    <TodoList
                        todoList={todos}
                        onUpdateTodo={handleUpdateTodo}
                        onDelete={handleDeleteTodo}
                    />
                </Card>
            </Content>
        </Layout>
    );
};

export default App;
