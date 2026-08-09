
const express = require("express")
const dotenv = require("dotenv")
const cors = require("cors")

dotenv.config({
    path: "./config/.env"
})

// Middleware
app.use(cors({
    origin: [
        'http://localhost::5173/',
        'www.relaymessage.software'
    ],
    method: ["GET", "POST"]
}))

app.use(express.json())
app.use(express.urlencoded ({ extended: true}))

// Routes


// Error Handling

const app = express()

PORT = process.env.PORT || 4000

app.listen(PORT, () => {
    console.log(`Server is working on port no: ${PORT}`)
})