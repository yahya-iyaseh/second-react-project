import Logo from '../images/logo.png';
import '../css/App.css';
export default function Nav() {
  return (
    <nav className="nav">
      <div className="container">
        <img src={Logo} alt="LOGO" id="logo" />
      </div>
    </nav>
  )
}