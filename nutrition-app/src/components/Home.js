import React, { Component } from "react";
import { Col, Container, Row } from "reactstrap";
import FoodList from "./FoodList";
import NewFoodModal from "./NewFoodModal";

import axios from "axios";

import { API_URL } from "../constants";

axios.defaults.withCredentials = true;

class Home extends Component {
  state = {
    foods: []
  };

  componentDidMount() {
    this.resetState();
  }

  getFood = () => {
    axios.get(API_URL).then(res => this.setState({ foods: res.data }));
  };

  resetState = () => {
    this.getFood();
  };

  render() {
    return (
      <Container style={{ marginTop: "20px" }}>
        <Row>
          <Col>
            <FoodList
              foods={this.state.foods}
              resetState={this.resetState}
            />
          </Col>
        </Row>
        <Row>
          <Col>
            <NewFoodModal create={true} resetState={this.resetState} />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Home;