import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {createStore} from "redux";


//Store well the place where we store data 

//action
const increment = () =>
{
  return {
    type: "INCREMENT"
  }
} 

const decrement = () => {

  return {

    type: "DECREMENT"
  }
}
//reducer will tell us what is suposed to happen when we perform on a action 

const counter = (state=0, action) =>{

  switch(action.type)
  {
    case "INCREMENT" : return state+1;
    case "DECREMENT" : return state-1;
  }
} 
 let store = createStore(counter)
// to display our counter in the console window
store.subscribe(() => console.log(store.getState()));

//  dispatcher
store.dispatch(increment());
store.dispatch(increment());
store.dispatch(increment());
store.dispatch(increment());
store.dispatch(decrement());
store.dispatch(decrement());
store.dispatch(decrement());


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
