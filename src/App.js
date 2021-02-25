import React from 'react';
import './App.css';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom'
import HomePage from '../src/pages/homepage/homepage.component.jsx'
import ShopPage from './components/menu-item/shop/shop-component.jsx'
import Navbar from './components/navbar.component/navbar-component.jsx'
import Registerlog from './components/register/sigin-register/register.jsx'
import About from './components/about-component/about-component.jsx'


function App() {
  return (
    <>
      <Navbar/>
      <Route exact path='/' component={HomePage}/>
      <Route exact path='/shop' component={ShopPage}/>
      <Route exact path='/register' component={Registerlog}/>
      <Route exact path='/About' component={About}/>
    </>

  );
}

export default App;
