import React from "react"
import { connect } from "react-redux"
import { CREATE_TASK } from "../../actions/actions"
import "./InputFormComponent.css"
const InputFormComponent = ({ setShowCreate, createTask }) => {
  const [taskName, setTaskName] = React.useState("")
  const [time, setTime] = React.useState("")
  const [error, setError] = React.useState("")
  function handelCreateTask() {
    if (taskName.trim().length === 0) {
      setError("Please enter task name.")
    } else {
      createTask({
        taskName: taskName,
        time: time.length === 0 ? 120 : time
      })
      setShowCreate(prev => !prev)
    }
  }
  return (
    <div className="form-display">
      <div>
        <i
          className="fas fa-times close "
          onClick={() => setShowCreate(prev => !prev)}
        ></i>
        <div className="verticle-flex-box">
          <label htmlFor="taskName ">
            Task Name <span className="compulsory">*</span>{" "}
          </label>
          <input
            id="taskName"
            type="text"
            value={taskName}
            onChange={e => {
              setTaskName(e.target.value)
              setError("")
            }}
            placeholder="Enter Task"
            className="margin-top-half"
            autoComplete="off"
          />
          {error.length > 0 && <p className="error-message">{error}</p>}
        </div>
        <div className="verticle-flex-box margin-top-1">
          <label htmlFor="time ">
            Duration in which you can complete task <br /> (in seconds)
          </label>
          <input
            id="time"
            type="number"
            value={time}
            placeholder="Default 120 sec"
            onChange={e => setTime(e.target.value)}
            className="margin-top-half"
            autoComplete="off"
          />
        </div>
        <button className="btn btn-create-task" onClick={handelCreateTask}>
          Create Task
        </button>
      </div>
    </div>
  )
}
const mapDispatchToProps = dispatch => {
  return {
    createTask: task => dispatch({ type: CREATE_TASK, payload: task })
  }
}
export default connect(null, mapDispatchToProps)(InputFormComponent)
