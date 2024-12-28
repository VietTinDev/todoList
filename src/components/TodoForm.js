import React, { useState } from "react";
import { Form, Input, Button, message } from "antd";

const TodoForm = ({ onCreateTodo }) => {
    const [title, setTitle] = useState("");

    const handleSubmit = async () => {
        if (!title.trim()) {
            message.warning("Please enter a task name.");
            return;
        }

        try {
            const newTodo = { title, completed: false };
            await onCreateTodo(newTodo);
            setTitle("");
            message.success("Task added successfully.");
        } catch (error) {
            message.error("Failed to add task.");
        }
    };

    return (
        <Form layout="vertical" onFinish={handleSubmit}>
            <Form.Item
                label="Tên Công Việc"
                rules={[{ required: true, message: "Vui lòng nhập tên công việc!" }]}>
                <Input
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="Nhập tên công việc"
                />
            </Form.Item>
            <Button type="primary" htmlType="submit" block>
                Thêm Công Việc
            </Button>
        </Form>
    );
};

export default TodoForm;
