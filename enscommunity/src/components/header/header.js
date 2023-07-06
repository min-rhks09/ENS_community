import { useNavigate, Link } from 'react-router-dom';
import './header.css'

function Header() {
  return (
    <div class="container pullUp">
        <Link to='/'>Home</Link>
        <Link to='/makeens'>Make ENS</Link>
        <Link to='/market'>Market</Link>
        <Link to='/community'>Community</Link>
        <Link to='/marketcap'>MarketCap</Link>
        <Link to='/connectwallet'>Connect Wallet</Link>
    </div>
  );
}

export default Header;
