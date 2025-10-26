import React from 'react';
import ReactDOM from 'react-dom/client';
import PropsStateHooks from './components/PropsStateHooks';
import EventsConditionals from './components/EventsConditionals';
import LiftingStateExample from './components/LiftingStateExample';
import RouterExample from './components/RouterExample';
import CSSModulesExample from './components/CSSModulesExample';
import ReduxExample from './components/ReduxExample';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div style={{ padding: '20px' }}>
      <h1>React Core Concepts Example 🚀</h1>
      <PropsStateHooks />
      <EventsConditionals />
      <LiftingStateExample />
      <RouterExample />
      <CSSModulesExample />
      <ReduxExample />
    </div>
  </React.StrictMode>
);
