import React from 'react';
import EmptyTodoPlaceholder from '../../common/assets/svgs/EmptyTodoPlaceholder';

export default function EmptyToo() {
  return (
    <div className='flex h-60 w-60 flex-col items-center justify-center m-auto'>
      <EmptyTodoPlaceholder />
      <div>Great Work</div>
    </div>
  );
}
