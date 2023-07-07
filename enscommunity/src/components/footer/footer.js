import { useNavigate, Link } from 'react-router-dom';
import styled from 'styled-components'
import git from './img/giticon.png'
import instagram from './img/instagramicon.svg'
import mail from './img/mailicon.svg'
import logo from './img/logo.png'


let Footerst = styled.div`
position: relative;
width: 100% !important;
height: 10%
background-color: #090F1D;
color: white;
text-align: center;
bottom: 0;
padding-top: 2vw;
`

const Icon = styled.img`
    width: 3vw;
    height: 3vw;
    margin: 15px;
`;

const Logo = styled.img`
    width: 15vw;
    height: 5vw;
`;

function Footer() {
  return (
    <Footerst>
        <Logo src={logo}/>
        <h4>ENS & Community service</h4>
        
        <Icon src={git}/>
        <Icon src={mail}/>
        <Icon src={instagram}/>
        
        <hr/>
        <h4>Copyright © ENN 2023</h4> 
        

    </Footerst>
  );
}

export default Footer;
