import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

function Home() { return <h3>🏠 Home Page</h3>; }
function About() { return <h3>ℹ️ About Page</h3>; }

export default function RouterExample() {
  return (
    <BrowserRouter>
      <nav style={{ marginBottom: '10px' }}>
        <Link to="/">Home</Link> |{" "}
        <Link to="/about">About</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}
