import React from 'react';
import './style.css';
const initialState = {
  count: 1,
};
const counterReducer = (state, action) => {
  if ((action.type = 'inc')) {
    return { ...state, count: state.count + 1 };
  }
  return state;
};
export default function App() {
  const [counter, dispatch] = React.useReducer(counterReducer, initialState);
  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <h1>Count:{counter.count}</h1>
      <button
        onClick={() => {
          dispatch({ type: 'inc' });
        }}
      >
        Increment
      </button>
    </div>
  );
}
