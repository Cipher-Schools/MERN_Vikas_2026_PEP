import express from 'express';
import session from 'express-session';

const app = express();
app.use(express.json());

app.use(
    session({
        secret: "hello123",
        resave: false,
        saveUninitialized: false
    })
);

const USER = {
    username: "vikas",
    password: "1234"
};

app.post("/login", (req,res)=>{
    const { username, password } = req.body;

    if(username === USER.username && password === USER.password){
        req.session.user = username //store in session

        return res.json({ message: "Login Successful "});
    }

    res.status(401).json({ message: "Invalid Credentials"});
})

app.get("/dashboard",(req,res) => {
    if(!req.session.user) {
        return res.status(401).json({ message: "Unauthorized"});
    }
    res.send(`welcome ${req.session.user}`);
})

app.listen(3000);