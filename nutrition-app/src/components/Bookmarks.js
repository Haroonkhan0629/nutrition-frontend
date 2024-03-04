import React, { Component } from "react";
import BookmarksList from "./BookmarksList";

import axios from "axios";

import { API_URL } from "../constants";

class Bookmarks extends Component {
    state = {
        exercises: []
    };

    componentDidMount() {
        this.resetState();
    }

    getExercise = () => {
        axios.get(API_URL
        ).then(res => this.setState({ exercises: res.data }));
    };

    resetState = () => {
        this.getExercise();
    };

    render() {
        const profile = this.props.profile
        const theme = this.props.theme
        if (profile) {
            if (theme === 'light') {
                return (
                    <div>
                        <nav aria-label="breadcrumb">
                            <ol class="breadcrumb">
                                <li class="breadcrumb-item active" aria-current="page">Saved</li>
                            </ol>
                        </nav>
                        <BookmarksList
                            exercises={this.state.exercises}
                            resetState={this.resetState}
                            profile={profile}
                            theme={theme}
                        />
                    </div>
                );
            } else if (theme === 'dark') {
                return (
                    <div>
                        <nav aria-label="breadcrumb">
                            <ol class="breadcrumb">
                                <li aria-current="page">Saved</li>
                            </ol>
                        </nav>
                        <BookmarksList
                            exercises={this.state.exercises}
                            resetState={this.resetState}
                            profile={profile}
                            theme={theme}
                        />
                    </div>
                );
            }
        } else {
            return (
                <div>
                    <div className="login-container">
                        <h2>
                            Only Users Can Save Exercises
                        </h2>
                    </div>
                </div>
            )
        }
    }
}

export default Bookmarks;