import React from "react";
import "./task.css"
import {CgClose} from "react-icons/cg"
const Task = ({task, handleTaskClick,handleTaskDelete}) => {
   return(
    
    <div className="taks-container"  
    style={task.completed ? {borderLeft: "6px solid chartreuse"} : {}}>
        <div className="task-title" onClick={()=> handleTaskClick(task.id)} >
        {task.title}
        </div>

        <div className="Buttons-container">
            <button className="button-task-delete" onClick={()=> handleTaskDelete(task.id)}>

                <CgClose/>
            </button>
        </div>
    </div>
    
   );

}


export default Task;