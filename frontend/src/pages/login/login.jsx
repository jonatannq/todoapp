
import { useState } from 'react';
import { userStore } from '../../store/userStore'
import { useNavigate, Link } from 'react-router-dom';
import Boton from '../../components/boton/boton';
import styles from './login.module.scss'

function Login(){

    const navigate = useNavigate()
    const setUser = userStore((state) => state.setUser)

    const [userText, setUserText] = useState("")

    const submit = (e) => {
        e.preventDefault(); 
        if(!userText){
            alert("usuario vacio")
            return
        }

        setUser(userText)
        navigate("/")
    }

    return(
        <div className={styles.content}>
            <p>Inicio de sesion</p>

            <form onSubmit={submit}>
                <input type="text" placeholder="Usuario" onChange={(e) => setUserText(e.target.value)}/>
                <input type="password" placeholder='Contraseña' />
                <Boton variant="login">
                    Ingresar
                </Boton>
            </form>

            <Link className={styles.link} to="/registro">Registrarse</Link>

        </div>
    )
}

export default Login