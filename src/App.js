import './App.css';
import './App.css';  
import React from 'react'  
import Header from './components/Header';  
import { Route, Routes } from 'react-router-dom';  
import Home from './components/Home';  
import Signup from './components/Signup';  
import Signin from './components/Signin';  
import Visitor from './components/Visitor'; 
import Councillor from './components/Councillor.js' 
import Appointment from './components/Appointment';  
function App() {  
  return <React.Fragment>  
  <header>  
    <Header/>  
  </header>  
  <main>  
    <Routes>  
      <Route path='/' element={<Home/>} exact/>  
      <Route path='/signup' element={<Signup/>} exact/>  
      <Route path='/signin' element={<Signin/>} exact/>  
      <Route path='/AddCouncillor' element={<Councillor/>} exact/>  
      <Route path='/AddVisitor' element={<Visitor/>} exact/>  
      <Route path='/Appointment' element={<Appointment/>} exact/>  
    </Routes>  
  </main>  
  </React.Fragment>  

}

export default App;
