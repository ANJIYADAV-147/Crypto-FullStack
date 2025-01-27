const express=require('express');
const mysql=require('mysql');
const cors=require('cors');

const dotenv=require('dotenv');
dotenv.config({path:'./.env'})

const app=express();
app.use(cors({
    origin: 'http://localhost:3000', // Replace with the actual URL of your React app
    methods: ['GET', 'POST'],
  }));
app.use(express.json());

const db=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'signup'
})





app.get('/signup',(req,res)=>{
    const sql='Select * from Login';
    db.query(sql,(err,data)=>{
        if(err){
            return res.json({error:err})
        }
        return res.json(data)
    })
})

app.post('/signup', (req, res) => {
    const sql = 'INSERT INTO Login (username, email, password) VALUES (?, ?, ?)';
    const values = [
        req.body.username,
        req.body.email,
        req.body.password,
    ];
    console.log(values)
    db.query(sql, values, (err, data) => {
        if (err) {
            console.error('Database Error:', err); 
            return res.status(500).json({ error: err.message });
        }
        return res.status(201).json({ message: 'User created successfully', userId: data.insertId});
});
});

app.get('/', (req, res) => {
    res.send('Hello, World!');
});




app.post('/login', (req, res) => {
    const sql = 'SELECT * FROM login WHERE `username`=? AND `password`=?';
    db.query(sql, [req.body.username, req.body.password], (err, data) => {
        if (err) {
            
            return res.json({ error: err });
        }
        if (data.length > 0) {
            console.log(data)
            return res.json({ message: 'Login successful', user: data[0]});
        } else {
            return res.json({ message: 'Invalid email or password' });
        }
    });
});

const PORT = process.env.PORT || 5000


app.listen(PORT,()=>{
  console.log('server is running on port 5000');  
})