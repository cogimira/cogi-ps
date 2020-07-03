import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App.jsx';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux'
import store from './store/index';
import CogiPS from './packages/cogi-ps';

const psVm = new CogiPS();
psVm.on("loaded", () => {
  ReactDOM.render(
    <React.StrictMode>
      <Provider store={store}>
        <App psVm={psVm}/>
      </Provider>
    </React.StrictMode>,
    document.getElementById('root')
  );
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
  serviceWorker.unregister();
});


