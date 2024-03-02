import React from "react";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";

import axios from "axios";

import { API_URL } from "../constants";

class NewExerciseForm extends React.Component {
    state = {
        id: 0,
        name: '',
        muscle: '',
        difficulty: '',
        description: '',
        image: ''
    }

    componentDidMount() {
        if (this.props.exercise) {
            const { id, name, muscle, difficulty, description, image } = this.props.exercise
            this.setState({ id, name, muscle, difficulty, description, image })
        }
    }

    onChange = e => {
        this.setState({ [e.target.name]: e.target.value })
    }

    createExercise = e => {
        e.preventDefault()
        axios.post(API_URL, this.state).then(() => {
            this.props.resetState()
            this.props.toggle()
        })
    }

    editExercise = e => {
        e.preventDefault()
        axios.put(API_URL + this.state.id + "/", this.state).then(() => {
            this.props.resetState()
            this.props.toggle()
        })
    }

    defaultIfEmpty = (value) => {
        return value === "" ? "" : value;
    };
    render() {
        return (
            <Form onSubmit={this.props.exercise ? this.editExercise : this.createExercise} >
                <FormGroup>
                    <Label for="name">Name:</Label>
                    <Input
                        type="text"
                        name="name"
                        onChange={this.onChange}
                        value={this.defaultIfEmpty(this.state.name)}
                    />
                </FormGroup>
                <FormGroup>
                    <Label for="muscle">muscle:</Label>
                    <Input
                        type="text"
                        name="muscle"
                        onChange={this.onChange}
                        value={this.defaultIfEmpty(this.state.muscle)}
                    />
                </FormGroup>
                <FormGroup>
                    <Label for="difficulty">difficulty:</Label>
                    <Input
                        type="text"
                        name="difficulty"
                        onChange={this.onChange}
                        value={this.defaultIfEmpty(this.state.difficulty)}
                    />
                </FormGroup>
                <FormGroup>
                    <Label for="description">description:</Label>
                    <Input
                        type="text"
                        name="description"
                        onChange={this.onChange}
                        value={this.defaultIfEmpty(this.state.description)}
                    />
                </FormGroup>
                <FormGroup>
                    <Label for="image">Image:</Label>
                    <Input
                        type="text"
                        name="image"
                        onChange={this.onChange}
                        value={this.defaultIfEmpty(this.state.image)}
                    />
                </FormGroup>
                <Button>Send</Button>
            </Form>
        );
    }
}

export default NewExerciseForm;