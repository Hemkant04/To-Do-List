import React, {useState} from "react";


function TodoApp(){

    const [tasks, setTasks]= useState([]);
    const [newTask, setNewTask]= useState("");

    function handleTheChange(event){
        setNewTask(event.target.value);

    }

    function addTask(){
        if(newTask.trim() !== ""){
        setTasks(t => [...t, newTask]);
        setNewTask("");


        }
    }

    function removeTask(index){
        const updatedTask = tasks.filter((element, i) => i!== index);
        setTasks(updatedTask);

    }

    function moveUp( index){
        if(index >0){
            const updatedTask=[...tasks];
            [updatedTask[index],updatedTask[index - 1]]= [updatedTask[index - 1], updatedTask[index]]
            setTasks(updatedTask);
        }

    }

    function moveDown(index){
        if(index < tasks.length - 1){
            const updatedTask=[...tasks];
            [updatedTask[index],updatedTask[index + 1]]= [updatedTask[index + 1], updatedTask[index]]
            setTasks(updatedTask);
        }

    }

    return(
        <div className="todo-list">
            <h1>To Do List</h1>
            <div>
                <input type="text" placeholder="Enter your tesks..." 
                value={newTask} onChange={handleTheChange}
                />

                <button className="add-task" onClick={addTask}>
                    Add
                </button>
               

            </div>
            <ol>
                {tasks.map((task, index)=>
                    <li key={index}>
                        <span className="text">{task}</span>

                        <button className="delete-task" onClick={() => removeTask(index)}>
                            Delete
                       </button>


                        <button className="move-up" onClick={() => moveUp(index)}>
                          👆
                        </button>
                        <button className="move-down" onClick={() => moveDown(index)}>
                           👇
                         </button>

                    </li>
                    
 

                )}
            </ol>

            
        </div>
    )
}

export default TodoApp