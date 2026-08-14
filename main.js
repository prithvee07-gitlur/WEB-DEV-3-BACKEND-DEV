// 14-8-2026 code

const express=require('express');

const app=express(); // involking the express
app.use(express.json()) // this si the middle where 


app.get('/',(req,res)=>{
    
    res.send({'msg':"Yo bro"}) // or send ke jagan end kar do ya curly bracker laga do
});

app.post('/submit',(req,res)=>{
    res.send("This is the post method")
    console.log(req.body)
})

app.listen(3000,()=>{
    console.log("Server is running")
})

