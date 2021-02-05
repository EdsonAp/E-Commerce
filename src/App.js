import React from 'react';
import './App.css';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom'
import HomePage from '../src/pages/homepage/homepage.component.jsx'
import ShopPage from './components/menu-item/shop/shop-component.jsx'
import Navbar from './components/navbar.component/navbar-component.jsx'
import Registerlog from './components/register/sigin-register/register-signin.jsx'


function App() {
  return (
    <>
      <Navbar/>
      <Route exact path='/' component={HomePage}/>
      <Route exact path='/shop' component={ShopPage}/>
      <Route exact path='/Register' component={Registerlog}/>
    </>

  );
}

export default App;
