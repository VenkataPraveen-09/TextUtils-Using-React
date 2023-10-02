import { useState } from 'react';
import './App.css';
import {
  BrowserRouter as Router, // Wrap your entire app with BrowserRouter
  Routes,
  Route,
} from "react-router-dom";
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
function App() {
  const[mode,setMode]=useState('light');
  const[alert,setAlert]=useState(null);
  const showAlert=(message,type)=>{
    setAlert({
      msg : message,
      type: type
    })
    setTimeout(()=>{
      setAlert(null)
    },1000);
  }
  const toggleMode=()=>{
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor='#212529';
      showAlert("Dark mode has enabled","SUCCESS");
      document.title="Text-Utils - DarkMode"
    }
    else{
      setMode('light');
      document.body.style.backgroundColor='white';
      showAlert("Light mode has enabled","SUCCESS");
      document.title="Text-Utils - LightMode"
    }
  }
  return (
    <Router> {/* Wrap your entire app with Router */}
      <Navbar title="Text-utils" aboutUs="About-Us" mode={mode} toggleMode={toggleMode}/> 
      <Alert alert={alert}/>
      <div className="container">
        <Routes>
          <Route path="/about" element={<About />}></Route>
          <Route path="/" element={<TextForm heading="Enter text to analyze"  mode={mode} showAlert={showAlert} />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
