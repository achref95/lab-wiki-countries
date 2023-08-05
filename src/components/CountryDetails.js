import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const CountryDetails = ({ selectedCountry }) => {
  const { alpha3Code } = useParams();
  const [countryDetails, setCountryDetails] = useState(null)

  useEffect(() => {
    const country = selectedCountry.find((country) => country.alpha3Code === alpha3Code)
    setCountryDetails(country)
  }, [alpha3Code, selectedCountry])

  if (!countryDetails) {
    return <div>Is it a country from mars ?</div>
  }

  return (
    <div>
      <div className="col-7">
        <img
          src={`https://flagpedia.net/data/flags/icon/72x54/${countryDetails.alpha2Code.toLowerCase()}.png`}
          alt={countryDetails.name.common}
        />
        <h1>{countryDetails.name.common}</h1>
        <table className="table">
          <thead></thead>
          <tbody>
            <tr>
              <td style={{ width: '30%' }}>Capital</td>
              <td>{countryDetails.capital}</td>
            </tr>
            <tr>
              <td>Area</td>
              <td>
                {countryDetails.area}km<sup>2</sup>
              </td>
            </tr>
            <tr>
              <td>Borders</td>
              <td>
                <ul>
                  {countryDetails.borders.map((borderCode) => {
                    const borderCountry = selectedCountry.find(
                      (country) => country.alpha3Code === borderCode
                    );
                    return (
                      <li key={borderCountry.alpha3Code}>
                        <a href={`/${borderCountry.alpha3Code}`}>{borderCountry.name.common}</a>
                      </li>
                    );
                  })}
                </ul>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
};

export default CountryDetails;
