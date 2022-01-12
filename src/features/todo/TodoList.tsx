import React from 'react';
import { useAppSelector } from '../../app/hooks';
import EmptyToo from './EmptyTodo';
import { selectTodos } from './todoSlice';

function TodoList() {
  const todos = useAppSelector(selectTodos);
  return todos.length > 0 ? <div></div> : <EmptyToo />;
}

export default TodoList;
