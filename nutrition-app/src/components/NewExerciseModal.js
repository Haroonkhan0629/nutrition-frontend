import React, { Component, Fragment } from "react";
import { Button, Modal, ModalHeader, ModalBody } from "reactstrap";
import NewExerciseForm from "./NewExerciseForm";
import { faPencil, faPlusCircle } from '@fortawesome/free-solid-svg-icons';

class NewExerciseModal extends Component {
    state = {
        modal: false
    }

    toggle = () => {
        this.setState(previous => ({
            modal: !previous.modal
        }));
    };

    render() {
        const theme = this.props.theme

        if (theme === 'light') {
            const create = this.props.create;
            let title = "Editing exercise";
            let button = <Button onClick={this.toggle}>{faPencil}</Button>;

            if (create) {
                title = "Creating exercise";

                button = (
                    <Button
                        color="primary"
                        className="float-right create-button"
                        onClick={this.toggle}
                        style={{ minWidth: "200px" }}
                    >
                        {faPlusCircle}
                    </Button>
                );
            }

            return (
                <Fragment>
                    {button}
                    <Modal isOpen={this.state.modal} toggle={this.toggle}>
                        <ModalHeader toggle={this.toggle}>{title}</ModalHeader>

                        <ModalBody>
                            <NewExerciseForm
                                resetState={this.props.resetState}
                                toggle={this.toggle}
                                exercise={this.props.exercise}
                            />
                        </ModalBody>
                    </Modal>
                </Fragment>
            );
        } else if (theme === 'dark') {
            const create = this.props.create;
            let title = "Editing exercise";
            let button = <Button onClick={this.toggle}>Edit</Button>;

            if (create) {
                title = "Creating exercise";

                button = (
                    <Button
                        color="primary"
                        className="float-right create-button"
                        onClick={this.toggle}
                        style={{ minWidth: "200px" }}
                    >
                        Create
                    </Button>
                );
            }
            return (
                <Fragment>
                    {button}
                    <Modal isOpen={this.state.modal} toggle={this.toggle}>
                        <ModalHeader style={{ backgroundColor: "#333", color: "whitesmoke" }} toggle={this.toggle}>{title}</ModalHeader>

                        <ModalBody style={{ backgroundColor: "#333", color: "whitesmoke" }}>
                            <NewExerciseForm
                                resetState={this.props.resetState}
                                toggle={this.toggle}
                                exercise={this.props.exercise}
                            />
                        </ModalBody>
                    </Modal>
                </Fragment>
            );
        }
    }
}

export default NewExerciseModal