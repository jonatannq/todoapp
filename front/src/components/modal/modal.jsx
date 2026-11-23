import style from './modal.module.css'

function Modal() {
    return (
        <div onClick={() => console.log("modal close")} className={style.modal}>
            <h3>Modal de tareas</h3>
        </div>
    )
}

export default Modal
