import { useState } from "react"
import { taskStore } from "../../store/taskStore"
import Boton from "../boton/boton.jsx"
import { Edit3, Trash2 } from 'lucide-react'
import FormInput from "../formInput/formInput.jsx"
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
                            <div>
                                <input type="text" value={textEdit} onChange={(e) => setTextEdit(e.target.value)}/>
                                <Boton onClick={() => handleUpdate(index, textEdit)}>update</Boton>
                            </div>
                        ) : (
                            <div>
                                <p>{task}</p>
                                <Boton onClick={() => handleDelete(index)} >
                                    <Trash2  />
                                </Boton>
                                <Boton onClick={() => handleEdit(task, index)} >
                                    <Edit3 />
                                </Boton>
                            </div>
                        )}
                       
                    </div>
                    

                ))
            }
        </div>
    )
}

export default ListTasks