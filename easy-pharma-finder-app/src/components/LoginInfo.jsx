import Header from './Header';
import Footer  from './Footer';
import {useState} from 'react';
import {Form, useNavigate} from 'react-router-dom';
import './css/login.css';
import ReusableButton from './ReusableButton';


const LoginInfo = ({existingUserData, setExistingUserVal}) => {
    
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
        const foundUser = existingUserData.find((user) => user.userName === login.userName);

        if(foundUser) {
            localStorage.setItem("userName", login.userName);
            localStorage.setItem("password", login.password); 
            navigate('/existing-user', {state:{foundUser}});
        }
        
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
                        <input type="password" id="password" name="password" value={login.password} onChange={handleChange}></input>
                    </div>
                    
                    <ReusableButton id="login-button" type="submit" name="login">Login</ReusableButton>

                </form>
            </div>

            <Footer />
        </div>



    )
}

export default LoginInfo;