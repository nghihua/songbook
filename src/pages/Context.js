import React, {useState, useReducer} from 'react';
import logo from '../logo.svg';
import '../styles/Redux.css';

export default function Context() {

  const reducer = (state, action) => {
    switch (action.type) {
      case 'increment':
        return { count: state.count + 1 };
      case 'decrement':
        return { count: state.count - 1 };
      default:
        return state;
    }
  }

  const [state, dispatch] = useReducer(reducer, { count: 0 });

  const increment = () => {
    dispatch( {type: 'increment'} );
  }

  const decrement = () => {
    dispatch( {type: 'decrement'} );
  }

  const [incrementAmount, setIncrementAmount] = useState(0);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />


        <div>
          <div className="row">
            <button
              className="button"
              aria-label="Decrement value"
              onClick={decrement}
            >
              -
            </button>
            <span className="value">{state.count}</span>
            <button
              className="button"
              aria-label="Increment value"
              onClick={increment}
            >
              +
            </button>
          </div>
          <div className="row">
            <input
              className="textbox"
              aria-label="Set increment amount"
              value={incrementAmount}
            />
            <button
              className="button"
            >
              Add Amount
            </button>

            <button
              className="button"
            >
              Add Async
            </button>

            <button
              className="button"
            >
              Add If Odd
            </button>
          </div>
        </div>




        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <span>
          <span>Learn </span>
          <a
            className="App-link"
            href="https://reactjs.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            React
          </a>
          <span>, </span>
          <a
            className="App-link"
            href="https://redux.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Redux
          </a>
          <span>, </span>
          <a
            className="App-link"
            href="https://redux-toolkit.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Redux Toolkit
          </a>
          ,<span> and </span>
          <a
            className="App-link"
            href="https://react-redux.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            React Redux
          </a>
        </span>
      </header>
    </div>
  );
}
