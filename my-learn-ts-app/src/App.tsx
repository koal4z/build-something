import React, { useState } from 'react';
import './App.css';
import List from './list';

const strings = ['React', 'TypeScript', '❤️'];

interface App {
  counter: number;
}

function App() {
  let [counter, setCounter] = useState<number>(0);
  const add = () => {
    setCounter((counter += 1));
  };
  return (
    <div className='App'>
      <List labels={strings} />
      {counter}
      <button onClick={add}>+</button>
    </div>
  );
}

export default App;
