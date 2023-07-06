import './App.module.css';

import { useState } from 'react';

import {Link, Route, Routes, useNavigate, Outlet, BrowserRouter} from 'react-router-dom';
import Home from './pages/home/home';

function App(){
  return (
  <div className="App">
    <Routes> 
      <Route path="/" element={ <Home/> }></Route>
      <Route path='*' element={<div>not found</div>}></Route>
    </Routes>
  </div>
  );
}

export default App;
