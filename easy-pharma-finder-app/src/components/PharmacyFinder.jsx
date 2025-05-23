import Header from "./Header";
import Footer from "./Footer";
import prescriptionData from '../sample-data/prescriptionData.json';
import {useLocation } from "react-router-dom";
import "./css/pharmacy.css";


const PharmacyFinder = ({pharmacyData}) => {

    //create variable to access the state navigated from NewUser.jsx
    const location = useLocation();
    const user = location.state.user; //Destructuring an object
   
    const pharmacyArr =[]; //Array that contains the pharmacy names for user's pin code.
    const medList = {}; //Object that contains the medication details
    
    //Add the pharmacy names into an array "pharmacyArr" by checking user's zipcode 
        if(pharmacyData[user.zipCode]) {
            pharmacyData[user.zipCode].forEach((name) => {
                pharmacyArr.push(name.pharmacyName);
            });
    
    //Iterate the pharmacyArr and get the medication details for each pharmacy and stored into object "medList"
            for(let idx=0; idx<pharmacyArr.length; idx++){
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
     
    return (
        <div className="p-container">
            <Header />
            <h2>Pharmacy Prescription Details</h2>

               { Object.keys(medList).map((pName)=> (
                    <div key="pName">
                        <h3>{pName}</h3>
                        <table>
                            <thead>
                                <tr>
                                    <th>Medication Name</th>
                                    <th>Actual Cost(in $)</th>
                                    <th>Insurance Deduction in(%)</th>
                                    <th>Copay</th>
                                </tr>
                            </thead>
                            <tbody>
                            {medList[pName].map((medLists, key) => (
                                <tr id="key">
                                    <td>{medLists.med}</td>
                                    <td>${medLists.cost}</td>
                                    <td>{medLists.insuranceDeduction}%</td>
                                    <td>${medLists.copay}</td>
                                </tr>
                            ))}
                            </tbody>
                        </table>
                    </div>
               ))}

               <Footer />
        </div>
              
    )   
};

export default PharmacyFinder;