import React, { Component } from "react";
import { Table } from "reactstrap";
import NewFoodModal from "./NewFoodModal";
import ConfirmRemovalModal from "./ConfirmRemovalModal";
import DetailModal from "./DetailModal";

class FoodList extends Component {
    render() {
        const foods = this.props.foods;
        return (
            <Table light>
                <thead>
                    <tr>
                        <th>Food</th>
                    </tr>
                </thead>
                <tbody>
                    {!foods || foods.length <= 0 ? (
                        <tr>
                            <td colSpan="6" align="center">
                                <b>No Food</b>
                            </td>
                        </tr>
                    ) : (
                        foods.map(food => (
                            <tr key={food.id}>
                                <td>{food.name}</td>
                                <td align="center">
                                    <DetailModal
                                        food={food}
                                    />
                                    &nbsp;&nbsp;
                                    <NewFoodModal
                                        create={false}
                                        food={food}
                                        resetState={this.props.resetState}
                                    />
                                    &nbsp;&nbsp;
                                    <ConfirmRemovalModal
                                        id={food.id}
                                        resetState={this.props.resetState}

                                    />
                                </td>
                            </tr>
                        ))
                    )}
                </tbody>
            </Table>
        );
    }
}

export default FoodList