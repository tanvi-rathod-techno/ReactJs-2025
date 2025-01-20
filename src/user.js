import './App.css';
import React, { useEffect } from 'react'


function App(props) {

  useEffect(() => {
    console.warn("use effect")
  },[props.count,props.data])

  return (
    <div className="App">
        <h1>Count Props: {props.count}</h1>
        <h1>Data Props: {props.data}</h1>
    </div>
  );
}

export default App;
