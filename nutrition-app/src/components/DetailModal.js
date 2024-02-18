import React, { Component, Fragment } from "react";
import { Button, Modal, ModalHeader, ModalBody } from "reactstrap";
import DetailView from "./DetailView";

class DetailModal extends Component {
    state = {
        modal: false
    };

    toggle = () => {
        this.setState(previous => ({
            modal: !previous.modal
        }));
    };

    render() {
        const food = this.props.food
        let button = <Button onClick={this.toggle}>View</Button>;


        return (
            <Fragment>
                {button}
                <Modal isOpen={this.state.modal} toggle={this.toggle}>
                    <ModalHeader>{food.name}</ModalHeader>

                    <ModalBody>
                        <DetailView
                            resetState={this.props.resetState}
                            toggle={this.toggle}
                            food={this.props.food}
                        />
                    </ModalBody>
                </Modal>
            </Fragment>
        )
    }
}

export default DetailModal