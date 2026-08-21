// model se tour.json se combine karenge
const fs = require("fs"); // to acces the tour.json file
const path = require("path"); // to get the files path

const packageFilePath= path.join(__dirname,'../data/tour.json') // convert the path according to the system

const getAll = () => {
    const data = fs.readFileSync(packageFilePath,'utf-8');
    return JSON.parse(data)
}    // we will get all the data from tour.json

const getById = (id) =>{
    const data = fs.readFileSync(packageFilePath,'utf-8'); 
    // reading file in the syncronous fashion from the packageFilePath in utf-8 format
    const packages = JSON.parse(data);
    return packages.find(pkg=>pkg.id == id);
}  // we will get the things by the matching id entered by the user

// post request
const save = (tour) => {
    const data = fs.readFileSync(packageFilePath,'utf-8'); 
    const packages = JSON.parse(data);
    packages.push(tour);
    fs.writeFileSync(packageFilePath,JSON.stringify(packages,null,2),'utf-8');
}

// updating the values
const update = (id,updatedTour)=>{
    const data = fs.readFileSync(packageFilePath,'utf-8');
    const packages = JSON.parse(data);
    const index= packages.findIndex(pkg=>pkg.id===id);
    if (index!==-1){
        packages[index]={...packages[index],...updatedTour};
        fs.writeFileSync(packageFilePath,JSON.stringify(packages,null,2),'utf-8');
    }
}

// deleting the values
const deleteTour=(id)=>{
    const data = fs.readFileSync(packageFilePath,'utf-8');
    const packages=JSON.parse(data);
    const updatedPackages = packages.filter(pkg=>pkg.id!==id);
    fs.writeFileSync(packageFilePath,JSON.stringify(updatedPackages,null,2),'utf-8');
}

// exporting the things we created above by creating them into the modules 
// and then we will move to the controller for further work 
module.exports={
    getAll,
    getById,
    save,
    update,
    deleteTour
}