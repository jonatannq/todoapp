import { useState } from 'react'
import { taskStore } from '../../store/taskStore'

function FormInput(){

    const taskfunction = taskStore((state) => state.loadTask)
    const tasks = taskStore((state) => state.tasks)
    const [task, setTask] = useState("")


    const handleAdd = () => {
        if(!task){     
            return
        }
        const arreglar = task;
        taskfunction(arreglar)
        setTask("")
        console.log(tasks)
    }


    return(
        <div>
            <input value={task} type="text" placeholder="Nombre de la tarea" onChange={(e) => setTask(e.target.value)}/>
            <button onClick={handleAdd} >Add</button>
        </div>
    )
}

export default FormInput