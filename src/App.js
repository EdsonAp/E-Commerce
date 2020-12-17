import React from 'react';
import './App.css';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom'
import HomePage from '../src/pages/homepage/homepage.component.jsx'
import ShopPage from './components/menu-item/shop/shop-component.jsx'


function App() {
  return (
    <>
    <Switch>
      <Route exact path='/' component={HomePage}/>
    </Switch>
      <Route exact path='/shop' component={ShopPage}/>
    </>

  );
}

export default App;
