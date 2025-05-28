import Header from "./Header";
import Footer from "./Footer";
import prescriptionData from '../sample-data/prescriptionData.json';
import {useLocation } from "react-router-dom";
import "./css/pharmacy.css";


const PharmacyFinder = ({pharmacyData}) => {

    //create variable to access the state navigated from NewUser.jsx
    const location = useLocation();
    const user = location.state.user; //Destructuring an object
    
    const existingUser = location.state.existingUserData;
    let zipCode = user ? user.zipCode : existingUser.address.zipCode;
    
    const pharmacyArr =[]; //Array that contains the pharmacy names for user's pin code.
    const medList = {}; //Object that contains the medication details
    
    
    //Add the pharmacy names into an array "pharmacyArr" by checking user's zipcode 
    if(pharmacyData[zipCode] ) {
        pharmacyData[zipCode].forEach((name) => {
        pharmacyArr.push(name.pharmacyName);
    });
    
    //Iterate the pharmacyArr and get the medication details for each pharmacy and stored into object "medList"
        for(let idx=0; idx<pharmacyArr.length; idx++) {
            const pharmacyName = pharmacyArr[idx];
            if(prescriptionData[pharmacyName]) {
                medList[pharmacyName] = prescriptionData[pharmacyName].map((medication) => {
                    let copay = medication.actualCost - ((medication.insurancePaidPercent/100) * medication.actualCost); //calculate the copay
                        return {
                            med: medication.medicationName,
                            cost: medication.actualCost,
                            insuranceDeduction: medication.insurancePaidPercent,
                            copay:copay
                        };     
                }); 
            }
        }
    }

    const handleOrder = (e) => {
        const pharmacyName = e.target.name;
        let url;
        console.log("name" ,pharmacyName);
        
        if (pharmacyName === "CVS Pharmacy") {
            url = "https://www.cvs.com/pharmacy";
        }
        else if (pharmacyName === "Costco Pharmacy") {
            url = "https://www.costco.com/pharmacy/home-delivery";
        }
        else if (pharmacyName === "Walgreens Pharmacy") {
            url = "https://www.walgreens.com/topic/pharmacy.jsp";
        }
        else if (pharmacyName === "Walmart Pharmacy") {
            url = "https://www.walmart.com/cp/pharmacy/5431";
        }
       

        window.open(url, '_blank');

    };
  
    return (
        <div className="p-container">
            <Header />
            <div className="p-content"> 
                <h2>Pharmacy Prescription Details</h2>

                { Object.keys(medList).map((pName)=> (
                    <div key={pName}>
                        <h3>{pName}</h3>

                        <div className="med-table">
                            <table className="medication-table">
                                <thead>
                                    <tr>
                                        <th>Medication Name</th>
                                        <th>Actual Cost</th>
                                        <th>Insurance Deduction</th>
                                        <th>Copay</th>
                                    </tr>
                                </thead>
                                <tbody>
                                {medList[pName].map((medLists) => (
                                    <tr key={medLists.med}>
                                        <td>{medLists.med}</td>
                                        <td>${medLists.cost}</td>
                                        <td>{medLists.insuranceDeduction}%</td>
                                        <td>${medLists.copay}</td>
                                    </tr>
                                ))}
                                </tbody>
                            </table>
                            <div className="order-button">
                                <button type="button" name={pName} onClick={handleOrder}>Click to order</button>
                            </div>
                        </div>

                    </div>
                ))}
            </div>
            <Footer />
        </div>
              
    )   
};

export default PharmacyFinder;