import React from 'react';
import Checkbox from '../assets/svgs/Checkbox';
import styles from '../../styles/Todo.module.css';

type CheckboxButtonProps = {
  onClick: () => void;
};

// Special Button which will be used as Checkbox
export default function CheckboxButton({ onClick }: CheckboxButtonProps) {
  return (
    <div
      className='h-5 w-5 rounded-full border-solid border border-[grey]'
      onClick={onClick}
    >
      <button>
        <div
          className={`m-[-3px] opacity-0 rounded-full hover:opacity-100  bg-transparent hover:bg-[rgba(128,128,128,0.2)] overflow-hidden ${styles.checkboxRound}`}
        >
          <Checkbox />
        </div>
      </button>
    </div>
  );
}
