export const BASE_URL = "https://dummyjson.com/todos";

export const fetchTodos = async (skip = 0, limit = 10) => {
    try {
      const response = await fetch(`${BASE_URL}?skip=${skip}&limit=${limit}`);
      const data = await response.json();
      return data.todos.map((todo) => ({
        ...todo,
        status: todo.completed ? 'Completed' : 'Pending',
      }));
    } catch (error) {
      console.error('Error fetching todos:', error);
      return [];
    }
  };
  
  export const updateTodoStatus = async (id, newStatus) => {
    try {
      await fetch(`${BASE_URL}/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ completed: newStatus === 'Completed' }),
      });
    } catch (error) {
      console.error('Error updating todo:', error);
    }
  };
  
  export const addTodo = async (status, newTodo) => {
    try {
      const response = await fetch(`${BASE_URL}/add`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          todo: newTodo,
          completed: status === 'Completed',
          userId: 1,
        }),
      });
      return await response.json();
    } catch (error) {
      console.error('Error adding todo:', error);
      return null;
    }
  };
  
  export const editTodo = async (id, updatedTodo) => {
    try {
      await fetch(`${BASE_URL}/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ todo: updatedTodo }),
      });
    } catch (error) {
      console.error('Error editing todo:', error);
    }
  };
  
  export const deleteTodo = async (id) => {
    try {
      await fetch(`${BASE_URL}/${id}`, { method: 'DELETE' });
    } catch (error) {
      console.error('Error deleting todo:', error);
    }
  };