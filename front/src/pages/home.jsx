import { useState } from "react"
import { v4 as uuidv4 } from 'uuid'
import style from './home.module.css'
import Modal from '../components/modal/modal'
import Task from "../components/task/task"

function Home() {

    const [task, setTask] = useState("")
    const [tasks, setTasks] = useState([])
    const [newText, setNewText] = useState("")
    const [editId, setEditId] = useState(null)
    const [show, setShow] = useState(false)
    const [showModal, setShowModal] = useState(false)



    const handleSubmit = (e) => {

        e.preventDefault()

        if (!task.trim()) {
            setTask("")
            return
        }

        setShow(!show)
        const taskObj = {
            id: uuidv4(),
            name: task.trim(),
            complete: false,
            prioridad: 4,
        }

        setTasks(prev => [...prev, taskObj])
        setTask("")

    }


    const handleDelete = (id) => {
        setTasks(prev => prev.filter(
            task => task.id !== id
        ))
    }

    const handleEdit = (id, name) => {
        if (show) {
            return
        }
        setEditId(id)
        setNewText(name)

    }

    const handleSave = (id) => {
        if (!newText.trim()) {
            return
        }

        setTasks(prev => prev.map(
            task => task.id === id ?
                { ...task, name: newText.trim() }
                :
                task
        ))
        setEditId(null)
    }

    const completeTask = (id) => {
        console.log("tarea completada con id: ", id)
    }

    return (
        <main>
            {/*configurar fondo con esta logica */
                tasks.length < 1 && <p>fondo</p>
            }
            <h1>Bandeja de Tareas</h1>

            {tasks.map(task => {
                return (
                    <div key={task.id}>

                        {task.id === editId ?
                            <div>
                                <input type="text" value={newText} onChange={(e) => setNewText(e.target.value)} autoFocus />
                                <button onClick={() => handleSave(task.id)}>guardar</button>
                                <button onClick={() => setEditId(null)}>Cancelar</button>

                            </div>
                            :
                            <Task task={task} />
                        }

                    </div>
                )
            })
            }
            {/*funciona solo si id esta en void*/}
            {show && !editId ?
                <>
                    <form onSubmit={handleSubmit}>
                        <input
                            type="text"
                            autoFocus
                            value={task}
                            placeholder="Escribe tu tarea"
                            onChange={(e) => setTask(e.target.value)}
                        />

                        <button>
                            Guardar tareas
                        </button>
                    </form>

                </>
                :
                <>
                    <button onClick={() => setShow(true)}>Añadir tarea</button>
                </>}

            {showModal && <Modal />}
        </main>
    )
}

export default Home