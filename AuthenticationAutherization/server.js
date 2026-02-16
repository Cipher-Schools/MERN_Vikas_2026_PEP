import express from 'express'

const app = express()

app.use(express.json())

const USER = {
    username: "vikas",
    password: "1234"
};

app.post("/login", (req,res)=> {
    const { username, password } = req.body;

    if(username === USER.username && password === USER.password) {
        return res.json({ message : "Login Successful"});
    }

    res.status(401).json({ message: "Invalid Credentials"});
});

app.get('/dashboard', (req,res) => {
    res.send("Welcome to dashboard");
})

app.listen(3000,()=> {
    console.log("http://localhost:3000")
})