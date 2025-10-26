import React from 'react';
import { Provider, useDispatch, useSelector } from 'react-redux';
import { store, increment, decrement } from './store';

function Counter() {
  const count = useSelector((state) => state.value);
  const dispatch = useDispatch();
  return (
    <div>
      <h3>Count: {count}</h3>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>−</button>
    </div>
  );
}

export default function ReduxExample() {
  return (
    <Provider store={store}>
      <Counter />
    </Provider>
  );
}
