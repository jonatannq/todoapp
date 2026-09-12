import { taskStore } from "../../store/taskStore"
import Boton from "../boton/boton.jsx"

function ListTasks(){

    const list = taskStore((state) => state.tasks)


    const alert = () => {
        console.log("Tareas que denerian cambiar")
    }
    return(
        <div>
            {
                list.map((task, index) => (
                    
                    <div key={index}>
                        <h1>{task}</h1>
                        <Boton onClick={alert}>Eliminar</Boton>
                        <Boton onClick={alert}>Editar</Boton>
                    </div>
                    
                ))
            }
        </div>
    )
}

export default ListTasks