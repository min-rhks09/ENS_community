import { useState } from 'react';
import {Link, Route, Routes, useNavigate, Outlet} from 'react-router-dom';
import styled, { css } from 'styled-components';
import ensnft from './img/ens1.png';
import { Mypagest, Pagetitle, Box, Nft } from './style';

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
      <button>sssdddd</button>
    </Box>
  </Mypagest>
  );
}

export default Mypage;