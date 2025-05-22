import Header from "./Header";
import Footer from "./Footer";
import { useEffect } from "react";
import {useLocation } from "react-router-dom";



const PharmacyFinder = ({pharmacyData}) => {

    //create variable to access the state navigated from NewUser.jsx
    const location = useLocation();
    const user = location.state.user; //Destructuring an object
    console.log("Loc" ,location.state);
    console.log(user.zipCode);
        


    return (
        <div className="container">
            <Header />
            <h2>Pharmacy Prescription Details</h2>

            {pharmacyData[user.zipCode] ? (
                <div>
                    <p>hi</p>
                </div>

            )
        :
        (<div>
        <p>No record Found</p>
        </div>)
            }
           

     
            
            <Footer />
        </div>
    );

};

export default PharmacyFinder;