import React, {useState} from 'react'
import styles from './ToDoList.module.css'

function ToDoList(){

    const [tasks, setTasks] = useState(["Fürdés", "Kutyasétáltatás", "Reggelizés"]);
    const [newTask, setNewTask] = useState("");

    function handleInputChange(event){
        setNewTask(event.target.value);
    }

    function addTask(){
        if(newTask.trim() !== ""){
            setTasks(t => [...t, newTask]);
            setNewTask("");
        }
    }

    function deleteTask(index){
        const updatedTask = tasks.filter((element, i) => i !== index);
        setTasks(updatedTask);
    }
    
    function moveTaskUp(index){
        if(index > 0){
            const updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index - 1]] = 
            [updatedTasks[index - 1], updatedTasks[index]];
            setTasks(updatedTasks);
        }
    }

    function moveTaskDown(index){
        if(index < tasks.length - 1){
            const updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index + 1]] = 
            [updatedTasks[index + 1], updatedTasks[index]];
            setTasks(updatedTasks);
        }
    }

    return(
        <div className={styles.toDoList}>
            <h1 className={styles.toDoListh1}>Tennivaló Lista</h1>
            <div>
                <input 
                    type="text"
                    placeholder="Írj be egy feladatot"
                    value={newTask}
                    onChange={handleInputChange}/>
                <button
                    className={styles.addButton}
                    onClick={addTask}>Hozzáad</button>
            </div>
            <ol className={styles.toDoListOl}>
                {tasks.map((task, index) =>
                    <li key={index} className={styles.toDoListLi}>
                        <span className="text">{task}</span>
                        <button
                            className={styles.deleteButton}
                            onClick={() => deleteTask(index)}>
                            Delete
                        </button>
                        <button
                            className={styles.moveButton}
                            onClick={() => moveTaskUp(index)}>
                            👆
                        </button>
                        <button
                            className={styles.moveButton}
                            onClick={() => moveTaskDown(index)}>
                            👇
                        </button>
                    </li>
                )}
            </ol>
        </div>
    )

}

export default ToDoList