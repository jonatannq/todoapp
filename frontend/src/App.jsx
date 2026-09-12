import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from './pages/home/home.jsx'
import Login from './pages/login/login.jsx'
import Registro from './pages/registro/registro.jsx'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/registro" element={<Registro/>}></Route>
      </Routes>
    </BrowserRouter>
  )

}

export default App
