import './App.css';
import React from 'react';
import  { atom ,useAtom }  from 'jotai';

//count
const counter = atom(0);

// them
const theme = atom('light');
function App() {

  // counter
  // const [count,setcount] = useAtom(counter); 
  // const onclick= () => setcount(counter => counter + 

  // them
  const [appTheme,setAppTheme] = useAtom(theme)
  const handalclick = () => setAppTheme(appTheme === 'light' ? 'dark' : 'light');

  return (
    <div className={`App ${appTheme}`}>
        <h1>atom</h1>

        {/* <h2>{count}</h2> */}
        {/* <button onClick={onclick}>Add </button> */}

        {/* theme */}
        <button onClick={handalclick}>{appTheme === 'light' ? 'DARK' : 'Light'} </button>
    </div>
  );
}

export default App;
