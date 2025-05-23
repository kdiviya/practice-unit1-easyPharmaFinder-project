import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faUser,faMortarPestle, faLock } from '@fortawesome/free-solid-svg-icons';
import logo from './images/logo.jpeg';

const Header = () => {

    return (
        <div className="header">
          <img src={logo} alt="Mortar Pestle Logo" className="logo"/>
          <h1>Easy Pharma Finder</h1>
         
            <ul id="menu">
                <li><Link to="/"><FontAwesomeIcon icon={faHouse}/>Home</Link></li>
                <li><Link to="/about"><FontAwesomeIcon icon={faMortarPestle} />About us</Link></li>
                <li><Link to= "/new-user"><FontAwesomeIcon icon={faUser}/>New User</Link></li>
                <li><Link to="/about"><FontAwesomeIcon icon={faLock}/>Login</Link></li>
            </ul>

        </div>
    );

};

export default Header;