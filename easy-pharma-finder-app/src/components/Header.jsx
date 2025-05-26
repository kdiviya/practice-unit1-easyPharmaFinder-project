import { Link } from "react-router-dom";
import {useEffect, useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faUser,faMortarPestle, faLock, faRightFromBracket} from '@fortawesome/free-solid-svg-icons';
import logo from './images/logo.jpeg';

const Header = () => {

    const [userLogged, setUserLogged] = useState("");

    useEffect( () => {
            let user = localStorage.getItem("userName");
            console.log("user", user);
            setUserLogged(user);
        }, 
        []
    );


    return (
        <div className="header">
          <img src={logo} alt="Mortar Pestle Logo" className="logo"/>
          <h1>Easy Pharma Finder</h1>
         
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

        </div>
    );

};

export default Header;