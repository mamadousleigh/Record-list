import React, { useState } from 'react'

const ToDoList = () => {
  const [tasks,setTasks]=useState([]);
  const [newTask,setNewTask]=useState('');

  const handleTaskChange=(e)=>{
    setNewTask(e.target.value);
  }


  const addTask=()=>{
    if(newTask.trim() !==''){
      setTasks(t=>[...t,newTask]);
      setNewTask('');
    }
  }

  const deleteTask=(index)=>{
    const updatedTask=tasks.filter((_,i)=>i !==index)

    setTasks(updatedTask)
  }

  const moveTaskUp=(index)=>{
    if(index>0){
      const updatedTask=[...tasks];
      [updatedTask[index],updatedTask[index-1]]=
      [updatedTask[index-1],updatedTask[index]];

      setTasks(updatedTask)
    }
    
  }
  const moveTaskDown=(index)=>{
    if(index < tasks.length-1){
      const updatedTask=[...tasks];
      [updatedTask[index+1],updatedTask[index]]=
      [updatedTask[index],updatedTask[index+1]];

      setTasks(updatedTask);
    }
  }
  return (
  <div className="task">
   <div className="container">
     <h1>my to do list</h1>
    <input type="text" placeholder='Enter Task...'
     onChange={handleTaskChange}  value={newTask}/>
     <button className='add-btn' onClick={()=>addTask()}>Add Task</button>
    <ol>
      {
        tasks.map((task,index)=><li key={index}><span className='text'>{task}</span>
        
        <button className='delete-btn' onClick={()=>deleteTask(index)}>delete</button>
        <button className='move-up-btn' onClick={()=>moveTaskUp(index)}>☝️</button>
        <button className='move-down-btn' onClick={()=>moveTaskDown(index)}>👇</button>

        </li>)
      }
    </ol>
   </div>
  </div> 
  
  )
}

export default ToDoList