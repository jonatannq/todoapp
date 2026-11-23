import style from './task.module.css'
import { Check, Flag, Ellipsis, Edit2Icon, Trash } from 'lucide-react'



function Task({ task }) {

    return (
        <div className={style.task}>

            <div className={style.nameText}>
                <span className={style.checkCircle} //onClick={(e) => completeTask(task.id)}
                >
                    <Check className={style.check} size={15} />
                </span>
                <p
                //onClick={() => setShowModal(true)}
                >
                    {task.name}
                </p>
            </div>

            <div>
                <button
                //onClick={() => handleDelete(task.id)}
                >
                    <Trash />
                </button>

                <button
                //onClick={() => handleEdit(task.id, task.name)}
                >
                    <Edit2Icon />
                </button>

                <button onClick={() => console.log("prioridad 1")}>
                    <Flag color='red' fill="red" />
                </button>

                <button onClick={() => console.log("prioridad 2")}>
                    <Flag color='orange' fill="orange" />
                </button>

                <button onClick={() => console.log("prioridad 3")}>
                    <Flag color='blue' fill="blue" />
                </button>

                <button onClick={() => console.log("prioridad 4")}>
                    <Flag color='black' />
                </button>
                <button onClick={() => console.log("options")}>
                    <Ellipsis color="#000"
                        fill="none"
                        strokeWidth={2} />
                </button>
            </div>


        </div>



    )
}

export default Task

