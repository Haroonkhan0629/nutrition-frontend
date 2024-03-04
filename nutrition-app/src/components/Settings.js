import React from "react";
import Layout from "./Layout";
import { Table } from "reactstrap";

const Settings = () => {
    return (
        <div>
            <nav aria-label="breadcrumb">
                <ol class="breadcrumb">
                    <li class="breadcrumb-item active" aria-current="page">Settings</li>
                </ol>
            </nav>
            <Table light>
                <tbody>
                    <tr>
                        <td>
                            Dark Mode
                        </td>
                        <td align="center">
                            <Layout />
                        </td>
                    </tr>
                </tbody>
            </Table>
        </div>
    )
}

export default Settings