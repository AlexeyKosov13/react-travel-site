import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/pages/Home';
import Services from './components/pages/Services';
import Products from './components/pages/Products';
import SignUp from './components/pages/SignUp';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' exact
            element={<Home/>}
          />
          <Route path='/Services' exact
            element={<Services/>}
          />
          <Route path='/Products' exact
            element={<Products/>}
          />
          <Route path='/Sign-up' exact
            element={<SignUp/>}
          />
        </Routes>
      </Router>
     
    </>
  );
}

export default App;
