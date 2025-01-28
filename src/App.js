import './App.css';
import React from 'react';
import  { atom ,useAtom }  from 'jotai';


const textAtom = atom('ready only')
const uppercase = atom((get) => get(textAtom).toUpperCase());

function App() {

    const [lowerCase,setUpperCase] = useAtom(textAtom);
    const [uppercaseText] = useAtom(uppercase);
    const handleChange = (e) => setUpperCase(e.target.value);
  return (
    <div className='App'>
        <h1>Read Only Atom</h1>
        <input value={lowerCase} onChange={handleChange} />
      <h1>{uppercaseText}</h1>
    </div>
  );
}

export default App;
