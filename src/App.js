import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect , createContext} from 'react';
import Test from './Test'
import User from './user';
import Child from './Child';
import Superchild from './Superchild';

export const GlobalInfo = createContext();

function App() {
  const [data, setData] = useState("this my app")
  const [count, setCount] = useState(10);
  const [data1,setData1] = useState(100);
  const [color,setColor] = useState('green');

  
  // useEffect(() => {
  //   // alert("chalega")  
  //   // console.log("user effect");
  //   setTimeout(() => {
  //     setCount((count) => count + 1)
  //   }, 1000,[data1])
  // })

  useEffect(() => {
    console.log("use effect")
  },[data1])

  function hello(){
   return  <h1>hello function</h1>
  } 

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <GlobalInfo.Provider value={{ appColor : color }}>
        <h6>child component</h6>
        <Child /> 
        </GlobalInfo.Provider>
        <p> {data} {count}</p>
        <h4>{data1}</h4>
        <Test />
        <User count={count} data={data}/>
        {hello ()}
        <button onClick={() => setData('new App')}>Update Data</button>
        <button onClick={() => setCount(count + 1)}>Update Count useEffect</button>
        <button onClick={() => setData1(data1 + 1)}>Update Count</button>
      </header>
    </div>
  );
}

export default App;
