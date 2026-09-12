import { useState } from 'react'
import { userStore } from '../../store/userStore'
import ListTasks from '../../components/listTasks/listTasks'
import FormInput from '../../components/formInput/formInput'
import Boton from '../../components/boton/boton'
import { Edit2, PlusCircle } from 'lucide-react'

function Home() {

    const user = userStore((state) => state.user)
    const [loading, setLoading] = useState(false);
    const [isShow, setIsShow] = useState(false)


    const handleClick = async () => {
        setLoading(true);
        await fetchFake();
        setLoading(false);
    }

    return(
        <div>
            {loading && <p>cargando ....</p>}
            
            <h1>Bandeja de tareas de {user}</h1>
            <ListTasks />


            { !isShow ? (
                <Boton onClick={() => setIsShow(true)}>
                    <PlusCircle  />
                    Añadir Tarea
                </Boton>
            ) : (
                <FormInput value={setIsShow}/>
            )}
            
            
            
        </div>
    )

}

export default Home