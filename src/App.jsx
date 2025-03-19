import { useState } from "react";
import useCountries from "./hooks/useCountries";
import SearchBar from "./components/SearchBar";
import CountryDetails from "./components/CountryDetail";
import CountryList from "./components/CountryList";
import "./App.css";

function App() {
  const countries = useCountries();
  const [searchQuery, setSearchQuery] = useState("");

  const filteredCountries = countries.filter((country) =>
    country.name.common.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Find Countries</h1>
      <SearchBar value={searchQuery} onChange={setSearchQuery} />

      {filteredCountries.length > 10 && searchQuery !== "" && (
        <p style={styles.warning}>Too many matches, please narrow down your search.</p>
      )}

      {filteredCountries.length <= 10 && filteredCountries.length > 1 && (
        <CountryList countries={filteredCountries} setSearchQuery={setSearchQuery} />
      )}

      {filteredCountries.length === 1 && <CountryDetails country={filteredCountries[0]} />}
    </div>
  );
}

const styles = {
  container: {
    fontFamily: "Inter, system-ui, Avenir, Helvetica, Arial, sans-serif",
    textAlign: "center",
    padding: ".5rem",
    backgroundColor: "#f9f9f9",
    minHeight: "85vh",
  },
  title: {
    fontSize: "2rem",
    fontWeight: "700",
    marginBottom: ".5rem",
    marginTop: ".5rem",
    color: "#333",
  },
  warning: {
    fontSize: "1.1rem",
    color: "#d9534f",
    fontWeight: "500",
    marginTop: "1rem",
  },
};

export default App;
