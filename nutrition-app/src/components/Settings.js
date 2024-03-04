import React from "react";
import Layout from "./Layout";

const Settings = () => {
    return (
        <div>
            <nav aria-label="breadcrumb">
                <ol class="breadcrumb">
                    <li class="breadcrumb-item active" aria-current="page">Settings</li>
                </ol>
            </nav>
            <div className="darkmode">
                <Layout />
            </div>
        </div>
    )
}

export default Settings