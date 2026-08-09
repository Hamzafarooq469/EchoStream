
const express = require("express")
const dotenv = require("dotenv")
const cors = require("cors")
const pool = require("./config/db")

dotenv.config({
    path: "./config/.env"
})

const app = express()

// Middleware
// app.use(cors({
    // origin: [
        // 'http://localhost:3000',
        // 'www.relaymessage.software'
    // ],
    // method: ["GET", "POST"]
// }))

app.use(cors())

app.use(express.json())
app.use(express.urlencoded ({ extended: true}))

// Routes


// Error Handling

// Test
app.get('/', async(req, res) => {
    const result = await pool.query("SELECT current_database()")
    res.send(`The database name is: ${result.rows[0].current_database}`)
})


PORT = process.env.PORT || 4000

app.listen(PORT, () => {
    console.log(`Server is working on port no: ${PORT}`)
})