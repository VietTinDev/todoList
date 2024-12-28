import axios from "axios";
const baseUrl = "http://localhost:8080/api/todos";

export const createTodo = async (todo) => {
  try {
    const response = await axios.post(baseUrl+"/create", todo);
    return response.data;
  } catch (error) {
    console.error("Failed to create todo:", error);
    throw error;
  }
};

export const getAllTodos = async () => {
  try {
    const response = await axios.get(baseUrl+"/get-all");
    return response.data;
  } catch (error) {
    console.error("Failed to fetch todos:", error);
    throw error;
  }
};

export const updateTodo = async (id, todo) => {
  try {
    const response = await axios.put(baseUrl+`/update/${id}`, todo);
    return response.data;
  } catch (error) {
    console.error("Failed to update todo:", error);
    throw error;
  }
};

export const deleteTodoById = async (id) => {
  try {
    await axios.delete(baseUrl+`/${id}`);
  } catch (error) {
    console.error("Failed to delete todo:", error);
    throw error;
  }
};
