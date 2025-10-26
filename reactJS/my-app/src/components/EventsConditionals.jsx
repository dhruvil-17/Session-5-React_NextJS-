import React, { useState } from 'react';

export default function EventsConditionals() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const users = ["Dhruvil", "Raj", "Mihir"];

  const toggleLogin = () => setIsLoggedIn(!isLoggedIn);

  return (
    <div>
      <button onClick={toggleLogin}>
        {isLoggedIn ? "Logout" : "Login"}
      </button>

      {isLoggedIn ? <p>Welcome Back!</p> : <p>Please log in.</p>}

      <ul>
        {users.map((user, index) => (
          <li key={index}>{user}</li>
        ))}
      </ul>
    </div>
  );
}
