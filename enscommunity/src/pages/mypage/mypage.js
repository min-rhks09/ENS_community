import { useState } from 'react';
import {Link, Route, Routes, useNavigate, Outlet} from 'react-router-dom';
import styled, { css } from 'styled-components';
import ensnft from './img/ens1.png';

let Mypagest =  styled.div`
  color: #ffffff;
  font-size: 40px;
  padding-left: 10%;
  padding-right: 10%;
  padding-top:2vw;
  padding-bottom: 2vw;
  background-color: #070617;
`
let Pagetitle = styled.div`
  font-weight: 500;

`
let Box = styled.div`
  background-color:#455368;
  padding: 2vw 2vw 2vw 2vw;
  display: inline-block;
  border-radius: 5px;

`
let Nft = styled.img`
  width: 15vw;
  height: 15vw;
  display:absolute;
  vertical-align: middle;
  display: flex;
`


let Button = styled.button`
  background: rgb(255,151,0);
  border: none;
  z-index: 1;
  &:after {
  position: absolute;
  content: "";
  width: 100%;
  height: 0;
  top: 0;
  left: 0;
  z-index: -1;
  border-radius: 5px;
  background-color: #eaf818;
  background-image: linear-gradient(315deg, #eaf818 0%, #f6fc9c 74%);
   box-shadow:inset 2px 2px 2px 0px rgba(255,255,255,.5);
   7px 7px 20px 0px rgba(0,0,0,.1),
   4px 4px 5px 0px rgba(0,0,0,.1);
  transition: all 0.3s ease;
}
&:hover {
  color: #000;
}
&:hover:after {
  top: auto;
  bottom: 0;
  height: 100%;
}
&:active {
  top: 2px;
}
`

function Mypage() {
  return (
  <Mypagest>
    <Pagetitle>
      MYPAGE
    </Pagetitle>
    <hr />
    <Box>
      <h3>1234.eth</h3>
    </Box>
    <Pagetitle>
      COLLECTION
    </Pagetitle>
    <hr />
    <Box>
      <Nft src={ensnft} />
      <h3>0000.eth</h3>
      <Button>sssdddd</Button>
    </Box>
  </Mypagest>
  );
}

export default Mypage;