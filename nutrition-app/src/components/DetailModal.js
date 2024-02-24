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
        const exercise = this.props.exercise
        let button = <Button style={{backgroundColor: "white", color: "black", border: "none"}} onClick={this.toggle}>{exercise.name}</Button>;


        return (
            <Fragment>
                {button}
                <Modal isOpen={this.state.modal} toggle={this.toggle}>
                    <ModalHeader>{exercise.name}</ModalHeader>

                    <ModalBody>
                        <DetailView
                            resetState={this.props.resetState}
                            toggle={this.toggle}
                            exercise={this.props.exercise}
                        />
                    </ModalBody>
                </Modal>
            </Fragment>
        )
    }
}

export default DetailModal