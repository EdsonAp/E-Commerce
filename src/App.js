import React from 'react';
import './App.css';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom'
import HomePage from './pages/homepage/homepage'
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
