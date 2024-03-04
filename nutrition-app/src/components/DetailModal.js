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
        const theme = this.props.theme
        let button = <Button className="view-button" style={{ backgroundColor: "white", color: "black", border: "none" }} onClick={this.toggle}>{exercise.name}</Button>;

        if (theme === 'light') {
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
                                profile={this.props.profile}
                            />
                        </ModalBody>
                    </Modal>
                </Fragment>
            )
        } else if (theme === 'dark') {
            return (
                <Fragment>
                    {button}
                    <Modal isOpen={this.state.modal} toggle={this.toggle} styles={{ overlay: { background: "black" } }}>
                        <ModalHeader>{exercise.name}</ModalHeader>

                        <ModalBody>
                            <DetailView
                                resetState={this.props.resetState}
                                toggle={this.toggle}
                                exercise={this.props.exercise}
                                profile={this.props.profile}
                            />
                        </ModalBody>
                    </Modal>
                </Fragment>
            )
        }
    }
}

export default DetailModal