import React from 'react';
import {useSelector, useDispatch} from "react-redux";
import {increment,decrement} from "./Actions";


function App() {
  
  const counter = useSelector(state => state.counter)
  const isLogged = useSelector(state => state.isLogged);
  const dispatch = useDispatch();
  return (
   
    <>
    <div className= "App">

      <h1> Counter {counter} </h1>
      <button onClick = {() => dispatch(increment())}> + </button>
      <button onClick = {() => dispatch(decrement())}> - </button>
      {isLogged ? <h3> For authorized personel only </h3> : " "}
      </div>
    </>
  );
  
}

export default App;
