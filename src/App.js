import './App.css';
import { useState } from 'react';

function App() {
  const [pandaSize, setPandaSize] = useState(2);
  const [dolphinSize, setDolphinSize] = useState(2);
  const [isOpen, setIsOpen] = useState(false);
  const [animalArray, setAnimalArray] = useState('bat', 'squirrel');

  const stylePanda = { fontSize: `${pandaSize}rem` };
  const styleDolphin = { fontSize: `${dolphinSize}rem` };
  return (
    <div className="App">
      <section className='fight'>
        <div className='panda'>
          <p style={stylePanda}>🐼</p>
          <button onClick={() => setPandaSize(pandaSize + 1)}>Panda gets stronger</button>
          <button onClick={() => setDolphinSize(dolphinSize - 1)}>Panda attacks Dolphin</button>
        </div>
        <div className='dolphin'>
          <p style={styleDolphin}>🐬</p>
          <button onClick={() => setDolphinSize(dolphinSize + 1)}>Dolphin gets stronger</button>
          <button onClick={() => setPandaSize(pandaSize - 1)}>Dolphin attacks panda</button>
        </div>
      </section>
    </div>
  );
}

export default App;
