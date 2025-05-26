import {useLocation,useNavigate} from 'react-router-dom';
import Header from "./Header";
import Footer from "./Footer";
import "./css/existing-user.css";


const ExistingUser = ({existingUserData}) => {
    const location = useLocation();
    const login  = location.state.login;
    const navigate = useNavigate();
    let name = `${existingUserData.firstName} ${existingUserData.middleName} ${existingUserData.lastName}`;

    return(
        <div className="container">
            <Header />
            <div className="content">

                <div className='profile'>

                    <h2>Profile Details</h2>
                    <p><div>Name:</div>{name}</p>
                    <p><div>Address:</div>{existingUserData.address.street}, {existingUserData.address.city} - {existingUserData.address.zipCode}</p>
                    <p><div>Insurance Number:</div>{existingUserData.insuranceNo}</p>
                    <p><div>Insurance Type:</div>{existingUserData.insuranceType}</p>
                    <p><div>Hospital Visted Date:</div>{existingUserData.lastVistedDate}</p>
                    <button id= "view-button" type ="button" onClick = { () => (navigate('/pharma-finder', {state:{existingUserData}}))}>View My Prescription</button>

            </div>

            </div>
            <Footer />
        </div>

    )
}

export default ExistingUser;