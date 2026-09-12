import { useState } from 'react'
import { userStore } from '../../store/userStore'
function Home() {

    const user = userStore((state) => state.user)

    const [task, setTask] = useState("")
    const [tasks, setTasks] = useState([])



    const [editando, setEditando] = useState(false)
    const [ideditado, setIdeditado] = useState(0)
    const [textoEditado, setTexto] = useState("")


    const [loading, setLoading] = useState(false);

    const handleClick = async () => {
        setLoading(true);

        await fetchFake();

        setLoading(false);
    }


    const handleAdd = () => {
        setTasks([...tasks, task])
        setTask("")
    }

    const handleDelete = (id) => {
        setTasks(tasks.filter((_, index) => index != id))
    }

    const handleEdit = (tarea, id) => {
        setEditando(true)
        setIdeditado(id)
        setTexto(tarea)
    }


    const handleUpdate = (id) => {
        setTasks(tasks.map((task, index) => 
            index === id ? textoEditado : task
        ))
        setEditando(false)
    }




    return(
        <div>
            {loading && <p>cargando ....</p>}
            
            <h1>Bandeja de tareas de {user}</h1>
            <button onClick={handleClick}>cargar</button>
            {
                tasks.map((task, index) => {
                    return(
                        <div key={index}>
                            {editando && ideditado === index ?  (
                                <div>
                                    <input autoFocus value={textoEditado} type="text" onChange={(e) => setTexto(e.target.value)}/>
                                    <button onClick={() => handleUpdate(index)}>Update</button>
                                </div>
                            ) : (
                                <div>
                                    <p>{task}</p>
                                    <button onClick={() => handleDelete(index)} >del</button>
                                    <button onClick={() => handleEdit(task, index)} >edit</button>
                                </div>
                            )}
                            
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