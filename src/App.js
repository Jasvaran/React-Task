/* eslint-disable no-useless-constructor */
import React from 'react';
import  ReactDOM  from 'react-dom/client';
import './App.css';
import Overview from './components/Overview';
import uniqid from "uniqid"

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      task: {
         text: '',
         id: uniqid(),
         num: 1,
         edit: false,
        },
      tasks: [],
    }
    this.deleteTask = this.deleteTask.bind(this)
    this.editTask = this.editTask.bind(this)
    
  }
  
  handleChange = (e) => {
    this.setState({
      task: {
        text: e.target.value,
        id: this.state.task.id,
        num: this.state.task.num
      }
    });
  };



onSubmitTask = (e) => {
  e.preventDefault();
  this.setState({
    tasks: this.state.tasks.concat(this.state.task),
    task: { 
      text: '',
      id: uniqid(),
      num: this.state.task.num + 1
    }, 
  })
}

deleteTask = (e) => {
  e.preventDefault();
  let dataKey = e.target.dataset.key
  this.setState({
    tasks: this.state.tasks.filter(task => task.id !== dataKey)
  })
}

editTask = (e) => {
  e.preventDefault();
  this.setState({
    edit: !this.state.edit
  })

}

  render() {
    

    return (
      <div className='main-container'>
        <form onSubmit={this.onSubmitTask}>
          <label htmlFor='taskInput' className='label-container'>
            Enter Tasks
            <input type="text" value={this.state.task.text} onChange={this.handleChange} id="task-input" />
            <button type='submit'>Submit</button>
          </label>
        </form>
        <Overview tasks={this.state.tasks} deleteTask={this.deleteTask} editTask={this.editTask}/>
      </div>
    );
  }
}

export default App;
