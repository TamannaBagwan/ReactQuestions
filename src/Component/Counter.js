import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  function updateCounterDirectly() {
    console.log('update');
    count = count + 1;

  }

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => updateCounterDirectly()}>
        Update Counter Directly
      </button>
    </div>
  );
}

export default Counter;
