import axios, { AxiosResponse } from 'axios';

interface Todo {
  id?: number;
  task_name: string;
  description: string;
  is_completed: boolean;
  created_at?: string;
}

const API_URL = 'https://64acda339edb4181202fe0c5.mockapi.io/todo';

export const fetchTodos = async (): Promise<Todo[]> => {
  try {
    const response: AxiosResponse<Todo[]> = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error('Error fetching todos:', error);
    throw error;
  }
};

export const createTodo = async (todo: Todo): Promise<Todo> => {
  try {
    const response: AxiosResponse<Todo> = await axios.post(API_URL, todo);
    return response.data;
  } catch (error) {
    console.error('Error creating todo:', error);
    throw error;
  }
};

export const updateTodo = async (id: number, todo: Todo): Promise<Todo> => {
  try {
    const response: AxiosResponse<Todo> = await axios.put(`${API_URL}/${id}`, todo);
    return response.data;
  } catch (error) {
    console.error('Error updating todo:', error);
    throw error;
  }
};

export const deleteTodo = async (id: number): Promise<void> => {
  try {
    await axios.delete(`${API_URL}/${id}`);
  } catch (error) {
    console.error('Error deleting todo:', error);
    throw error;
  }
};
