import Header from './Header';
import Footer  from './Footer';
import {useState} from 'react';
import {Form, useNavigate} from 'react-router-dom';
import "./css/login.css";


const LoginInfo = () => {
    
    const [login, setLogin] = useState({
        userName:"",
        password:""
    });

    const navigate = useNavigate();

    const handleChange = (e) => {
        const{name, value} =  e.target;
        setLogin(currentVal => ({
            ...currentVal,
            [name]:value
        }));

    };
    
    const handleLoginButton = (e) => {
        e.preventDefault();
        const localName = localStorage.getItem("userName");
        const localPwd = localStorage.getItem("password");

        localStorage.setItem("userName", login.userName);
        localStorage.setItem("password", login.password);     
     

    };

    return (
        <div className="container">
            <Header />

            <div className="content">
                <form className = "login-form" onSubmit= {handleLoginButton}>

                    <div>
                        <label>Username</label>
                        <input type="text" id="name" name="userName" value={login.userName} onChange={handleChange}></input>
                    </div>

                    <div>
                        <label>Password</label>
                        <input type="password" id="name" name="password" value={login.password} onChange={handleChange}></input>
                    </div>
                    
                    <button id="login-button" type="submit" name="login" onClick = { () => 
                                                                    navigate('/existing-user', {state:{login}})}
                    >Login</button>

                </form>
            </div>

            <Footer />
        </div>



    )
}

export default LoginInfo;