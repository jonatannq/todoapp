
import { useState } from 'react';
import { userStore } from '../../store/userStore'
import { useNavigate, Link } from 'react-router-dom';

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
        <div>
            <p>Inicio de sesion</p>

            <form onSubmit={submit}>
                <input type="text" placeholder="Usuario" onChange={(e) => setUserText(e.target.value)}/>
                <input type="password" />
                <button>Ingresar</button>
            </form>

            <Link to="/registro">Registrarse</Link>

        </div>
    )
}

export default Login