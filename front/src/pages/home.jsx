import { useState } from "react"


function Home() {

    const [task, setTask] = useState("")
    const [tasks, setTasks] = useState([])


    const handleSubmit = ( e ) => {

        e.preventDefault()

        const taskObj = {
            id: Date.now(),
            name:  task, 
            complete: false, 
        }

        setTasks([ ...tasks, taskObj ])
        setTask("")

    }


    const handleDelete = ( id ) => {

        setTasks( tasks.filter(( task ) => task.id !== id) )

    }

    const handleEdit = ( id ) => {

        console.log("edit ind:", id)
        // set para editar no probado 
        // setTasks( tasks.map((task) => task.id === id ? <p>et</p> : { task }) )
    }


    return(
        <main>
            <h1>Bandeja de Tareas</h1>

            {tasks.map(( task ) => {
                return (
                    <div key={ task.id }>
                        <p>{ task.name }</p>

                        <button onClick={() => handleDelete( task.id )}>
                            Del
                        </button>

                        <button onClick={() => handleEdit( task.id )}>
                            edit
                        </button>
                    </div>
                )
            })}
            

            <form onSubmit={ handleSubmit }>
                <input 
                    type="text" 
                    value={ task } 
                    placeholder="Escribe tu tarea" 
                    onChange={( e ) => setTask( e.target.value )}
                />

                <button>
                    Guardar tareas
                </button>
            </form>



        </main>
    )


}

export default Home