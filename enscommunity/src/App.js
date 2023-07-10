import './App.module.css';

import { useState } from 'react';

import {Link, Route, Routes, useNavigate, Outlet, BrowserRouter} from 'react-router-dom';

import { ethers } from"ethers";
import Home from './pages/home/home';
import Mypage from './pages/mypage/mypage';
import Connectwallet from './pages/connectwallet/connectwallet';
import Marketcap from './pages/marketcap/marketcap';
import Makeens from './pages/makeens/makeens';
import Detail from './pages/makeens/detail';
import Community from './pages/community/community';



function App(){
  return (
  <div className="App">
    <Routes> 
      <Route path="/" element={ <Home/> }></Route>
      <Route path="/mypage" element={ <Mypage/> }></Route>
      <Route path="/makeens" element={ <Makeens/> }></Route>
      <Route path="/detail" element={ <Detail/> }></Route>
      <Route path="/marketcap" element={ <Marketcap/> }></Route>
      <Route path="/community" element={ <Community/> }></Route>
      <Route path="/connectwallet" element={ <Connectwallet/> }></Route>
      <Route path='*' element={<div>not found</div>}></Route>
    </Routes>
  </div>
  );
}

export default App;
