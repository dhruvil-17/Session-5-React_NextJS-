import React, { useState } from 'react';

function Child({ onMessageChange }) {
  return (
    <input
      type="text"
      placeholder="Type something..."
      onChange={(e) => onMessageChange(e.target.value)}
    />
  );
}

export default function LiftingStateExample() {
  const [message, setMessage] = useState('');
  return (
    <div>
      <Child onMessageChange={setMessage} />
      <p>Message from Child: {message}</p>
    </div>
  );
}
