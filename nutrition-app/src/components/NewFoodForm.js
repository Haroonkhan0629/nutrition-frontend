import React from "react";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";

import axios from "axios";

import { API_URL } from "../constants";

axios.defaults.withCredentials = true;

class NewFoodForm extends React.Component {
    state = {
        id: 0,
        name: '',
        protein: '',
        fats: '',
        carbs: '',
        image: ''
    }

    componentDidMount() {
        if (this.props.food) {
            const { id, name, protein, fats, carbs, image } = this.props.food
            this.setState({ id, name, protein, fats, carbs, image })
        }
    }

    onChange = e => {
        this.setState({ [e.target.name]: e.target.value })
    }

    createFood = e => {
        e.preventDefault()
        axios.post(API_URL, this.state).then(() => {
            this.props.resetState()
            this.props.toggle()
        })
    }

    editFood = e => {
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
            <Form onSubmit={this.props.food ? this.editFood : this.createFood} >
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
                    <Label for="protein">Protein:</Label>
                    <Input
                        type="text"
                        name="protein"
                        onChange={this.onChange}
                        value={this.defaultIfEmpty(this.state.protein)}
                    />
                </FormGroup>
                <FormGroup>
                    <Label for="fats">Fats:</Label>
                    <Input
                        type="text"
                        name="fats"
                        onChange={this.onChange}
                        value={this.defaultIfEmpty(this.state.fats)}
                    />
                </FormGroup>
                <FormGroup>
                    <Label for="carbs">Carbs:</Label>
                    <Input
                        type="text"
                        name="carbs"
                        onChange={this.onChange}
                        value={this.defaultIfEmpty(this.state.carbs)}
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

export default NewFoodForm;