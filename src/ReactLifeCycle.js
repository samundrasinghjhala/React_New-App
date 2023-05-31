
import './App.css';
import TestClassCompo from './TestClassCompo';
import { useEffect, useState } from 'react';


function ReactLifeCycle() {
  const [test, setTest] = useState(true);

  const incrementCounter = () => {
    setTimeout(() => {
      setTest(false)
    }, 10000);
  }

  useEffect(() => {
    incrementCounter()
  }, [test])

  return (
    <div className="App">
      <header className="App-header">
        <h1>React Life Cycle</h1>
        {test && <TestClassCompo />}
      </header>
    </div>
  );
}

export default ReactLifeCycle;
