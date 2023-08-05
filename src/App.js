import countries from './countries.json';
import './App.css';
import Navbar from './components/Navbar';
import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails';
import { Routes, Route } from 'react-router-dom';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function App() {
  const [loading, setLoading] = useState(true)
  const [selectedCountry, setSelectedCountry] = useState([])
  const [countryCode, setCountrycode] = useState("")
    
  const { alpha3Code } = useParams()
  
  useEffect(() => {
    axios.get('https://ih-countries-api.herokuapp.com/countries')
    .then((response) => {
      setSelectedCountry(response.data)
      console.log(response.data)
      setLoading(false)
    })
  }, [])

  useEffect(()=> {
    if ( alpha3Code  !== null) {
      console.log(alpha3Code)
    }
  }, [alpha3Code ])

  return (<>{loading ? <div>Loading...</div> :     <div className="App">
  <Navbar />
  <div className="container">
    <div className="row">
      <CountriesList countries={countries} setCountrycode={setCountrycode} />
      <Routes>
        <Route path="/:alpha3Code" element={<CountryDetails countries={countries} selectedCountry={selectedCountry} setSelectedCountry={setSelectedCountry} />} /> 
      </Routes>
    </div>
  </div>
</div>}
</>

  );
}

export default App;
