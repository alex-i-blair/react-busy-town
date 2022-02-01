import React from 'react';

export default function OpenZoo({ isOpen }) {
  
  return <h1 className='open-sign'>{
    isOpen
      ? 'Zoo Open'
      : 'Zoo Closed'
  }
  </h1>;
}
