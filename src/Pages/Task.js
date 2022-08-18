import React, {useState, useEffect} from "react"
import {useDispatch, useSelector} from "react-redux";
import { Row, Col, Card } from "@themesberg/react-bootstrap";
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css"
import Moment from "react-moment"
import {BsPlus, BsPen} from "react-icons/bs"
import dateFormat, { masks } from "dateformat";
import { get_tasks, registered_task } from "../Redux/taskAction";
import TaskComponents from "../Components/TaskComponent"
const Task = () => {
    const dispatch = useDispatch()

    const allTasks = useSelector((state) => state.allTasks)
    const { tasks } = allTasks;

    const now = new Date().toLocaleDateString('zh-Hans-CN');

   
    const time = new Date();
    let date = time.getHours() + ":" + time.getMinutes();

    const [show, setShow] = useState(false)
    const [assigned_user, setAssignedUser] = useState("")
    const [task_date, setTaskDate] = useState(dateFormat(now, "yyyy-mm-dd"))
    const [task_time, setTaskTime] = useState("")
    const [is_completed, setIsCompleted] = useState(0)
    const [time_zone, setTimeZone] = useState(Date.now())
    const [task_msg, setTaskMsg] = useState("")

    // Tasks children state
    const [ showChildren, setShowChildren ] = useState(false);

    // Convert task_time to secs
    let hms = task_time  
    let a = hms.split(':'); 
    let seconds = (+a[0]) * 60 * 60 + (+a[1]) * 60; 
    //console.log(seconds, "time selected")

    // Convert time_zone to secs
    let hm = date 
    let b = hm.split(':'); 
    let timeZoneSecs = (+b[0]) * 60 * 60 + (+b[1]) * 60; 

    //console.log(timeZoneSecs, "time zone")

    const showFields = () => {
        setShow(!show)
    };

    const showUpdateFields = () => {
        setShowChildren(!showChildren)
    };

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
        dispatch(registered_task(task))
    }

    useEffect(() => {
            dispatch(get_tasks())
    }, [dispatch])

    return(
        <div>
            <Row>
                <Col lg={2}>
                    <div className="sidebar">

                    </div>
                </Col>
                <Col lg={10} md={12} sm={12} xs={12}>
                    <Row>
                        <Col lg={5}>
                            <Card className="mt-5 mb-3">
                                <Card.Body>
                                    <div>
                                        <div className="task_header">
                                            {tasks &&
                                                tasks.length > 0 ?
                                                    <h6>
                                                        Tasks ({tasks.length})
                                                    </h6>
                                            : 
                                                    <h6>
                                                        Tasks (0)
                                                    </h6>
                                            }
                                            <BsPlus 
                                                onClick={() => showFields()}
                                                className="icon"
                                            />
                                        </div>

                                        <div className="real__for">
                                        {
                                            show === true ? (
                                                <form onSubmit={submitHandler}>

                                                    <label htmlFor="name"> Task Description </label>
                                                    <textarea cols="8" rows="1" onChange={(e) => setTaskMsg(e.target.value)}></textarea>
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
                                                                type="time" 
                                                                value={task_time}
                                                                onChange={(e) => setTaskTime(e.target.value)}
                                                            />
                                                        </Col>
                                                    </Row>
                                                    
                                                    <label htmlFor="user">Assign User</label>
                                                    <select onChange={(e) => setAssignedUser(e.target.value)}>
                                                        <option value="Adetola">Adetola</option>
                                                        <option value="Emeka">Emeka</option>
                                                        <option value="Toyin">Toyin</option>
                                                        <option value="Emmanuel">Emmanuel</option>
                                                    </select>
                                                    {/* <input type="text" onChange={(e) => setAssignedUser(e.target.value)}/> */}

                                                    <div className="task_btns">
                                                        <button value="cancel" className="cancle-btn" onClick={() => showFields()}>Cancel</button>
                                                        <button value="submit" className="submit_btn">Save</button>
                                                    </div>
                                                </form>
                                            )
                                        : null}
                                        </div>
                                    </div>
                                </Card.Body>
                            </Card>

                            <div>
                                {
                                    tasks 
                                        && tasks.length > 0 && (
                                            tasks.map((task, i) => (
                                                <Card className="mb-3">
                                                    <Card.Body>
                                                        <TaskComponents task={task} key={i} />
                                                    </Card.Body>
                                                </Card>
                                            ))
                                        )
                                }
                            </div>
                        </Col>
                        <Col lg={7}>

                        </Col>
                    </Row>
                </Col>
            </Row>
        </div>
    )
}

export default Task