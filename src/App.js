import "./App.css"
import React from "react"
import TaskContainer from "./components/TaskContainer/TaskContainer"
import reducer from "./reducers/reducer"
import { createStore } from "redux"
import { Provider } from "react-redux"
import InputFormComponent from "./components/InputFormComponent/InputFormComponent"
import Header from "./components/Header/Header"
const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)
function App() {
  const [showCreate, setShowCreate] = React.useState(false)
  return (
    <div className="app">
      <Header />
      <Provider store={store}>
        <div className="container">
          <TaskContainer />
          <p className="information">
            If you click on DONE button before clock reaches zero your task will
            be marked as successful (GREEN)
          </p>
          <button
            className="btn btn-create-task btn-envoke "
            onClick={() => setShowCreate(true)}
          >
            Create Task
          </button>
          {showCreate && <InputFormComponent setShowCreate={setShowCreate} />}
        </div>
      </Provider>
    </div>
  )
}

export default App
