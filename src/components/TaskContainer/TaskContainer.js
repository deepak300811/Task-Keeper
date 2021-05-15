import React from "react"
import { connect } from "react-redux"
import SingleTask from "../SingleTask/SingleTask"
import "./TaskContainer.css"
const TaskContainer = ({ tasks }) => {
  return (
    <>
      <div className="task-container">
        {" "}
        {tasks.map(task => {
          return (
            <SingleTask
              isComputed={task.isComputed}
              timer={task.timer}
              key={task.title}
              title={task.title}
              wasPassed={task.wasPassed}
              id={task.id}
            />
          )
        })}
      </div>
    </>
  )
}
const mapStateToProps = state => {
  return { tasks: state.tasks }
}

export default connect(mapStateToProps)(TaskContainer)
