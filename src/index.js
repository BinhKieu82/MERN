import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux'
import {Provider } from 'react-redux'
import rootReducer from './reducer/rootReducer'
import App from './components/App';
import thunk from 'redux-thunk';
import {applyMiddleware} from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';


let store = createStore(
  rootReducer, 
  composeWithDevTools(applyMiddleware(thunk))
  )
//store.subscribe(() => console.log(store.getState()));


ReactDOM.render(
  <div>
    <Provider store={store}><App /></Provider>
  </div>,
  document.getElementById('root'));

                

