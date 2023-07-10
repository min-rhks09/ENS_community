import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { Homest, Button, Title} from './homest'
import './home.module.css'

let Content = styled.div`
  display: inline-block;
`

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
          <Content>
            <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/2479807/person1.jpg" alt="Person 1" />
            <div>
              <div>
                <h3>What attained our violin</h3>
                <p>Been is in merely immune makes back peacefully.</p>
              </div>
            </div>
          </Content>
          <Content>
            <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/2479807/person3.jpg" alt="Person 3" />
            <div>
              <div>
                <h3>Imitation believed nothing soft</h3>
                <p>A this that not, most god, to in times and a no question.</p>
              </div>
            </div>
          </Content>
          <Content>
            <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/2479807/person2.jpg" alt="Person 2" />
            <div>
              <div>
                <h3>A the he didn't however white</h3>
                <p>Nice structure when on to could hotel cannot as proposal, seven way.</p>
              </div>
            </div>
          </Content>
          <Content>
            <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/2479807/person4.jpg" alt="Person 4" />
            <div>
              <div>
                <h3>Much of contracting</h3>
                <p>A gets the can sitting however by turned it built it about and yes.</p>
              </div>
            </div>
          </Content>
          <Content>
            <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/2479807/person1.jpg" alt="Person 1" />
            <div>
              <div>
                <h3>Completely derived</h3>
                <p>Were no heavy was for little him the seem few be cleaning separated.</p>
              </div>
            </div>
          </Content>

   
    </Homest>
    </>
)}
export default Home;
