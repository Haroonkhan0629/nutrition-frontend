import React, { Component } from "react";

class DetailView extends Component {
    render() {
        const exercise = this.props.exercise
        return (
            <div>
                <p>{exercise.muscle} </p>
                <p>{exercise.difficulty} </p>
                <p>{exercise.description} </p>
                <img src={exercise.image} alt="none"/>
            </div>
        )
    }
}

export default DetailView