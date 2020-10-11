import React from 'react';
import './App.css';
import Homepg from './pages/homepage/homepage'
import MenuItem from './components/menu-item/menu-tems/menu-item-component'
import Directory from './components/directory/directory.jsx'

function App() {
  return (
    <>
    <Directory />
      <MenuItem />
      <Homepg/>
    </>
  );
}

export default App;
