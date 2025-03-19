import { useState, useEffect } from "react";
import countryService from "../services/countriesService";

const useCountries = () => {
  const [countries, setCountries] = useState([])

  useEffect(() => {
    const cachedCountries = sessionStorage.getItem('countries');
    if (cachedCountries) {
      setCountries(JSON.parse(cachedCountries))
    } else {
      countryService.getAllCountries().then(response => {
        setCountries(response.data)
        sessionStorage.setItem('countries', JSON.stringify(response.data))
      })
    }
  }, [])

  // don't forget to return countries hook
  return countries

}

export default useCountries