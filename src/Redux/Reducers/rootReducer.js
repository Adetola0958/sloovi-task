import {combineReducers} from "redux"
import {
    taskCreateReducer,
    allTasksReducer,
    updateTaskReducer,
    deleteTaskReducer
} from "./taskReducer"

const reducer = combineReducers({
    taskCreate: taskCreateReducer,
    allTasks: allTasksReducer,
    updateTask: updateTaskReducer,
    deleteTAsk: deleteTaskReducer
})

export default reducer;