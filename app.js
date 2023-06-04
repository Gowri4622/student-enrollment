require('dotenv').config()
const express=require('express')

const app = express()
const PORT=3500
const studentRouter=require('./routes/student')
app.use(express.json())
const mongoose=require('mongoose')
mongoose.connect(process.env.DB_URL)
const db=mongoose.connection
db.on('error', (errorMessage)=> console.log(errorMessage))

db.once('open',()=>console.log('Connection established'))
// app.use(express.urlencoded({extended : true}))
// app.use(express.json())

app.get('/',(request,response)=>{
    response.send("Working properly")
})
app.use('/api/v1/students',studentRouter)

console.log("This is app.js")
app.listen(PORT, console.log(`Server runs at http://localhost:${PORT}`))