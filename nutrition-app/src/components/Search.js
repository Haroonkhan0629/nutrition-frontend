import SearchBar from './SearchBar';
import SearchResults from './SearchResults';
import { useState } from "react"

const Search = ({ profile, theme }) => {
    const [results, setResults] = useState([])

    return (
        <ul className="navigation">
            <li classname="search-bar-container">
                <SearchBar setResults={setResults} />
                <SearchResults results={results} profile={profile} theme={theme}/>
            </li>
        </ul>
    )
}

export default Search