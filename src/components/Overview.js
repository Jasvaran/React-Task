/* eslint-disable no-useless-constructor */
import React from "react";
import  ReactDOM  from "react-dom/client";
import './Overview.css'

class Overview extends React.Component {
    constructor(props){
        super(props)
    }
    
   
    render() {
        return (
            <div className="task-container">
                <h1>Tasks</h1>
                <ol>
                    {this.props.tasks.map((item) => {
                    return (
                        <li className="task" key={item.id}>
                            <p id="task-title">{item.text}</p>
                            <button id="deleteBtn" data-key={item.id} onClick={this.props.deleteTask}>Delete</button>
                            <button onClick={this.props.editTask}>Edit</button>
                         </li>
                    )
                })}
                </ol>
            </div>
        )
    }
}


export default Overview