import React from 'react';

import EmptyToo from './EmptyTodo';
import TodoItem from './TodoItem';
import Todo from './types/Todo';
import { selectTodos } from './todoSlice';
import { useAppSelector } from '../../app/hooks';
import TodoCreate from './TodoCreate';

function renderTodos(todos: Todo[]) {
  return todos.map((todo: Todo) => {
    return (
      <TodoItem
        text={todo.text}
        order={todo.order}
        id={todo.id}
        isCompleted={todo.isCompleted}
        key={todo.id}
      />
    );
  });
}

function TodoList() {
  const todos = useAppSelector(selectTodos);

  return (
    <>
      {todos.length > 0 && renderTodos(todos)}
      <TodoCreate />
      {todos.length === 0 && <EmptyToo />}
    </>
  );
}

export default TodoList;
