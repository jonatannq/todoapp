
const express = require("express")
const mysql = require("mysql2/promise")
const cors = require("cors")

const app = express()
app.use(express.json())
app.use(cors())

const db = mysql.createPool({
    host: "localhost",
    user: "root", 
    password: "alon26&",
    database: "todoapp"
})


app.get("/task", async (req, res) => {
    try {
        const [resultado] = await db.query("SELECT * FROM task")
        res.json(resultado)

    } catch (error) {
        console.error("Error en la consulta:", error);
        res.json(error) 
    }
})


app.post("/task", async (req, res) => {
    const { task } = req.body
    try {
        const [resultado] = await db.query("INSERT INTO task(title) VALUES(?)",[task] )
        res.json({
            id: resultado.insertId,
            title: task
        })
        
    } catch (error) {
        console.error("Error en post: ", error)
        res.json(error)
    }
    
})


app.delete("/task/:id", async (req, res) => {
    const { id } = req.params
    try {
        const [resultado] = await db.query("DELETE FROM task WHERE id = ?",[id])
        res.json(resultado)
    } catch (error) {
        
    }
    
}) 

app.patch("/task/:id", async (req, res) => {
    const { id } = req.params
    const { task } = req.body
    const [resultado] = await db.query("UPDATE task SET title = ? WHERE id = ?", [task, id] )
    res.json(resultado)
})


app.listen(3000, () =>{
    console.log("Escuando el server")
})