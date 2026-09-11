import { useState } from 'react'

function Home() {

    const [task, setTask] = useState("")
    const [tasks, setTasks] = useState([])

    const handleAdd = () => {
        setTasks([...tasks, task])
        setTask("")
    }

    const handleDelete = (id) => {
        setTasks(tasks.filter((_, index) => index != id))
        console.log("eliminar tarea"+ id )
    }

    const handleEdit = (id) => {
        console.log("editar tarea"+id)

        setTasks(tasks.map((task, index) => 
            index === id ? "Nueva tarea" : task
        ))

    }
    return(
        <div>
            <h1>Bandeja de tareas</h1>
            {
                tasks.map((task, index) => {
                    return(
                        <div key={index}>
                            <p>{task}</p>
                            <button onClick={() => handleDelete(index)} >del</button>
                            <button onClick={() => handleEdit(index)} >edit</button>
                        </div>
                    )
                })
            }
            <input value={task} type="text" placeholder="Nombre de la tarea" onChange={(e) => setTask(e.target.value)}/>
            <button onClick={handleAdd}>Add</button>
        </div>
    )


}
export default Home