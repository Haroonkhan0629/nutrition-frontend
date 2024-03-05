import React, { Component, Fragment } from "react";
import { Modal, ModalHeader, Button, ModalFooter } from "reactstrap";
import { faTrash } from '@fortawesome/free-solid-svg-icons';

import axios from "axios";

import { API_URL } from "../constants";

class ConfirmRemovalModal extends Component {
  state = {
    modal: false
  };

  toggle = () => {
    this.setState(previous => ({
      modal: !previous.modal
    }));
  };

  deleteFood = id => {
    console.log(id)
    axios.delete(API_URL + id).then(() => {
      this.props.resetState();
      this.toggle();
    });
  };

  render() {
    const theme = this.props.theme

    if (theme === 'light') {
      return (
        <Fragment>
          <Button color="danger" onClick={() => this.toggle()}>
            {faTrash}
          </Button>
          <Modal isOpen={this.state.modal} toggle={this.toggle}>
            <ModalHeader toggle={this.toggle}>
              Do you really want to delete this exercise?
            </ModalHeader>

            <ModalFooter>
              <Button type="button" onClick={() => this.toggle()}>
                Cancel
              </Button>
              <Button
                type="button"
                color="primary"
                onClick={() => this.deleteFood(this.props.id)}
              >
                Yes
              </Button>
            </ModalFooter>
          </Modal>
        </Fragment>
      );
    } else if (theme === 'dark') {
      return (
        <Fragment>
          <Button color="danger" onClick={() => this.toggle()}>
            Remove
          </Button>
          <Modal isOpen={this.state.modal} toggle={this.toggle}>
            <ModalHeader style={{ backgroundColor: "#333", color: "whitesmoke" }} toggle={this.toggle}>
              Do you really want to delete this exercise?
            </ModalHeader>

            <ModalFooter style={{ backgroundColor: "#333", color: "whitesmoke" }}>
              <Button type="button" onClick={() => this.toggle()}>
                Cancel
              </Button>
              <Button
                type="button"
                color="primary"
                onClick={() => this.deleteFood(this.props.id)}
              >
                Yes
              </Button>
            </ModalFooter>
          </Modal>
        </Fragment>
      );
    }
  }
}

export default ConfirmRemovalModal;