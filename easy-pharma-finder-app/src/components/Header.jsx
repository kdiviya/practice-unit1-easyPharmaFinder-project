import { Link } from "react-router-dom";
import {useEffect, useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faUser,faMortarPestle, faLock, faRightFromBracket, faBars} from '@fortawesome/free-solid-svg-icons';
import logo from './images/logo.jpeg';

const Header = () => {

    //create state variable to store the user's logged in name
    const [userLogged, setUserLogged] = useState("");
    const [showMobileMenu, setShowMobileMenu] = useState(false); // create state variable to display the bar icon menu for tab and mobiles

    //Every time page loads, get the username from the local storage
    useEffect( () => {
            let user = localStorage.getItem("userName");
            setUserLogged(user);
        }, 
        []
    );

    //set the value true or false to display the menu when the user click the toogle in mobile/tabs
    const toggleMobileMenu = () => {
        setShowMobileMenu(currentVal => !currentVal);
    }

    return (
        <div className="custom-nav">
            <img src={logo} alt="Mortar Pestle Logo" className="logo"/>
            <h1>Easy Pharma Finder</h1>

            <span className ="toggle-menu" onClick={toggleMobileMenu}>
                <FontAwesomeIcon icon={faBars} size="2x" />
            </span>

            <ul id="menu">
                <li><Link to="/"><FontAwesomeIcon icon={faHouse} />Home</Link></li>
                <li><Link to="/about"><FontAwesomeIcon icon={faMortarPestle} />About us</Link></li>
                {
                    userLogged != "" && userLogged !== null &&
                    <>
                        <li><span><FontAwesomeIcon icon={faUser} /></span>{userLogged}</li>
                        <li><Link to= "/logout"><FontAwesomeIcon icon={faRightFromBracket} />Logout</Link></li>
                     
                    </>
                }

                {
                    (userLogged == ""  || userLogged == null ) &&  
                    <>
                        <li><Link to= "/new-user"><FontAwesomeIcon icon={faUser}/>New User</Link></li>
                        <li><Link to="/login"><FontAwesomeIcon icon={faLock}/>Login</Link></li>
                    </>

                }
                
            </ul>
            {showMobileMenu && (
                <div id="mobile-menu">
                    <ul id ="mobile-menu-ul">
                    <li><Link to="/"><FontAwesomeIcon icon={faHouse} />Home</Link></li>
                    <li><Link to="/about"><FontAwesomeIcon icon={faMortarPestle} />About us</Link></li>
                    {
                        userLogged != "" && userLogged !== null &&
                        <>
                            <li><span><FontAwesomeIcon icon={faUser} /></span>{userLogged}</li>
                            <li><Link to= "/logout"><FontAwesomeIcon icon={faRightFromBracket} />Logout</Link></li>
                     
                        </>
                    }

                    {
                        (userLogged == ""  || userLogged == null ) &&  
                        <>
                            <li><Link to= "/new-user"><FontAwesomeIcon icon={faUser}/>New User</Link></li>
                            <li><Link to="/login"><FontAwesomeIcon icon={faLock}/>Login</Link></li>
                        </>

                    }
                
                    </ul>
                </div>
            )}

        </div>
    );

};

export default Header;