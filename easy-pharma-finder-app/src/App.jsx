import pharmacyData from './sample-data/pharmacyData.json';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import About from './components/About';
import Introduction from './components/Introduction';
import NewUser from './components/NewUser';
import PharmacyFinder from './components/PharmacyFinder';

import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path= "/" element={<Introduction />}
        />

        <Route path= "/about" element={<About />}
        />

        <Route path = "/new-user" element={<NewUser />}
        />

        <Route path = "/pharma-finder" element={<PharmacyFinder  pharmacyData={pharmacyData}/>}
        />

      </Routes>
    </Router>
  )
}

export default App;
