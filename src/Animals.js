import React from 'react';

export default function Animals({ animal }) {
  return <span>
    {animal === 'frog' && '🐸'}
    {animal === 'parrot' && '🦜'}
    {animal === 'octopus' && '🐙'}
    {animal === 'kangaroo' && '🦘'}
  </span>;
}
