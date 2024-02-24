import React from "react"
import SearchResult from "./SearchResult"

const SearchResults = ({ results }) => {
    return (
        <div className="results">
            {
                results.map((result, id) => {
                    return <SearchResult result={result} key={id}/>
                })
            }
        </div>
    )
}

export default SearchResults