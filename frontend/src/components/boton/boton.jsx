import styles from './boton.module.scss'


function Boton({children, variant, onClick}) {
    return(
    <button className={`${styles.boton} ${styles[variant]}`} onClick={onClick}>
        <p>{children}</p>
    </button>
    )
}

export default Boton