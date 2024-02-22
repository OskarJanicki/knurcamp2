import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Wartość licznika: {count}</p>
      <button onClick={() => setCount(count + 1)}>Zwiększ licznik</button>
    </div>
  );
}



function App() {
  return (
    <div className="App">
      <Counter />
    </div>
  );
}

export default App;
