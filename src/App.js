import { useState } from 'react';
import './App.css';
import{
  BrowserRouter as router,
  Switch,
  Link,
  Route
}from "react-router-dom";
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
    <>  
      <Navbar title="Text-utils" aboutUs="About-Us" mode={mode} toggleMode={toggleMode}/> 
      {/* <Navbar/> */}
      <div className="container">
      <Alert alert={alert}/>
      {/* <TextForm showAlert={showAlert} heading="Enter the text to analyze" mode={mode}/>  */}
      <About/>
      </div>
    </>
  );
}

export default App;
