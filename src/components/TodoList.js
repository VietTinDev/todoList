import React from "react";
import { List } from "antd";
import TodoItem from "./TodoItem";

const TodoList = ({ todoList, onUpdateTodo, onDelete }) => {
    return (
        <List
            bordered
            dataSource={todoList}
            renderItem={(todo) => (
                <TodoItem
                    key={todo.id}
                    todo={todo}
                    onUpdateTodo={onUpdateTodo}
                    onDelete={onDelete}
                />
            )}
        />
    );
};

export default TodoList;
