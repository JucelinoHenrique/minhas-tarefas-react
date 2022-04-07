import React, { useState } from "react";
import {v4 as uuidv4} from 'uuid'
import "./App.css"
import AddTask from "./componets/AddTask";
import Tasks from "./componets/Tasks";
import Header from "./componets/header";
const App = ()=> {
    const [tasks, setTasks] = useState(
      [
          {
            id: "1",
            title: "Estudar Programação",
            completed: false,
          },

        {
          id: "2",
          title: "Ler Livros",
          completed: true,
        }

      ])

  const handleTaskClick = (taskId)=>{
    const newTasks = tasks.map((task) =>{
      if (task.id === taskId) return {...task, completed: !task.completed}

      else return task;
    })
     setTasks(newTasks);
  }

  const handleTaskAddition = (taksTitle) =>{
    const newTaks = 
     [...tasks,  
        {
          title: taksTitle,
          id: uuidv4(),
          completed: false,
        },
      ];
      setTasks(newTaks);
  };

  const handleTaskDelete = (taskId) => {
    const newTasks = tasks.filter(task=> task.id !== taskId)
    setTasks(newTasks);
  }
    return(
      <div className="container">
        <Header/>
        <AddTask handleTaskAddition={handleTaskAddition}/>
        <Tasks tasks={tasks} handleTaskClick={handleTaskClick} handleTaskDelete={handleTaskDelete} />
      </div>
    )

}


export default App;