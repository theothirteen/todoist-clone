import React from 'react';

type ButtonProps = {
  varient: ButtonVarient;
  text: string;
  onClick: () => void;
  style?: string;
};

enum ButtonVarient {
  Primary,
  Secondary,
}

export default function Button({ varient, text, onClick, style }: ButtonProps) {
  return varient === ButtonVarient.Primary ? (
    <button onClick={onClick} className={`btn btn-primary ${style}`}>
      {text}
    </button>
  ) : (
    <button onClick={onClick} className={`btn btn-secondary ${style}`}>
      {text}
    </button>
  );
}

export { Button, ButtonVarient };
