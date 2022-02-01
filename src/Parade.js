import React from 'react';
import Animals from './Animals';

export default function Parade({ animalArray }) {
  return <div className='animal-parade'>
    {animalArray.map((animal, i) =>
      <Animals key={animal + i} animal={animal} />)}
  </div>;
}
