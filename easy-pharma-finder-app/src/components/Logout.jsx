import Header from './Header';
import Footer  from './Footer';
import {useEffect, useState} from 'react';

const Logout = () => {
    const [user, setUser] = useState("");

    useEffect( () => {
       
        const userName = localStorage.getItem("userName")
        setUser(userName);
    }, 
    []);
    
    return (

        <div className='container'>
            <Header />
            <div className='content'>
                <p className='logout-p'> You have successfully logged out.</p>
            </div>
            <Footer />
        </div>

    )
}

export default Logout;