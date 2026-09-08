// importing the express
const express = require('express');

// called the function by factory method

const app = express();
const notesRoute=require("./route/noteRouter")
// in built modules 
app.use(express.json())  
app.use(express.urlencoded({extended:true}))  // jab form se data ata hai then we will use this function 
// express.urlencoded  =  jab bhi form se data ayega toh yeh parse kar dega taki hum ise easily get kar paye 
// extended:true  =  jab form me data nested format me ho toh we use this like user={ name ={ surname =}}

// importing the morgan module that is an external module that is 3rd party middleware
const morgan = require("morgan");  // to get the information related to a partical request then we use this module
app.use(morgan("dev")); // dev isliye likha hai kyuki hame short form me data chaiye agar detail me chaiye toh we will use the combine 
// in place of dev



// importing the packages from the tour.js file 
// const packages = require('./data/tour');

// // using home route to get the welcome message
// app.get('/',(req,res)=>{
//     res.send("Hi there !!! Welcome 🙏")
// });

// // getting the particular destination according to the route
// app.get("/packages",(req,res)=>{
//     const des=req.query.des;
//     if(!des){
//         res.json(packages);
//     }
//     const result = packages.filter(
//         (item) => item.destination.toLowerCase() === des.toLowerCase()
//     );
//     res.json(result);
// })

// // getting the result according to the route 
// // i.e. id ke according uske corresponding output milegi
// app.get("/packages/:id",(req,res)=>{
//     const id = Number(req.params.id);
//     const onePack = packages.find(
//         item=>item.id==id
//     );
//     res.json(onePack);
// })

// // this will run the server in the PORT - 5000
// app.listen(3000,()=>{
//     console.log("Server is running on port 5000")
// })

// 17-8-2026
// done the code for the getting the particular desitination
//  according to the route as written above in today's class

// 20-8-2026
// we will create three folders controller, model and router 
// as a part of the MVC architecture of the applications
// and created some files in that and entry kahan se start hogi index.js
// we will start from model and go to index.js

// after route we will come here to run these things
// the app will start from here

const port=3000;
const tourRouter = require('./route/tourRouter');  
app.use(express.json());  // is line ke bina code nahi chalega 
// kyuki express does not read or parse the request body
app.use('/tours',tourRouter); // '/tours' yeh home route ban jayega 

app.listen(port,()=>{
    console.log(`Example app listening on port ${port}`);
});


// HOME WORK : USER CRUD OPERATIONS DEMONSTRATION

const UserPort=8080;
const userRouter = require('./route/userRouter');  
app.use(express.json());  // yeh json ka data parse kar dega taki hum data ko use kar paye
app.use('/user',userRouter); 

app.listen(UserPort,()=>{
    console.log(`user is running on the port ${UserPort}`);
});

// 7-9-2026

app.get('/',(req,res)=>{
    console.log("this request is from that device") // first way is that you can write this line everywhere 
    // second way is by using morgan to get the information 
    res.send("HOME PAGE")
})

app.use("/api",notesRoute);

app.listen(5000,()=>{
    console.log("user is running on the port 3000");
});

// for 3rd party module we have installed morgan (npm i morgan)
// some more 3rd party modules :
// cors - cross origin resource sharing - useful when we connect the frontend
// cookie parser - jab frontend se cookie send karte hai toh backend me use parse karne ke liye use hota hai 

// custom middlewares : 

// sabse pehle jo request ati hai vo index.js me jati hai 