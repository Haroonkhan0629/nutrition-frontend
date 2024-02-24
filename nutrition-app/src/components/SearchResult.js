import React from "react"
import DetailModal from "./DetailModal";

const SearchResult = ({ result }) => {
    return (
        <div className="result">
            <h4><DetailModal
                exercise={result}
            /></h4>
        </div>
    )
}

export default SearchResult