import React from 'react';
import { hot } from 'react-hot-loader/root';
import natureImage from '@static/images/nature.png';

interface AppProps {
  title?: string;
}

interface AppState {
  counter: number;
}

class App extends React.Component<AppProps, AppState> {
  readonly state: AppState = { counter: 0 };

  render() {
    return (
      <div className='container'>
        <h2>
          React Webpack Typescript - 2020 <img src={natureImage} width='38px' />
        </h2>
        <p>
          Minimal boilerplate for writing Web Applications using React, Webpack,
          TypeScript. This project makes use of "latest" packages like `react`,
          `typescript` with `webpack` to serve the best environment for
          development.
        </p>
        <p>Click below button to update the counter state:</p>
        <button
          onClick={() => this.setState({ counter: this.state.counter + 1 })}
        >
          Counter <span>{this.state.counter}</span>
        </button>
      </div>
    );
  }
}

export default hot(App);
