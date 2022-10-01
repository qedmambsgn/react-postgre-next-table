require('dotenv').config()
const express = require('express')
const cors = require('cors')
const PORT = process.env.PORT || 5000
const router = require('./routes/index')
const errorHandler = require('./middleware/ErrorHandlingMiddleware')
const app = express()
app.use(cors())
app.use(express.json())
app.use('/api', router)

//Throw error, last middleware
app.use(errorHandler)

app.listen(PORT, () => console.log(`Server running on Port: ${PORT}`))
