import SearchBar from './SearchBar';
import SearchResults from './SearchResults';
import { useState } from "react"

const Search = () => {
    const [results, setResults] = useState([])

    return (
        <ul className="navigation">
            <li classname="search-bar-container">
                <SearchBar setResults={setResults} />
                <SearchResults results={results} />
            </li>
        </ul>
    )
}

export default Search