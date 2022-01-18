import React from 'react';
import { useAppDispatch } from '../../app/hooks';
import CheckboxButton from '../../common/components/CheckboxButton';
import TextWithIcon from '../../common/components/TextWithIcon';
import { markTodoAsCompleted } from './todoSlice';
import Todo from './types/Todo';

function renderText(text: string) {
  return (
    <>
      <span className='select-none'>{text}</span>
    </>
  );
}

function renderIcon(handleChange: any) {
  return (
    <>
      <CheckboxButton onClick={handleChange} />
    </>
  );
}

function TodoItem({ text, id, isCompleted }: Todo) {
  const dispatch = useAppDispatch();

  const handleChange = () => {
    if (id) {
      dispatch(markTodoAsCompleted(id));
    }
  };

  const handleClick = () => {
    console.log('Todo Item Clicked');
  };

  return (
    <div
      className='min-h-40 border-b border-b-[#f0f0f0] pt-2 pb-2'
      key={id}
      onClick={handleChange}
    >
      <TextWithIcon
        iconComponent={renderIcon(handleChange)}
        textComponent={renderText(text)}
        onClick={handleClick}
      />
    </div>
  );
}

export default TodoItem;
