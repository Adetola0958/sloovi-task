import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Row, Col, Card } from "@themesberg/react-bootstrap";
import {BsFillTrashFill, BsPen} from "react-icons/bs"
import dateFormat, { masks } from "dateformat";
import { delete_task, update_task } from "../Redux/taskAction";

const TaskComponents = ({ task }) => {

    const dispatch = useDispatch()

    const now = new Date().toLocaleDateString('zh-Hans-CN');

    const time = new Date();
    let date = time.getHours() + ":" + time.getMinutes();

    const [assigned_user, setAssignedUser] = useState(task ? task.assigned_user : "")
    const [task_date, setTaskDate] = useState(dateFormat(now, "yyyy-mm-dd"))
    const [task_time, setTaskTime] = useState(task ? task.task_time : "")
    const [is_completed, setIsCompleted] = useState(0)
    const [time_zone, setTimeZone] = useState(Date.now())
    const [task_msg, setTaskMsg] = useState(task ? task.task_msg : "");

    // Tasks children state
    const [ showChildren, setShowChildren ] = useState(false);

    const showUpdateFields = () => {
        setShowChildren(!showChildren)
    };

    // Convert time_zone to secs
    let hm = date 
    let b = hm.split(':'); 
    let timeZoneSecs = (+b[0]) * 60 * 60 + (+b[1]) * 60; 

    const convertTime = (value) => {

        const sec = parseInt(value, 10);
        let hours   = Math.floor(sec / 3600);
        let minutes = Math.floor((sec - (hours * 3600)) / 60);
        let seconds = sec - (hours * 3600) - (minutes * 60);
     
        if (hours   < 10) {hours   = "0"+hours;}
        if (minutes < 10) {minutes = "0"+minutes;}
        if (seconds < 10) {seconds = "0"+seconds;}

        return hours+':'+minutes
    }

    let hms = convertTime(task_time)  
        let a = hms.split(':'); 
        let seconds = (+a[0]) * 60 * 60 + (+a[1]) * 60; 
        console.log(seconds, "cccccc")

    const id = task.id; 

    const submitHandler = (e) => {
        e.preventDefault()

        let task = {
            assigned_user,
            task_date,
            task_time: seconds,
            is_completed,
            time_zone: timeZoneSecs,
            task_msg
        }
        // dispatch(update_task(task, id));
        
    };

    const deleteTaskHandler = (e) => {
		console.log(id)
		e.preventDefault()
		if(window.confirm("Are you sure?")) {
			dispatch(delete_task(id)) 
		} 
    }

    return(
        <div 
            // style={{
            //     display: "flex",
            //     justifyContent: 'space-between'
            // }}
        >
            <div className="task_headers">
                <h6>{task.task_msg}</h6>
                <BsPen onClick={() => showUpdateFields(task.id)} className="icon" />
            </div>
                
                {
                    showChildren === true && (
                        <form onSubmit={submitHandler}>
                            
                            <label htmlFor="name"> Task Description </label>
                            <textarea
                                value={task_msg} cols="8" rows="1" 
                                onChange={(e) => setTaskMsg(e.target.value)}
                            />

                            <Row>
                                <Col lg={8}>
                                    <label htmlFor="date">Date</label>
                                    <input
                                        type='date'
                                        value={task_date}
                                        onChange={(e) => setTaskDate(e.target.value)}  
                                    />
                                </Col>
                                <Col lg={4}>
                                    {/* <DatePicker selected={task_date} onChange={(date:Date) => setTaskDate(date)} /> */}
                                    <label htmlFor="time">Time</label>
                                    <input 
                                        value={task.task_time} 
                                        onChange={(e) => setTaskTime(e.target.value)}
                                        type="time"
                                    />
                                </Col>
                            </Row>
                
                            <label htmlFor="user">Assign User</label>
                            <select value={assigned_user} onChange={(e) => setAssignedUser(e.target.value)}>
                                <option value="Adetola">Adetola</option>
                                <option value="Emeka">Emeka</option>
                                <option value="Toyin">Toyin</option>
                                <option value="Emmanuel">Emmanuel</option>
                            </select>

                            <div className="parent__field">
                                <BsFillTrashFill onClick={(e) => deleteTaskHandler(e)} className="text-danger mt-3" />
                                <div className="task_btns">
                                    <button value="cancel" className="cancle-btn" onClick={() => showUpdateFields()}>Cancel</button>
                                    <button value="submit" className="submit_btn">Save</button>
                                </div>
                            </div>
                        </form>
                    )
                }
        </div>
    )
}

export default TaskComponents