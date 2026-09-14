import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { userStore } from '../../store/userStore'
import ListTasks from '../../components/listTasks/listTasks'
import FormInput from '../../components/formInput/formInput'
import Boton from '../../components/boton/boton'
import {  Plus } from 'lucide-react'
import styles from './home.module.scss'

function Home() {
    const navigate = useNavigate()
    const user = userStore((state) => state.user)
    const [loading, setLoading] = useState(false)
    const [isShow, setIsShow] = useState(false)


    useEffect(() => {
        /*if(!user){ Usuario no aunteticado
            navigate("/login")
        }*/
       
    }, [])

    return(
    <div className={styles.content}>
        { false ?  (
            <div>
                <p>Cargando.........</p>
            </div>
        ):(
            <div>
                <h1>Bandeja de tareas de {user}</h1>
                <ListTasks />

                { !isShow ? (
                    <Boton variant="add" onClick={() => {  setIsShow(true)}}>
                        <Plus />
                        Añadir Tarea
                    </Boton>
                ) : (
                    <FormInput value={setIsShow}/>
                )}  
            </div>
        )}                    
    </div>
    )

}

export default Home