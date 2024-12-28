import React from "react";
import { List, Button, Checkbox, Typography } from "antd";
import { DeleteOutlined } from "@ant-design/icons";

const { Text } = Typography;

const TodoItem = ({ todo, onUpdateTodo, onDelete }) => {
    const handleCheckboxChange = () => {
        const updatedTodo = { ...todo, completed: !todo.completed };
        onUpdateTodo(todo.id, updatedTodo);
    };

    return (
        <List.Item
            actions={[
                <Button
                    danger
                    icon={<DeleteOutlined />}
                    onClick={() => onDelete(todo.id)}
                >
                    Delete
                </Button>,
            ]}
        >
            <Checkbox checked={todo.completed} onChange={handleCheckboxChange} />
            <Text
                style={{
                    marginLeft: 12,
                    textDecoration: todo.completed ? "line-through" : "none",
                }}
            >
                {todo.title}
            </Text>
        </List.Item>
    );
};

export default TodoItem;
