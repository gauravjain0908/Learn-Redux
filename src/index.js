import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {createStore} from "redux";


//Store well the place where we store data 

let store = createStore(counter)

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

//  

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

