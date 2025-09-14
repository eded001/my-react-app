import { useState } from 'react';
import './App.css';

function App() {
  const [counter, setCounter] = useState(0);

  return (
    <div className="App">
      <h1>Counter</h1>

      <section>
        <p className='counterNum'>{counter}</p>
        <section className='buttonSection'>
          <button onClick={() => setCounter(counter - 1)} className='counters counterDecrement'>-</button>
          <button onClick={() => setCounter(counter + 1)} className='counters counterIncrement'>+</button>
        </section>
      </section>
    </div>
  );
}

export default App;