import React from 'react';
import ReactDOM from 'react-dom';
import App from '@components/App';
import './styles/css/reset.css';

ReactDOM.render(<App />, document.getElementById('app'));

/** Hot Module Replacement */
if (process.env.NODE_ENV == 'development' && module.hot) {
  module.hot.accept();
}
