import './App.css';
import React, { useState } from 'react';
import Navbar from './components/navbar';
import TextArea from './components/TextArea';

function App() {

  const [mode, setMode] = useState("dark");

  const toggleMode = () => {
    if(mode === "light"){
      setMode("dark");
      document.body.style.backgroundColor = 'white';
      document.body.style.color = 'black';
    }
    else{
      setMode("light");
      document.body.style.backgroundColor = 'black';
      document.body.style.color = 'white';
    }
  }

  return (
    <>

    <Navbar title="Anas" toggleMode={toggleMode} mode={mode} />
    <TextArea mode={mode} />
 
    </>
  );
}

export default App;
