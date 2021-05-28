const express = require('express')
const app = express()
const cors = require('cors')
const knex = require('knex')
const connection = require('./knexfile.js')['development']
const database = knex(connection)
const port = 9900

app.use(cors())
app.use(express.json())

app.get("/student", (request, response) => {
    database('student').select()    
        .then(students => {
            response.json({students})
        })
})

app.listen(port, () => {
    console.log(`listening to port ${port}`)
})