import React from "react"
import SearchResult from "./SearchResult"

const SearchResults = ({ results, profile, theme }) => {
    return (
        <div className="results">
            {
                results.map((result, id) => {
                    return <SearchResult result={result} profile={profile} theme={theme} key={id}/>
                })
            }
        </div>
    )
}

export default SearchResults