import React, { useState } from 'react';
import "./AddTask.css"
import Button from './button';


const AddTask = ({handleTaskAddition})=>{
    const [inputData, setInputData] = useState('')

    const handleInputChange = (e) =>{
        setInputData(e.target.value)
    }

   const handleAddTaskClick = () =>{
    handleTaskAddition(inputData)
    setInputData('')
   }

    return(
    
    <div className='Add-Task-Container'>
        <input 
        className='Add-Task-Input' 
        
        value={inputData}
        onChange={handleInputChange}
        />
        <div className="Add-task-button-container">
        <Button onClick={handleAddTaskClick}>Adicionar</Button>
        </div>
    </div>
    
    )

};


export default AddTask;