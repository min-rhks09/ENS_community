import { useState } from 'react';

import {Link, Route, Routes, useNavigate, Outlet} from 'react-router-dom';
import styled from 'styled-components'
import './home.module.css'

let Homest =  styled.div`
    color: #ffffff;
`

function Home() {
  return (
  <Homest>
    <div className="ens">
        <p>Search for ENS 
        <span>&</span>
        Create your own awesome ENS</p>
        <div>
        <input type="text"/><button>Search Now</button>
        </div>
    </div>

    <div className="market">
        <div>
            <p>Create & Sell
            Your Best ENS
            <span>Trade in a nice ENS you made!</span></p>
        </div>
        <div></div>
    </div>
    <div>
        <button>GO Market</button>
    </div>
    <div class="community">
        <p>Show off your assets
            &
            Communicate with people</p>
    </div>
    <div>
        <button>Go Community</button>
    </div> 
  </Homest>
  );
}

export default Home;