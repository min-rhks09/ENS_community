import './App.module.css';
import { useState } from 'react';
import {Link, Route, Routes} from 'react-router-dom';
import { ethers } from"ethers";
import Home from './pages/home/home';
import Mypage from './pages/mypage/mypage';
import Connectwallet from './pages/connectwallet/connectwallet';
import Marketcap from './pages/marketcap/marketcap';
import Makeens from './pages/makeens/makeens';
import Detail from './pages/makeens/detail';
import Community from './pages/community/community';
import Community_write from './pages/community/community_write';
import Community_view from './pages/community/community_view';
import Community_modify from './pages/community/community_modify';



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
      <Route path="/community/community_write" element={ <Community_write/> } ></Route>
      <Route path="community/community_view" element={ <Community_view/> } ></Route>
      <Route path="community/community_modify" element={ <Community_modify/> } ></Route>
      <Route path="/connectwallet" element={ <Connectwallet/> }></Route>
      <Route path='*' element={<div>not found</div>}></Route>
    </Routes>



  </div>
  );
}

export default App;
