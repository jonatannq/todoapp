import { useState } from 'react'
import { taskStore } from '../../store/taskStore'
import Boton from '../boton/boton'
import { ArrowUp, Cable, CarBattery, CircleQuestionMark, CurlyBraces, QrCode } from 'lucide-react'
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



    const handleAdd = () => {
        const limpiar = task.trim()
        value(false)
        if(!limpiar){     
            return
        }
        taskfunction(limpiar)
        setTask("")

    }

    return(
        <div className={styles.content}>
            <input autoFocus onKeyDown={handleKey} value={task} type="text" placeholder="Nombre de la tarea" onChange={(e) => setTask(e.target.value)}/>
            { !task ? (
                <Boton >
                    <CircleQuestionMark />
                </Boton>
            ) : (
                <Boton onClick={handleAdd} >
                    <ArrowUp />
                </Boton>
            )

            }
            
        </div>
    )
}

