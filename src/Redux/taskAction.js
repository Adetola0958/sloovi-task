import * as types from "./index"
import config from "./config"
import {authHeader} from "./header"
import axios from "axios"
import toast from "react-hot-toast"

const url = config.liveUrl

export const registered_task = (task) => async (dispatch) => {
    try{
        dispatch({type: types.USER_TASK_REQUEST})
        
        const {data} = await axios.post(
            `${url}?company_id=company_413ef22b6237417fb1fba7917f0f69e7`,
            task,
            { headers: authHeader(
                "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE2NjA2ODc2MjIsIm5iZiI6MTY2MDY4NzYyMiwianRpIjoiNDE4MGUxOGEtZTdkMy00MGIzLTliZjgtMzA3ZDFjZGRhYzM5IiwiaWRlbnRpdHkiOnsibmFtZSI6IlN1bmRhciBQaWNoYWkiLCJlbWFpbCI6InNtaXRod2lsbHMxOTg5QGdtYWlsLmNvbSIsInVzZXJfaWQiOiJ1c2VyXzRlZTRjZjY3YWQ0NzRhMjc5ODhiYzBhZmI4NGNmNDcyIiwiaWNvbiI6Imh0dHA6Ly93d3cuZ3JhdmF0YXIuY29tL2F2YXRhci9jZjk0Yjc0YmQ0MWI0NjZiYjE4NWJkNGQ2NzRmMDMyYj9kZWZhdWx0PWh0dHBzJTNBJTJGJTJGczMuc2xvb3ZpLmNvbSUyRmF2YXRhci1kZWZhdWx0LWljb24ucG5nIiwiYnlfZGVmYXVsdCI6Im91dHJlYWNoIn0sImZyZXNoIjpmYWxzZSwidHlwZSI6ImFjY2VzcyJ9.POevuoECrYEZfY0J7lAzzu_Udl1TaSlLvfff-McRSHc"
            ) }
        )

        if(data.status === "success"){
            dispatch({type: types.USER_TASK_SUCCESS, payload: data})
			toast.success('Order made Successfully!', {
				position: 'top-right',
			}) 
        }
    }
    catch (error) {
		const message = error.response
			? error.response.data.message
			: 'Something went wrong'
		dispatch({ type: types.USER_TASK_FAIL, payload: message })
		toast.error(message, { position: 'top-right' })
	}
}

export const get_tasks = () => async (dispatch) => {
    try{
        dispatch({type: types.ALL_TASKS_REQUEST})
        
        const {data} = await axios.get(
            `${url}?company_id=company_413ef22b6237417fb1fba7917f0f69e7`,
            { headers: authHeader(
                "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE2NjA2ODc2MjIsIm5iZiI6MTY2MDY4NzYyMiwianRpIjoiNDE4MGUxOGEtZTdkMy00MGIzLTliZjgtMzA3ZDFjZGRhYzM5IiwiaWRlbnRpdHkiOnsibmFtZSI6IlN1bmRhciBQaWNoYWkiLCJlbWFpbCI6InNtaXRod2lsbHMxOTg5QGdtYWlsLmNvbSIsInVzZXJfaWQiOiJ1c2VyXzRlZTRjZjY3YWQ0NzRhMjc5ODhiYzBhZmI4NGNmNDcyIiwiaWNvbiI6Imh0dHA6Ly93d3cuZ3JhdmF0YXIuY29tL2F2YXRhci9jZjk0Yjc0YmQ0MWI0NjZiYjE4NWJkNGQ2NzRmMDMyYj9kZWZhdWx0PWh0dHBzJTNBJTJGJTJGczMuc2xvb3ZpLmNvbSUyRmF2YXRhci1kZWZhdWx0LWljb24ucG5nIiwiYnlfZGVmYXVsdCI6Im91dHJlYWNoIn0sImZyZXNoIjpmYWxzZSwidHlwZSI6ImFjY2VzcyJ9.POevuoECrYEZfY0J7lAzzu_Udl1TaSlLvfff-McRSHc"
            ) }
        )

        console.log(data, "Backend data")

        if(data.status === "success"){
            dispatch({type: types.ALL_TASKS_SUCCESS, payload: data.results})
			toast.success('Order made Successfully!', {
				position: 'top-right',
			}) 
        }
    }
    catch (error) {
		const message = error.response
			? error.response.data.message
			: 'Something went wrong'
		dispatch({ type: types.ALL_TASKS_FAIL, payload: message })
		toast.error(message, { position: 'top-right' })
	}
}

export const update_task = (task, id) => async (dispatch) => {
    try{
        dispatch({type: types.UPDATE_TASK_REQUEST})
        
        const {data} = await axios.put(
            `${url}/${id}?company_id=company_413ef22b6237417fb1fba7917f0f69e7`,
            task,
            { headers: authHeader(
                "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE2NjA2ODc2MjIsIm5iZiI6MTY2MDY4NzYyMiwianRpIjoiNDE4MGUxOGEtZTdkMy00MGIzLTliZjgtMzA3ZDFjZGRhYzM5IiwiaWRlbnRpdHkiOnsibmFtZSI6IlN1bmRhciBQaWNoYWkiLCJlbWFpbCI6InNtaXRod2lsbHMxOTg5QGdtYWlsLmNvbSIsInVzZXJfaWQiOiJ1c2VyXzRlZTRjZjY3YWQ0NzRhMjc5ODhiYzBhZmI4NGNmNDcyIiwiaWNvbiI6Imh0dHA6Ly93d3cuZ3JhdmF0YXIuY29tL2F2YXRhci9jZjk0Yjc0YmQ0MWI0NjZiYjE4NWJkNGQ2NzRmMDMyYj9kZWZhdWx0PWh0dHBzJTNBJTJGJTJGczMuc2xvb3ZpLmNvbSUyRmF2YXRhci1kZWZhdWx0LWljb24ucG5nIiwiYnlfZGVmYXVsdCI6Im91dHJlYWNoIn0sImZyZXNoIjpmYWxzZSwidHlwZSI6ImFjY2VzcyJ9.POevuoECrYEZfY0J7lAzzu_Udl1TaSlLvfff-McRSHc"
            ) }
        )

        if(data.status === "success"){
            dispatch({type: types.UPDATE_TASK_SUCCESS, payload: data})
			toast.success('Order made Successfully!', {
				position: 'top-right',
			});
            dispatch(get_tasks());
            dispatch({type: types.UPDATE_TASK_RESET})
        }
    }
    catch (error) {
		const message = error.response
			? error.response.data.message
			: 'Something went wrong'
		dispatch({ type: types.UPDATE_TASK_FAIL, payload: message })
		toast.error(message, { position: 'top-right' })
	}
}

export const delete_task = (id) => async (dispatch) => {
    try{
        dispatch({type: types.DELETE_TASK_REQUEST})
        
        const {data} = await axios.delete(
            `${url}/${id}?company_id=company_413ef22b6237417fb1fba7917f0f69e7`,
            { headers: authHeader(
                "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE2NjA2ODc2MjIsIm5iZiI6MTY2MDY4NzYyMiwianRpIjoiNDE4MGUxOGEtZTdkMy00MGIzLTliZjgtMzA3ZDFjZGRhYzM5IiwiaWRlbnRpdHkiOnsibmFtZSI6IlN1bmRhciBQaWNoYWkiLCJlbWFpbCI6InNtaXRod2lsbHMxOTg5QGdtYWlsLmNvbSIsInVzZXJfaWQiOiJ1c2VyXzRlZTRjZjY3YWQ0NzRhMjc5ODhiYzBhZmI4NGNmNDcyIiwiaWNvbiI6Imh0dHA6Ly93d3cuZ3JhdmF0YXIuY29tL2F2YXRhci9jZjk0Yjc0YmQ0MWI0NjZiYjE4NWJkNGQ2NzRmMDMyYj9kZWZhdWx0PWh0dHBzJTNBJTJGJTJGczMuc2xvb3ZpLmNvbSUyRmF2YXRhci1kZWZhdWx0LWljb24ucG5nIiwiYnlfZGVmYXVsdCI6Im91dHJlYWNoIn0sImZyZXNoIjpmYWxzZSwidHlwZSI6ImFjY2VzcyJ9.POevuoECrYEZfY0J7lAzzu_Udl1TaSlLvfff-McRSHc"
            ) }
        )

        if(data.status === "success"){
            dispatch({type: types.DELETE_TASK_SUCCESS, payload: data})
			toast.success('Order made Successfully!', {
				position: 'top-right',
			});
            dispatch(get_tasks());
            dispatch({type: types.DELETE_TASK_RESET})
        }
    }
    catch (error) {
		const message = error.response
			? error.response.data.message
			: 'Something went wrong'
		dispatch({ type: types.DELETE_TASK_FAIL, payload: message })
		toast.error(message, { position: 'top-right' })
	}
}