import './App.css';
import { useState } from 'react';

function App() {
  const [pandaSize, setPandaSize] = useState(1);
  const [dolphinSize, setDolphinSize] = useState(1);
  const [isOpen, setIsOpen] = useState(false);
  const [animalArray, setAnimalArray] = useState('bat', 'squirrel');

  return (
    <div className="App">
      
    </div>
  );
}

export default App;
