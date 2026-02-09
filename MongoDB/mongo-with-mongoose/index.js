import express from 'express'
import mongoose from 'mongoose'
import Student from './models/Student.js'

const app = express();

app.use(express.json());

mongoose.connect("mongodb://localhost:27017/")
.then(()=> console.log("MongoDB connected (with schema)"))

app.post('/student', async (req,res)=> {
    try {
        const student = await Student.create(req.body);
        res.send(student);
    } catch (err) {
        res.status(400).send(err.message);
    }
});

app.listen(3000, ()=> console.log("Server is running"))