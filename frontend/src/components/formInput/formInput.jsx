import { useState } from 'react'
import { taskStore } from '../../store/taskStore'
import Boton from '../boton/boton'
import { ArrowUp, Edit2 } from 'lucide-react'


function FormInput({value}){

    const taskfunction = taskStore((state) => state.addTask) 
    const [task, setTask] = useState("")

    const handleAdd = () => {
        const limpiar = task.trim()
        value(false)
        if(!limpiar){     
            return
        }
        taskfunction(limpiar)
        setTask("")

    }

    const handleKey = (e) => {
        if(e.key === "Escape"){
            value(false)
        }
        if(e.key === "Enter"){
            handleAdd()
        }
    }

    return(
        <div>
            <input onKeyDown={handleKey} value={task} type="text" placeholder="Nombre de la tarea" onChange={(e) => setTask(e.target.value)}/>
            <Boton onClick={handleAdd} >
                <ArrowUp />
            </Boton>
        </div>
    )
}

export default FormInput