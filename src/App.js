import React from 'react';
import './App.css';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom'
import HomePage from './pages/homepage/homepage'

const HatsPage= props =>{
  return(
    <div>
      <h1>HATS PAGE</h1>
    </div>
  )
}

function App() {
  return (
    <>
    <Route exact path='/' component={HomePage}/>
    <Route exact path='/hats' component={HatsPage}/>
    </>

  );
}

export default App;
