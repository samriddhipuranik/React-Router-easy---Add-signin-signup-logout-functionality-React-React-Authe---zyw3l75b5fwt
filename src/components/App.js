import React from 'react'
import { BrowserRouter } from 'react-router-dom';
import { AppRoutes } from '../AppRoutes';
import '../styles/App.css';
import { NavBar } from './NavBar';
const App = () => {

  return (
    <BrowserRouter>
      <div id="main">
        <NavBar />
        <AppRoutes />
    <NotFound />
      </div>
    </BrowserRouter>

  )
}


export default App;



