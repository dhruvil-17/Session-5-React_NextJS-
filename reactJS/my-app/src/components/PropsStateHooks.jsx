import React, { useState, useEffect } from 'react';

function Greeting({ name }) {
  return <h4>Hello, {name}!</h4>;
}

export default function PropsStateHooks() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `Clicked ${count} times`;
  }, [count]);

  return (
    <div>
      <Greeting name="Dhruvil" />
      <p>Clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}
