import { useEffect, useState } from "react"
import { taskStore } from "../../store/taskStore"
import Boton from "../boton/boton.jsx"
import { CheckIcon, Edit3, Trash2, XIcon } from 'lucide-react'
import styles from './listTasks.module.scss'

function ListTasks(){

    const list = taskStore((state) => state.tasks)
    const setTasks = taskStore((state) => state.setTasks)
    const deleteTask = taskStore((state) => state.deleteTask)
    const editTask = taskStore((state) => state.editTask)

    const get = async () => {
        const respuesta = await fetch("http://localhost:3000/task")
        const data = await respuesta.json()
        setTasks(data)
    }

    useEffect(() => {
        get()
    },[])

    const [editing, setEditing] = useState(false)
    const [idEditado, setIdEditado] = useState(0)
    const [textEdit, setTextEdit] = useState("")



    const handleDelete = async (id) => {
        const respuesta = await fetch(`http://localhost:3000/task/${id}`, {
            method: "DELETE",
        })
        const data = await respuesta.json()
        deleteTask(id)
    }

    const handleEdit = (task, id) => {
        setTextEdit(task)
        setEditing(true)
        setIdEditado(id)
    }

    const handleUpdate = async (id, text) => {
        if(!text.trim()){
            return
        }
        const respuesta = await fetch(`http://localhost:3000/task/${id}`, {
            method: "PATCH", 
            headers:  {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                task: text
            })
        })
        const data = await respuesta.json()

        editTask(id, text)
        setEditing(false)
    }


    return(
        <div>
            {list.map((task) => (              
                <div key={task.id}>
                    {editing && idEditado === task.id ?  (
                        <div>
                            <input key={task.id} autoFocus type="text" value={textEdit} onChange={(e) => setTextEdit(e.target.value)}/>
                            <Boton onClick={() => handleUpdate(task.id, textEdit)}>
                                <CheckIcon />
                            </Boton>
                            <Boton onClick={() => setEditing(false)}>
                                <XIcon/>
                            </Boton>
                        </div>
                    ) : (
                        <div className={styles.task}>                    
                            <input className={styles.red} type="radio" />
                            <label>{task.title}</label>
                            <div className={styles.showTools}>
                                <Boton variant="delete"onClick={() => handleDelete(task.id)} >
                                    <Trash2  />
                                </Boton>
                                <Boton variant="edit" onClick={() => handleEdit(task.title, task.id)} >
                                    <Edit3 />
                                </Boton>
                            </div>
                        </div>
                    )}
                       
                </div>
            ))
            }

        </div>
    )

}

export default ListTasks