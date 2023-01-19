/* eslint-disable no-useless-constructor */
import React from "react";

class EditForm extends React.Component {
    constructor(props){
        super(props)
    }

    render() {
        return (
            <div className="edit-ctn">
                <form>
                    <label htmlFor="edit tasks">
                        <input type="text" className="edit-input" />
                    </label>
                </form>
            </div>
        )
    }
}

export default EditForm