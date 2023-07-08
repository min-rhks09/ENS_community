import { useState } from 'react';
import {Link, Route, Routes, useNavigate, Outlet} from 'react-router-dom';
import { Makeensst, Pagetitle} from './makeensst';
import Detail from './detail';


//user flow: 로그인 with 777 chain - ens page - ens조회 - ens기사용 여부 표시 - 사용가능 - 입력한 ens와 지갑주소 전송 - 둔 ens등록완료 - 마이페이지 이동

/*const checkens = () => {
  { if(ensname == ens){
    alert('this name iis already')
  }else{
    alert('사용가능합니다')
  }
  }
}
*/



function Makeens() {

const [ens, setEns] = useState(['dd']);
const [inputValue, setInputValue] = useState('');
const navigate =useNavigate();

const handleInputChange = (event) => {
  setInputValue(event.target.value);
};

const handleSubmit = (event) => {
  event.preventDefault();
  
  if (inputValue && !ens.includes(inputValue)) {
    alert('사용이 가능합니다');
    navigate('/detail');
    // Perform navigation to the next page here
  }else {
    // Proceed with the desired action
    alert('공란이거나 이미있는 이름입니다')
  } 
};

  return (
  <Makeensst>
    <Pagetitle>
      MAKE ENS
    </Pagetitle>
    <hr />
    <p>조회하기</p>
    
    <form onSubmit={handleSubmit}>
      <input type="text" value={inputValue} onChange={handleInputChange} />
      <button type="submit">조회</button>
    </form>
    
  </Makeensst>
  );
}




export default Makeens;