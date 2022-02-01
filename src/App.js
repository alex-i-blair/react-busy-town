import './App.css';
import { useState } from 'react';
import OpenZoo from './OpenZoo';

function App() {
  const [pandaSize, setPandaSize] = useState(2);
  const [dolphinSize, setDolphinSize] = useState(2);
  const [isOpen, setIsOpen] = useState(false);
  const [animalArray, setAnimalArray] = useState('bat', 'squirrel');

  const stylePanda = { fontSize: `${pandaSize}rem` };
  const styleDolphin = { fontSize: `${dolphinSize}rem` };

  const decreasePanda = () => {
    if (pandaSize > 1){
      setPandaSize(pandaSize - 1);
    } else {
      setPandaSize(0);
      setDolphinSize(5);
      alert('Panda has died!');
    }
  };
  const decreaseDolphin = () => {
    if (dolphinSize > 1){
      setDolphinSize(dolphinSize - 1);
    } else {
      setDolphinSize(0);
      setPandaSize(5);
      alert('Dolphin has died!');
    }
  };

  return (
    <div className="App">
      <section className='fight'>
        <div className='animal'>
          <p style={stylePanda}>🐼</p>
          <button onClick={() => setPandaSize(pandaSize + 1)}>Panda gets stronger</button>
          <button onClick={() => decreaseDolphin()}>Panda attacks Dolphin</button>
        </div>
        <div className='animal'>
          <p style={styleDolphin}>🐬</p>
          <button onClick={() => setDolphinSize(dolphinSize + 1)}>Dolphin gets stronger</button>
          <button onClick={() => decreasePanda()}>Dolphin attacks panda</button>
        </div>
      </section>
      <section className='open-sign'>
        <OpenZoo isOpen={isOpen} />
        <div>
          <button onClick={() => setIsOpen(true)}>Open Zoo</button>
          <button onClick={() => setIsOpen(false)}>Close Zoo</button>
        </div>
      </section>
      <section className='parade'>
        <Pararde animalArray = {animalArray} />
      </section>
    </div>
  );
}

export default App;
