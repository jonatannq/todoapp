import { useState } from "react"
import { taskStore } from "../../store/taskStore"
import Boton from "../boton/boton.jsx"
import { CheckIcon, Edit3, Trash2, XIcon } from 'lucide-react'
import styles from './listTasks.module.scss'

function ListTasks(){

    const list = taskStore((state) => state.tasks)
    const deleteTask = taskStore((state) => state.deleteTask)
    const editTask = taskStore((state) => state.editTask)
    const [editing, setEditing] = useState(false)
    
    const [idEditado, setIdEditado] = useState(0)
    const [textEdit, setTextEdit] = useState("")

    const handleDelete = (id) => {
       deleteTask(id)
    }

    const handleEdit = (task, id) => {
        setTextEdit(task)
        setEditing(true)
        setIdEditado(id)
    }

    const handleUpdate = (id) => {
        editTask(id, textEdit)
        setEditing(false)
    }


    return(
        <div>
            {
                list.map((task, index) => (             
                    
                    <div key={index}>
                        {editing && idEditado === index ?  (
                            <div >
                                <input key={index} autoFocus type="text" value={textEdit} onChange={(e) => setTextEdit(e.target.value)}/>
                                <Boton onClick={() => handleUpdate(index, textEdit)}>
                                    <CheckIcon />
                                </Boton>
                                <Boton onClick={() => setEditing(false)}>
                                    <XIcon/>
                                </Boton>
                            </div>
                        ) : (
                            <div className={styles.task}>
                                

                                
                                <input className={styles.red} type="radio" />
                                <label>{task}</label>
                                <div className={styles.showTools}>
                                    <Boton variant="delete"onClick={() => handleDelete(index)} >
                                        <Trash2  />
                                    </Boton>
                                    <Boton variant="edit" onClick={() => handleEdit(task, index)} >
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