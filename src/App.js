import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbars from './components/Navbars';
import TextForms from './components/TextForms';
import About from './components/About';
import Alert from './components/Alert'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

export default function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState("");

  const showAlert = (message, type) =>{
     setAlert({
       msg:message,
       type:type
     })
     setTimeout(() => {
       setAlert("")
     }, 500);
  }

  const toggleMode = () =>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#204660'
      showAlert("Dark mode has been enabled", "success")
      document.title = 'TextUtils - Dark Mode '
      // setInterval(() => {
      //   document.title = 'Text Utils is Amazing mode'
      // }, 2000);
      // setInterval(() => {
      //   document.title = ('Install text Utils')
      // }, 1500);
    }
    else{
      setMode('light')
      document.body.style.backgroundColor = 'white'
      showAlert("Light mode has been enabled", "success")
      document.title = 'TextUtils - Light Mode'
    }
  }
  return (
    <>
        <Navbars title="TextUtils" aboutText= "About us" mode = {mode} toggleMode = {toggleMode} />
        {/* <Navbars  /> */}
        <Alert alert = {alert}/>
        
        <div className='container my-3'>
          <Routes>
            <Route path="/" element={<TextForms path="/" mode = {mode} showAlert = {showAlert} heading="Enter the text to analyze"/>}>
            </Route>
            {/* <Route path="/about" element={ <About />}>
            </Route> */}
          </Routes>
        </div>

        <div className='container'>
            {/* <About/> */}
        </div>
        
    </>
  )
}
