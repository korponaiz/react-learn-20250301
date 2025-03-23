import React, {useState} from 'react'
import styles from './ToDoList.module.css'

function ToDoList(){

    const [tasks, setTasks] = useState(["Fürdés", "Kutyasétáltatás", "Reggelizés"]);
    const [newTask, setNewTask] = useState("");

    function handleInputChange(event){
        setNewTask=(event.target.value);
    }

    function addTask(){
        if(newTask.trim() !== ""){
            setTasks(t => [...t, newTask]);
            setNewTask("");
        }
    }

    function deleteTask(index){

    }
    
    function moveTaskUp(index){

    }

    function moveTaskDown(index){

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