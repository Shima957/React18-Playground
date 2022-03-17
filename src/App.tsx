import { Suspense, useState } from 'react';
import './App.css';
import { List } from './List';

function App() {
  const [count, setCount] = useState(0);
  return (
    <div className='App'>
      <Suspense fallback={<p>loading</p>}>
        <List />
      </Suspense>
      <button onClick={() => setCount((c) => c + 1)}>{count}</button>
    </div>
  );
}

export default App;
