import './App.css';
import About from './components/About';
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  // Link
} from "react-router-dom";

function App() {
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 2000)
  }

  const [mode, setMode] = useState('light');

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#042743'
      showAlert("Darkmode has been Enabled", "success")
    }
    else {
      setMode('light')
      document.body.style.backgroundColor = 'White'
      showAlert("Lightmode has been Enabled", "success")
    }
  }
  return (
    <>
      <Router>
        <Navbar title="TextUtils" aboutText="About Us" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container my-3">
          <Routes>
            <Route exact path="/" element={
              <TextForm showAlert={showAlert} heading="try TextUtils - Word counter, Charater counter, Remove extra spaces" mode={mode} />
            } />
            <Route exact path="/about" element={
              <About mode={mode} toggleMode={toggleMode}/>
            } />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
