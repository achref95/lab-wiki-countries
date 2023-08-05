

const CountriesList = ({countries, setCountrycode }) => {

    
  return (
    <div>
      <div className="col-5" style={{ maxHeight: '90vh', overflow: 'scroll' }}>
        {countries.map((country) => (
                    <div className="list-group" key={country.alpha3Code} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <img
                            src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`}
                            alt={country.alpha2Code}
                            style={{ height: '15px', width: '20px' }}
                        />
                    <a className="list-group-item list-group-item-action" href={country.alpha3Code}>{country.alpha2Code} {country.name.common}</a>  
                </div>
        ))}
      </div>
    </div>
  )
}

export default CountriesList
