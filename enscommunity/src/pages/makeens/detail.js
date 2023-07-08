import { useState } from 'react';
import {Link, Route, Routes, useNavigate, Outlet, BrowserRouter} from 'react-router-dom';

import { Detailst, Pagetitle } from './detailst';

function Detail(){
  return (
  <Detailst>
    <Pagetitle>
        MAKE ENS
    </Pagetitle>
    <hr />
    ens 상세 페이지 입니다.
  </Detailst>
  );
}

export default Detail;
