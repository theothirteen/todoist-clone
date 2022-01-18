import React from 'react';

type CheckboxProps = {
  isChecked: boolean;
  onChange: () => void;
};

enum CheckboxType {
  Normal = 'normal',
  Round = 'round',
}

function Checkbox({ isChecked, onChange }: CheckboxProps) {
  return (
    <div className={`inline-block min-w-40`}>
      <input type='checkbox' checked={isChecked} onChange={onChange} />
    </div>
  );
}

export { Checkbox, CheckboxType };
