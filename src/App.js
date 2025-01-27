import './App.css';

import React, { Component } from 'react';

class App extends React.Component{
  
  constructor(){
    super();
    console.warn("constructor")
  }

  componentDidMount(){
    console.warn("componentDidMount")
  }

  render(){
    console.warn("render")
      return (
        <div>
          <h1>Life Cycle Method</h1>
        </div>
      );
    }
  }


// function App() {
//   return (
//     <div className="App">
//       <h1>React Life Cycle</h1>
//     </div>
//   );
// }

export default App;
