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

const commonStyle = 'pl-2 pr-2 rounded-md h-8';

export default function Button({ varient, text, onClick, style }: ButtonProps) {
  return varient === ButtonVarient.Primary ? (
    <button
      onClick={onClick}
      className={`${commonStyle} ${style} bg-[#db4c3f] text-white `}
    >
      {text}
    </button>
  ) : (
    <button
      onClick={onClick}
      className={`${commonStyle} ${style} border border-[#d6d6d6] hover:border-[#bdbdbd] hover:bg-[#ebebeb]`}
    >
      {text}
    </button>
  );
}

export { Button, ButtonVarient };
