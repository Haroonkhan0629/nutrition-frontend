import React, { Component } from "react";
import { Table } from "reactstrap";
import NewExerciseModal from "./NewExerciseModal";
import ConfirmRemovalModal from "./ConfirmRemovalModal";
import DetailModal from "./DetailModal";

class ExerciseList extends Component {
    render() {
        const exercises = this.props.exercises;
        const profile = this.props.profile
        if (profile) {
            return (
                <div className="table-responsive">
                    <Table light>
                        <thead>
                            <tr>
                                <th>Exercise</th>
                            </tr>
                        </thead>
                        <tbody>
                            {!exercises || exercises.length <= 0 ? (
                                <tr>
                                    <td colSpan="6" align="center">
                                        <b>No exercise</b>
                                    </td>
                                </tr>
                            ) : (
                                exercises.map(exercise => (
                                    <tr key={exercise.id}>
                                        <td> <DetailModal
                                            exercise={exercise}
                                            profile={profile}
                                        /></td>
                                        <td align="center">
                                            <NewExerciseModal
                                                create={false}
                                                exercise={exercise}
                                                resetState={this.props.resetState}
                                            />
                                            &nbsp;&nbsp;
                                            <ConfirmRemovalModal
                                                id={exercise.id}
                                                resetState={this.props.resetState}
                                            />
                                        </td>
                                    </tr>
                                ))
                            )}
                        </tbody>
                    </Table>
                </div>
            );
        } else {
            return (
                <div className="table-responsive">
                    <Table light>
                        <thead>
                            <tr>
                                <th>Exercise</th>
                            </tr>
                        </thead>
                        <tbody>
                            {!exercises || exercises.length <= 0 ? (
                                <tr>
                                    <td colSpan="6" align="center">
                                        <b>No exercise</b>
                                    </td>
                                </tr>
                            ) : (
                                exercises.map(exercise => (
                                    <tr key={exercise.id}>
                                        <td> <DetailModal
                                            exercise={exercise}
                                            profile={profile}
                                        /></td>
                                    </tr>
                                ))
                            )}
                        </tbody>
                    </Table>
                </div>
            )
        }
    }
}

export default ExerciseList