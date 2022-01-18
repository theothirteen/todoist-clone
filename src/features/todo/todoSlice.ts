import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import type { AppState } from '../../app/store';
import Todo from './types/Todo';
import { v4 as uuidv4 } from 'uuid';

export interface TodoState {
  todos: Todo[];
}

const initialState: TodoState = {
  todos: [
    { text: 'Test Todo 1', order: 0, id: uuidv4(), isCompleted: false },
    { text: 'Test Todo 2', order: 1, id: uuidv4(), isCompleted: false },
  ],
};

export const markTodoAsCompleted = createAsyncThunk(
  'todo/markAsComplete',
  async (todoId: string) => {
    return todoId;
  }
);

export const addTodo = createAsyncThunk(
  'todo/addTodo',
  async (todoText: string) => {
    console.log('todoText: ', todoText);
    return todoText;
  }
);

export const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {},

  // In future to bind APIs thunkActions are used
  extraReducers: (builder) => {
    builder.addCase(markTodoAsCompleted.fulfilled, (state, action) => {
      if (state.todos.length > 0) {
        state.todos = state.todos.filter((todo) => todo.id !== action.payload);
      }
    });
    builder.addCase(addTodo.fulfilled, (state, action) => {
      const todo = {
        text: action.payload,
        order: state.todos.length + 1,
        id: uuidv4(),
        isCompleted: false,
      };

      state.todos.push(todo);
    });
  },
});

// export const {} = todoSlice.actions;

export const selectTodos = (state: AppState) => state.todo.todos;

export default todoSlice.reducer;
