import { useState } from 'react'
import { taskStore } from '../../store/taskStore'
import Boton from '../boton/boton'
import { ArrowUp,  CircleQuestionMark } from 'lucide-react'
import styles from './formInput.module.scss'



export default function FormInput({value}){

    const taskfunction = taskStore((state) => state.addTask) 
    const [task, setTask] = useState("")

    function handleKey (e){
    if(e.key === "Escape"){
            value(false)
        }
        if(e.key === "Enter"){
            handleAdd()
        }
    }

    const handleAdd = async () => {
        const limpiar = task.trim()
        value(false)
        if(!limpiar){     
            return
        }

        const respuesta = await fetch("http://localhost:3000/task",{
            method: "POST", 
            headers:  {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                task: limpiar
            })
        })

        const data = await respuesta.json()
        console.log(data)
        taskfunction(data)
        setTask("")

    }

    return(
    <div className={styles.content}>
        <input 
            autoFocus 
            onKeyDown={handleKey} 
            value={task} type="text" 
            placeholder="Nombre de la tarea" 
            onChange={(e) => setTask(e.target.value)
        }/>
        
        { !task ? (
            <Boton >
                <CircleQuestionMark />
            </Boton>
        ) : (
            <Boton onClick={handleAdd} >
                <ArrowUp />
            </Boton>
        )}      
    </div>
    )
}

