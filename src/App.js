import React from 'react';
import './App.css';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom'
import HomePage from '../src/pages/homepage/homepage.component.jsx'
import ShopPage from './components/menu-item/shop/shop-component.jsx'


function App() {
  return (
    <>
    <Route exact path='/' component={HomePage}/>
    <Route exact path='/shop' component={ShopPage}/>
    </>

  );
}

export default App;
