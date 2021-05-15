import React, { useEffect, useState } from "react"
import "./SingleTask.css"
import { connect } from "react-redux"
import { TASK_DONE, TIME_UP } from "../../actions/actions"
const SingleTask = ({
  isComputed,
  timer,
  title,
  wasPassed,
  id,
  timeUp,
  taskDone
}) => {
  const [timeLeft, setTimeLeft] = useState(timer / 1000)
  useEffect(() => {
    let timeinter
    if (!isComputed) {
      timeinter = setInterval(() => {
        if (timeLeft > 0) {
          setTimeLeft(prev => prev - 1)
        } else {
          clearInterval(timeinter)
        }
      }, 1000)
    }

    return () => {
      clearInterval(timeinter)
    }
  }, [isComputed, timer, timeUp, title, timeLeft])

  useEffect(() => {
    if (timeLeft === 0) {
      if (!isComputed) {
        timeUp()
      }
    }
  }, [timeLeft, isComputed, timeUp])
  return (
    <>
      <div
        className="task-card"
        style={{
          background: `${
            isComputed ? (wasPassed ? "#2eb62c" : "#89021e") : "#a98600"
          }`
        }}
      >
        {!isComputed && (
          <div
            className="task-card-progress "
            style={{
              width: `${((timer / 1000 - timeLeft) / (timer / 1000)) * 100}%`
            }}
          ></div>
        )}
        <div className="task-title">{title}</div>
        <div className="button-and-time">
          {isComputed ? (
            <>
              {" "}
              <button className="btn btn-done invisible">DONE</button>{" "}
              <div className="time-left  invisible">
                <p>{timeLeft} </p>
                <p>sec</p>
              </div>
            </>
          ) : (
            <>
              {" "}
              <button className="btn btn-done" onClick={taskDone}>
                DONE
              </button>{" "}
              <div className="time-left">
                <p>{timeLeft} </p>
                <p>sec</p>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  )
}
const mapDispatchToProps = (dispatch, ownProps) => {
  const { id } = ownProps
  return {
    timeUp: () => dispatch({ type: TIME_UP, payload: { id: id } }),
    taskDone: () => dispatch({ type: TASK_DONE, payload: { id: id } })
  }
}

export default connect(null, mapDispatchToProps)(SingleTask)
