import countries from './countries.json';
import './App.css';
import Navbar from './components/Navbar';
import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails';
import { Routes, Route } from 'react-router-dom';
import axios from 'axios';
import { useState, useEffect } from 'react';

function App() {
  const [loading, setLoading] = useState(true)
  const [selectedCountry, setSelectedCountry] = useState([])

  
  useEffect(() => {
    axios.get('https://ih-countries-api.herokuapp.com/countries')
    .then((response) => {
      setSelectedCountry(response.data)
      console.log(response.data)
      setLoading(false)
    })
  }, [])


  return (<>{loading ? <div>Loading...</div> :     <div className="App">
  <Navbar />
  <div className="container">
    <div className="row">
      <CountriesList countries={countries}/>
      <Routes>
        <Route path="/:alpha3Code" element={<CountryDetails selectedCountry={selectedCountry} />} /> 
      </Routes>
    </div>
  </div>
</div>}
</>

  );
}

export default App;
