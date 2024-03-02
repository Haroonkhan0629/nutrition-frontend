import React, { Component } from "react";
import { Table } from "reactstrap";
import DetailModal from "./DetailModal";

class BookmarksList extends Component {
    render() {
        const exercises = this.props.exercises;
        const bookmarked = exercises.filter(exercise => exercise.saved === true)

        return (
            <div className="table-responsive">
                <Table light>
                    <thead>
                        <tr>
                            <th>Exercise</th>
                        </tr>
                    </thead>
                    <tbody>
                        {bookmarked.map(bookmark => (
                            <tr key={bookmark.id}>
                                <td> <DetailModal
                                    exercise={bookmark}
                                    profile={this.props.profile}
                                /></td>
                                <td align="center">
                                </td>
                            </tr>
                        ))
                        }
                    </tbody>
                </Table>
            </div>
        );
    }
}

export default BookmarksList