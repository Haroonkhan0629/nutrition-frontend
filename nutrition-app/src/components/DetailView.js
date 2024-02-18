import React, { Component } from "react";

class DetailView extends Component {
    render() {
        const food = this.props.food
        return (
            <div>
                <h2>{food.protein}</h2>
                <h2>{food.fats}</h2>
                <h2>{food.carbs}</h2>
            </div>
        )
    }
}

export default DetailView