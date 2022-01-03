// import { useState } from 'react/cjs/react.development';
import React, {useState} from 'react';
import Alert from './components/Alert';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

import {
  Routes,
  Route
} from "react-router-dom";

function App() {

  let [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const toggleMode = () => {
    if (mode === "light") {
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode has been enabled", "success")
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white'
      showAlert("Light mode has been enabled", "success")
    }
  }

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })

    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }

  return (
    <>
      <Navbar title="TextUtils" aboutText="About TextUtils" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      
      <div className="container my-3">
        <Routes>
          <Route path="/" element={<TextForm heading="Try TextUtils - Word Counter, Character counter, Remove extra spaces" mode={mode} showAlert={showAlert} />} />
          <Route path="about" element={<About mode={mode} />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
