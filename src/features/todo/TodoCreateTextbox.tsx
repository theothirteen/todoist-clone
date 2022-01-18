import React from 'react';

import Button, { ButtonVarient } from '../../common/components/buttons/Button';
import TextInput, { BorderType } from '../../common/components/TextInput';

type TodoCreateTextboxProps = {
  value: string;
  onSubmit: () => void;
  onChange: (value: string) => void;
  onCancel: () => void;
};

export default function TodoCreateTextbox({
  value,
  onSubmit,
  onChange,
  onCancel,
}: TodoCreateTextboxProps) {
  return (
    <>
      <div className={`w-full border border-solid mt-2 p-1`}>
        <TextInput
          onChange={onChange}
          onSubmit={onSubmit}
          value={value}
          outline={BorderType.None}
        />
      </div>
      <div className='flex w-40 mt-2'>
        <Button
          onClick={onSubmit}
          varient={ButtonVarient.Primary}
          text='Add Task'
          style='mr-2'
        />
        <Button
          onClick={onCancel}
          varient={ButtonVarient.Secondary}
          text='Cancel'
        />
      </div>
    </>
  );
}
