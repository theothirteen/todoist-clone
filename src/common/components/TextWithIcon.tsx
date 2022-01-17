import React from 'react';

type TextWithIconProps = {
  iconComponent: JSX.Element;
  textComponent: JSX.Element;
  onClick: () => void;
};

export default function TextWithIcon({
  iconComponent,
  textComponent,
  onClick,
}: TextWithIconProps) {
  return (
    <>
      <div
        className='flex items-center hover:cursor-pointer hover:select-none'
        onClick={onClick}
      >
        <div className='w-6'>{iconComponent}</div>
        <div>{textComponent}</div>
      </div>
    </>
  );
}
