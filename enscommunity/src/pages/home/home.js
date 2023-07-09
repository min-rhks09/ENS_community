import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { Homest, Button, Title} from './homest'


function Home(){
  const ensLeft = ['76eth.eth', 'bitcoin.eth', 'hello.eth', '😺😸😹😻😼😽🙀😿😾.eth','city1.eth','dogworlds.eth','classicart.eth','pepe-frog.eth',];
  const ensRight = ['👍👍👍.eth', 'digital.eth', 'no3.eth', 'jeju.eth', 'party.eth', '0000.eth', 'game.eth', 'o_o.eth', '010203.eth', 'apple.eth', '^-^.eth'];

  const marqueeLeft = ensLeft.map((element, index) => (
    <span key={index}>{element}&nbsp;&nbsp;&nbsp;</span>
  ));

  const marqueeRight = ensRight.map((element, index) => (
    <span key={index}>{element}&nbsp;&nbsp;&nbsp;</span>
  ));

  return(
    <>
    <Title>MAKE YOUR ENS</Title>
    <Homest>
    <marquee direction="left"> {marqueeLeft}</marquee>
    <marquee direction="right">{marqueeRight}</marquee>
    
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
    <Button>Go Community</Button>
    </div> 
    </Homest>
    </>
)}
export default Home;
