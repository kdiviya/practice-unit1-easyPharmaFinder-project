import Header from './Header';
import Footer  from './Footer';
import {useEffect} from 'react';

const Logout = () => {

    useEffect( () => {
        localStorage.removeItem("userName");
        localStorage.removeItem("password");
        }, 
        []
    );

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