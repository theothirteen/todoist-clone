import React, { ChangeEvent, useCallback } from 'react';
import debounce from 'lodash.debounce';

type TextInputProps = {
  value: string;
  onChange: (e: any) => void;
  onSubmit: () => void;
  inputWidth?: InputWidth;
  outline?: OutlineType;
};

enum InputWidth {
  full = 'w-full',
}

enum OutlineType {
  None = 'outline-0',
}

export default function TextInput({
  onChange,
  value,
  onSubmit,
  inputWidth = InputWidth.full,
  outline,
}: TextInputProps) {
  //TODO: Update event type
  const handleKeyUp = (e: any) => {
    if (e.key === 'Enter') {
      onSubmit();
    }
  };

  const handleChange = (event: any) => {
    const { value } = event.target;
    onChange(value);
  };

  return (
    <div>
      <input
        type='text'
        value={value}
        onChange={handleChange}
        onKeyUp={handleKeyUp}
        className={`${inputWidth} ${outline}`}
      />
    </div>
  );
}

export { TextInput, OutlineType as BorderType };
