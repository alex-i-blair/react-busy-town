import React from 'react';

export default function OpenZoo({ isOpen }) {
  
  return <div className='open-sign'>{
    isOpen
      ? 'Zoo Open'
      : 'Zoo Closed'
  }
  </div>;
}
