import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { Homest, Button, Title} from './homest'
import './home.module.css'
import gsap from "gsap";
import ScrollMagic from "scrollmagic";

let Extrasection = styled.div`
  height: 200vh;
  background-color: #020407;
`
let Content = styled.div`
.content {
  height: 50%;
  max-width: 500px;
  flex: 1;
  display: flex;
  align-items: center;
  
  h3 {
      font-size: 32px;
      max-width: 250px;
      line-height: 1.2;
  }
  
  p {
      color: rgba(0,0,0,.6);
      max-width: 350px;
      margin-top: 8px;
  }
`

let Item =styled.div`
  display: inline-block;
  width: 700px;
  padding: 0px 40px;
  display: flex;
  flex-direction: column;
  
  
  &:nth-child(odd) {
      img {
          margin-bottom: 64px;
      }
  }
  
  &:nth-child(even) {
      flex-direction: column-reverse;
  }
  
  img {
      object-fit: cover;
      height: 500px;
      width: 500px;
      //flex: 1;
  }
`
let Horizontalscrollwrapper = styled.div`
position: sticky;
top: 0;
left: 0;
height: 100vh;
width: 100vw;
overflow: hidden;
`
let Horizontalscrollcontent = styled.div`
display: flex;
padding: 80px;
height: 100vh;
width: 350vh;
will-change: transform;
`

let Horizontalscrollsection =styled.div`
position: relative;
height: 350vh;
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

  
  useEffect(() => {
    const scrollSection = Horizontalscrollsection;
    const scrollContent = Horizontalscrollcontent;

    const scrollHeight = scrollSection.clientHeight;
    const contentWidth = scrollContent.clientWidth;

    const handleScroll = () => {
      const scrolled = window.pageYOffset;
      const sectionOffset = Math.abs(scrollSection.offsetTop - scrolled);
      const notReachedBottom = parseInt(Math.max(0, scrollSection.getBoundingClientRect().bottom - window.innerHeight));

      if (scrollSection.offsetTop <= scrolled && notReachedBottom) {
        gsap.to(scrollContent, {
          x: -sectionOffset,
        });
      }
    };

    window.addEventListener('scroll', handleScroll);

    const heroTween = (background) => {
      const tl = gsap.timeline();

      tl.to(background, {
        height: '100%',
        ease: 'power3.easeOut',
      });

      return tl;
    };

    const controller = new ScrollMagic.Controller();

    const heroScene = new ScrollMagic.Scene({
      triggerElement: '.hero',
      triggerHook: 0,
      duration: '40%',
    })
      .setTween(heroTween('.hero__background'))
      .addIndicators({ name: '1' })
      .addTo(controller);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      heroScene.destroy();
      controller.destroy();
    };
  }, []);


  return(
    <>
    <Title>MAKE YOUR ENS</Title>
    <Homest>
    <marquee direction="left"> {marqueeLeft}</marquee>
    <marquee direction="right">{marqueeRight}</marquee>

    <Horizontalscrollsection>
      <Horizontalscrollwrapper>
        <Horizontalscrollcontent>
          <Item>
            <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/2479807/person1.jpg" alt="Person 1" />
            <Content>
              <div>
                <h3>What attained our violin</h3>
                <p>Been is in merely immune makes back peacefully.</p>
              </div>
            </Content>
          </Item>
          <Item>
            <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/2479807/person3.jpg" alt="Person 3" />
            <Content>
              <div>
                <h3>Imitation believed nothing soft</h3>
                <p>A this that not, most god, to in times and a no question.</p>
              </div>
            </Content>
          </Item>
          <Item>
            <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/2479807/person2.jpg" alt="Person 2" />
            <Content>
              <div>
                <h3>A the he didn't however white</h3>
                <p>Nice structure when on to could hotel cannot as proposal, seven way.</p>
              </div>
            </Content>
          </Item>
          <Item>
            <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/2479807/person4.jpg" alt="Person 4" />
            <Content>
              <div>
                <h3>Much of contracting</h3>
                <p>A gets the can sitting however by turned it built it about and yes.</p>
              </div>
            </Content>
          </Item>
          <Item>
            <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/2479807/person1.jpg" alt="Person 1" />
            <Content>
              <div>
                <h3>Completely derived</h3>
                <p>Were no heavy was for little him the seem few be cleaning separated.</p>
              </div>
            </Content>
          </Item>
        </Horizontalscrollcontent>
      </Horizontalscrollwrapper>
    </Horizontalscrollsection>


<Extrasection></Extrasection>
    
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
