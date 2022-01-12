import { createSlice } from '@reduxjs/toolkit';
import type { AppState } from '../../app/store';
import Todo from './types/Todo';

export interface CounterState {
  todos: Todo[];
}

const initialState: CounterState = {
  todos: [],
};

export const todoSlice = createSlice({
  name: 'counter',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    addTodo: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.todos = [];
    },
    removeTodo: (state) => {
      state.todos = [];
    },
  },
});

export const { addTodo, removeTodo } = todoSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const selectTodos = (state: AppState) => state.todo.todos;

export default todoSlice.reducer;
