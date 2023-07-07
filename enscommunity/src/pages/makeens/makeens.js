import { useState } from 'react';
import {Link, Route, Routes, useNavigate, Outlet} from 'react-router-dom';
import styled, { css } from 'styled-components';

let Makeensst =  styled.div`
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
function Makeens() {
  return (
  <Makeensst>
    <Pagetitle>
      MAKE ENS
    </Pagetitle>
    <hr />
    
  </Makeensst>
  );
}

export default Makeens;