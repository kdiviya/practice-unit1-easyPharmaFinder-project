import { Link } from "react-router-dom";
//     <li><Link to="/pharma-finder">Pharmacy Finder</Link></li>
const Header = () => {

    return (
        <div className="header">
          <h2>Easy Pharma Finder</h2>
         
            <ul id="menu">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About us</Link></li>
                <li><Link to= "/new-user">New User</Link></li>
           
                <li>Existing User</li>
            </ul>

        </div>
    );

};

export default Header;