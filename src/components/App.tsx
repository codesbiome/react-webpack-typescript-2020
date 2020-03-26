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
      <div>
        Application Components
        <button
          onClick={() => this.setState({ counter: this.state.counter + 1 })}
        >
          Counter: {this.state.counter}
        </button>
        <img src={natureImage} />
      </div>
    );
  }
}

export default hot(App);
