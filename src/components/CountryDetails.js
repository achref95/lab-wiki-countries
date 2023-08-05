import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const CountryDetails = ({ selectedCountry, setSelectedCountry }) => {
  
  const { alpha3Code } = useParams()

  useEffect(() => {
    console.log("hello")
    const country = setSelectedCountry.filter((country) => country.alpha3Code === alpha3Code)
    setSelectedCountry(country)
    console.log(country)
  }, [alpha3Code])

  if (!selectedCountry) {
    return <div>Is it a country from mars ?</div>
  }

  return (
    <div>
      <div className="col-7">
        <img
          src={`https://flagpedia.net/data/flags/icon/72x54/${selectedCountry.alpha2Code.toLowerCase()}.png`}
          alt={selectedCountry.name.common}
        />
        <h1>{selectedCountry.name.common}</h1>
        <table className="table">
          <thead></thead>
          <tbody>
            <tr>
              <td style={{ width: '30%' }}>Capital</td>
              <td>{selectedCountry.capital}</td>
            </tr>
            <tr>
              <td>Area</td>
              <td>
                {selectedCountry.area}km
                <sup>2</sup>
              </td>
            </tr>
            <tr>
              <td>Borders</td>
              <td>
                <ul>
                  {selectedCountry.borders.map((borderCode) => {
                    const borderCountry = setSelectedCountry.find((country) => country.alpha3Code === borderCode)
                    return (
                      <li key={borderCountry.alpha3Code}>
                        <a href={`/${borderCountry.alpha3Code}`}>{borderCountry.name.common}</a>
                      </li>
                    )
                  })}
                </ul>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default CountryDetails;
