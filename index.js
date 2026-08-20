// importing the express
const express = require('express');

// called the function by factory method

const app = express();

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
app.use('/tours',tourRouter); // '/tours' yeh home route ban jayega 

app.listen(port,()=>{
    console.log(`Example app listening on port ${port}`);
});
