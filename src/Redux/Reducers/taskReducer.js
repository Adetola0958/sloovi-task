import * as types from "../index";

export const taskCreateReducer = (state = { loading: false }, action) => {
	switch (action.type) {
		case types.USER_TASK_REQUEST:
			return { ...state, loading: true }
		case types.USER_TASK_SUCCESS:
			return { loading: false, success: true, task: action.payload }
		case types.USER_TASK_FAIL:
			return { loading: false, error: action.payload }
		default:
			return state
	}
}

export const allTasksReducer = (state = { loading: false }, action) => {
	switch (action.type) {
		case types.ALL_TASKS_REQUEST:
			return { ...state, loading: true }
		case types.ALL_TASKS_SUCCESS:
			return { loading: false, success: true, tasks: action.payload }
		case types.ALL_TASKS_FAIL:
			return { loading: false, error: action.payload }
		default:
			return state
	}
}

export const updateTaskReducer = (state = { loading: false }, action) => {
	switch (action.type) {
		case types.UPDATE_TASK_REQUEST:
			return { ...state, loading: true }
		case types.UPDATE_TASK_SUCCESS:
			return { loading: false, success: true, uTask: action.payload }
		case types.UPDATE_TASK_FAIL:
			return { loading: false, error: action.payload }
		default:
			return state
	}
}

export const deleteTaskReducer = (state = { loading: false }, action) => {
	switch (action.type) {
		case types.DELETE_TASK_REQUEST:
			return { ...state, loading: true }
		case types.DELETE_TASK_SUCCESS:
			return { loading: false, success: true, delTask: action.payload }
		case types.DELETE_TASK_FAIL:
			return { loading: false, error: action.payload }
		default:
			return state
	}
}