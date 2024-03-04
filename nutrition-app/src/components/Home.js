import React, { Component } from "react";
import ExerciseList from "./ExerciseList";
import NewExerciseModal from "./NewExerciseModal";
import { Link } from "react-router-dom";

import axios from "axios";

import { API_URL } from "../constants";

class Home extends Component {
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
    if (profile) {
      return (
        <div>
          <nav aria-label="breadcrumb">
            <ol class="breadcrumb">
              <li class="breadcrumb-item"><Link to="/">Home</Link></li>
              <li class="breadcrumb-item active" aria-current="page">Exercises</li>
            </ol>
          </nav>
          <ExerciseList
            exercises={this.state.exercises}
            profile={profile}
            resetState={this.resetState}
            theme={this.props.theme}
          />
          <NewExerciseModal create={true} resetState={this.resetState} />
        </div>
      );
    } else {
      return (
        <div className="table-margin">
          <nav aria-label="breadcrumb">
            <ol class="breadcrumb">
              <li class="breadcrumb-item"><Link to="/">Home</Link></li>
              <li aria-current="page">/ Exercises</li>
            </ol>
          </nav>
          <ExerciseList
            exercises={this.state.exercises}
            profile={profile}
            resetState={this.resetState}
            theme={this.props.theme}
          />
        </div>
      )
    }
  }
}

export default Home;