import {useState} from 'react'
import useCountries from './hooks/useCountries'
import SearchBar from './components/SearchBar'
import CountryDetails from './components/CountryDetail'
import CountryList from './components/CountryList'


function App() {
  const countries = useCountries();
  const [searchQuery, setSearchQuery] = useState("")
  const filteredCountries = countries.filter(country =>
    country.name.common.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      <h1>Find Countires</h1>
      <SearchBar value={searchQuery} onChange={setSearchQuery} />
      {filteredCountries.length > 10 && searchQuery !== '' &&
        <p>Too many matches, please narrow down your search.</p>
      }
      {filteredCountries.length <= 10 && filteredCountries.length > 1 &&
        <CountryList countries={filteredCountries} setSearchQuery={setSearchQuery} />
      }
      {filteredCountries.length === 1 && <CountryDetails country={filteredCountries[0]} />
      }
    </div>
  )
}

export default App


