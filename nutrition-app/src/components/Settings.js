import React from "react";
import Layout from "./Layout";
import { Table } from "reactstrap";

const Settings = ({ theme, setTheme }) => {
    if (theme === 'light') {
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
                                <Layout
                                    theme={theme}
                                    setTheme={setTheme}
                                />
                            </td>
                        </tr>
                    </tbody>
                </Table>
            </div>
        )
    } else if (theme === 'dark') {
        return (
            <div>
                <nav aria-label="breadcrumb">
                    <ol class="breadcrumb">
                        <li class="breadcrumb-item active" aria-current="page">Settings</li>
                    </ol>
                </nav>
                <Table dark>
                    <tbody>
                        <tr>
                            <td>
                                Dark Mode
                            </td>
                            <td align="center">
                                <Layout
                                    theme={theme}
                                    setTheme={setTheme}
                                />
                            </td>
                        </tr>
                    </tbody>
                </Table>
            </div>
        )
    }
}

export default Settings