import { useState } from "react"
import { v4 as uuidv4 } from 'uuid'

function Home() {

    const [task, setTask] = useState("")
    const [tasks, setTasks] = useState([])
    const [newText, setNewText] = useState("")
    const [editId, setEditId] = useState(null)

    const handleSubmit = (e) => {

        e.preventDefault()

        const taskObj = {
            id: uuidv4(),
            name: task,
            complete: false,
        }

        setTasks(prev => [...prev, taskObj])
        setTask("")

    }


    const handleDelete = (id) => {
        setTasks(prev => prev.filter(task => task.id !== id))
    }

    const handleEdit = (id, name) => {
        setEditId(id)
        setNewText(name)
    }

    const handleSave = (id) => {
        setTasks(prev => prev.map(
            task => task.id === id ?
                { ...task, name: newText }
                :
                task
        ))
        setEditId(null)
    }

    return (
        <main>
            <h1>Bandeja de Tareas</h1>

            {tasks.map(task => {
                return (
                    <div key={task.id}>

                        {task.id === editId ?
                            <div>
                                <input type="text" value={newText} onChange={(e) => setNewText(e.target.value)} />
                                <button onClick={() => handleSave(task.id)}>guardar</button>
                            </div>
                            :
                            <div className="">
                                <span>radio</span>
                                <p>{task.name}</p>

                                <button onClick={() => handleDelete(task.id)}>
                                    Del
                                </button>

                                <button onClick={() => handleEdit(task.id, task.name)}>
                                    edit
                                </button>
                            </div>

                        }

                    </div>
                )
            })
            }


            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={task}
                    placeholder="Escribe tu tarea"
                    onChange={(e) => setTask(e.target.value)}
                />

                <button>
                    Guardar tareas
                </button>
            </form>



        </main>
    )


}

export default Home