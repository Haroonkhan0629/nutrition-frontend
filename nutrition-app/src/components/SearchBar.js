import { useState } from "react"
import { FaSearch } from "react-icons/fa"
import { API_URL } from "../constants";

const SearchBar = ({ setResults }) => {
    const [input, setInput] = useState("")

    const fetchData = async (searchedValue) => {
        const response = await fetch(API_URL)
        const data = await response.json()
        const results = data.filter((result) => {
            return searchedValue && 
            result && 
            result.name 
        })
        setResults(results)
    }

    const handleChange = async (value) => {
        setInput(value)
        fetchData(value)
    }

    return (
        <div className="input-wrapper">
            <FaSearch id="search-icon" />
            <input className="search-input" placeholder="Search..." value={input} onChange={(event) => handleChange(event.target.value)} />
        </div>
    )
}

export default SearchBar