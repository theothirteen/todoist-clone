import React, { useState } from 'react';

import { useAppDispatch } from '../../app/hooks';
import PlusIcon from '../../common/assets/svgs/PlusIcon';
import TextWithIcon from '../../common/components/TextWithIcon';
import TodoCreateTextbox from './TodoCreateTextbox';
import { addTodo } from './todoSlice';

function renderIcon() {
  return (
    <div className='pl-1'>
      <PlusIcon />
    </div>
  );
}

function renderText(text: string) {
  return <span>{text}</span>;
}

function TodoCreate() {
  const dispatch = useAppDispatch();

  const [isTodoCreateActive, setIsTodoCreateActive] = useState(false);
  const [text, settext] = useState('');

  const onChange = (value: string) => {
    settext(value);
  };

  const onSubmit = async () => {
    await dispatch(addTodo(text));
    settext('');
  };

  const handleClick = () => {
    setIsTodoCreateActive(!isTodoCreateActive);
  };

  return isTodoCreateActive ? (
    <TodoCreateTextbox
      value={text}
      onCancel={handleClick}
      onChange={onChange}
      onSubmit={onSubmit}
    />
  ) : (
    <div className='text-on-background-varient hover:text-primary'>
      <TextWithIcon
        iconComponent={renderIcon()}
        textComponent={renderText('Add a task')}
        onClick={handleClick}
      />
    </div>
  );
}

export default TodoCreate;
