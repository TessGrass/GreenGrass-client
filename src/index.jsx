import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/app/App'
/* const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />) Version 18 */
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
)
