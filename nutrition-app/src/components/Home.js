import React, { Component } from "react";
import { Container } from "reactstrap";
import ExerciseList from "./ExerciseList";
import NewExerciseModal from "./NewExerciseModal";
import { Link } from "react-router-dom";

import axios from "axios";

import { API_URL } from "../constants";

axios.defaults.withCredentials = true;

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
    return (
      <Container style={{ marginTop: "20px" }}>
        <nav aria-label="breadcrumb">
          <ol class="breadcrumb">
            <li class="breadcrumb-item"><Link to="/">Home</Link></li>
            <li class="breadcrumb-item active" aria-current="page">Exercises</li>
          </ol>
        </nav>
        <ExerciseList
          exercises={this.state.exercises}
          resetState={this.resetState}
        />
        <NewExerciseModal create={true} resetState={this.resetState} />
      </Container>
    );
  }
}

export default Home;