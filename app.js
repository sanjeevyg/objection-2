const express = require('express')
const app = express()
const cors = require('cors')
const knex = require('knex')
const connection = require('./knexfile.js')['development']
const database = knex(connection)
const port = 12000



app.use(cors())
app.use(express.json())

const { Model } = require('objection')
Model.knex(database)

class Course extends Model {
    static tableName = "Course"
}
class Student extends Model {
    static tableName = "student"
    static relationMappings = {
        course: {
            relation: Model.ManyToManyRelation,
            modelClass: Course,
            join: {
                from: "student.id", 
                through: {
                    from: "enrollment.student_id",
                    to: "enrollment.course_id"
                }, 
                to: "course.id"
            } 
        }
    }
}



// app.get("/test", (request, response) => {
    // const student = [{id : 1, name: "Yogi"}]
    // response.json({student})
// })


app.get("/students", (request, response) => {
    Student.query()
        .then(students => {
            response.json({students})
        })
})

app.listen(port, () => {
    console.log(`listening to port ${port}`)
})