// console.log("Hello, World!")

// const cities = require("./data/mydata");
// console.log(cities);

// const chalk = require('chalk');
// console.log(chalk.blue("Hello World !"));


// here we have implemented this using the modules that is the ES6 modules
// as we had installed the latest version of the chalk so we have to use import
// and export in this just as we did in react 

// import chalk from "chalk";
// console.log(chalk.blue("Hello World !")); 


// if we want any info related to the operating system then we will use the os module
// following are its implementation examples 
const os = require('os');   // importing the os module
const userInfo = os.userInfo();   // to get the information about the user
const platform = os.platform();   
const architecture = os.arch();
const uptime = os.uptime();
console.log(userInfo)
console.log(platform)
console.log(architecture)
console.log(uptime)

// fs module illustrations - see documentation of every module for more info
const fs = require('fs');
// used to write the data in the folder data and with this content
fs.writeFileSync('data/data.txt',"Hello World !");   

// path module - gives us the platform specific path like in mac,linux etc
const path = require('path');
const filePath = path.join(__dirname,"data","data.txt") 
// __dirname will give the location of your current directory
console.log(filePath)

// process object is used if you want to make the command line application / arguments
// help us to manage all the processes in the node.js using the run time environment
// it provide info about the currently running application in the node.js

// what is .env and why we use it and what are the environment variables ??? **Interview questions**
// variables that are available in the throughout the node js environment are the environment variables 
// they are like the top level super variables
// to store that we use the .env file , ek toh yeh hamara universal data provider hai and saath me security me help karega
// publically data visible nahi hoga isme 
// global data supplier hota hai yeh

// exit 0 means error free exit and if we have error causing exit then this is exit 1 in the process.exit() command
// see ppt for more info
// node -v me process.version run kar rha hota hai

const process = require("process");
console.log(process.argv)  // this gives the command line info - in the form of array

// Output : C:\Users\MANPREET KAUR\OneDrive\Desktop\WEB DEV\SEM - 3\data\data.txt
// [
//   'C:\\Program Files\\nodejs\\node.exe',
//   'C:\\Users\\MANPREET KAUR\\OneDrive\\Desktop\\WEB DEV\\SEM - 3\\app.js',
//   'Manu'
// ]

console.log(process.argv[2])  // will return "Manu"

// Output : Manu
// type the command "node app.js Manu"

// important in this is .env command 
// we can create this .env file in the editor only not in the folder

require('dotenv').config(); 
// config is providing the intial configuration of the .env means
// .env me jo data hai usko process ke saath link kar raha hai
// config .env file ki configuration karga - means link stablize kar raha hai 
console.log(process.env.PORT);  // we are accessing the env file throught the process

// day -3 

// dot env module is used to load environment variables from a .env file into process.env
const http = require('http');
const server = http.createServer((req,res)=>{
    if (req.url === '/'){
        res.writeHead(200,{'content-type':'text/html'});
        res.end(
            `<h1 style = 'color:red'> Hello World </h1>
            <p> Welcome to my first node js application </p>`
        );}
    else{
        res.writeHead(404,{'content-type':'application/json'});
        res.end(JSON.stringify({error:'Route not found'}));
    }
});

// post request try 
   

// require('dotenv').config();
// const Port = process.env.PORT|| 3000;
// const server = http.createServer((req, res) => {
//     res.writeHead(200, { 'Content-Type': 'text/html' });
//     res.write('<h1>Hello World</h1>');
//     res.write('<p>Welcome to my first node js application</p>');
//     res.end();
// });
// server.listen(Port, () => {
//     console.log(`Server is running on port ${Port}`);
// });