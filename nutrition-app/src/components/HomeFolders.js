import React from "react";
import { Link } from "react-router-dom";

const HomeFolders = () => {
    return (
        <div>
            <div>
                <nav aria-label="breadcrumb">
                    <ol class="breadcrumb">
                        <li class="breadcrumb-item active" aria-current="page">Home</li>
                    </ol>
                </nav>
            </div>
            <ul>
                <li><Link to="/home">Exercises</Link></li>
            </ul>
        </div>
    )
}

export default HomeFolders
