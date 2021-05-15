import { CREATE_TASK, TIME_UP, TASK_DONE } from "../actions/actions"
const initialStore = {
  tasks: [
    {
      id: 1,
      title: "Complete Chapter on reducer",
      wasPassed: true,
      isComputed: true,
      timer: 3000
    },
    {
      id: 2,
      title: "Give hacker Earth challenge",
      wasPassed: false,
      isComputed: false,
      timer: 4000
    },
    {
      id: 3,
      title: "do 3 sets of planks",
      wasPassed: false,
      isComputed: false,
      timer: 5000
    },
    {
      id: 4,
      title: "go for running",
      wasPassed: false,
      isComputed: false,
      timer: 6000
    }
  ],
  next: 5
}

const reducer = (state = initialStore, action) => {
  if (action.type === CREATE_TASK) {
    state.tasks.push({
      id: state.next,
      title: action.payload.taskName,
      wasPassed: false,
      isComputed: false,
      timer: action.payload.time * 1000
    })
    return {
      ...state,
      tasks: [...state.tasks],
      next: state.next + 1
    }
  } else if (action.type === TIME_UP) {
    return {
      ...state,
      tasks: state.tasks.map(task => {
        if (task.id === action.payload.id) {
          task.isComputed = true
          task.wasPassed = false
        }
        return task
      })
    }
  } else if (action.type === TASK_DONE) {
    return {
      ...state,
      tasks: state.tasks.map(task => {
        if (task.id === action.payload.id) {
          task.isComputed = true
          task.wasPassed = true
        }
        return task
      })
    }
  }
  return state
}

export default reducer
