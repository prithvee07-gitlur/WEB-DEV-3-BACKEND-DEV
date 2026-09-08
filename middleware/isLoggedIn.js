const isLoggedIn = (req,res,next)=>{
    let loggedIn = false;
    if (loggedIn){
        next() // next wale function ko call kar dena hai bas i.e. get notes wale function 
        // jo routes me call kar rakha hai 
    }else{
        res.send("error")
    }
}

module.exports=isLoggedIn; // ise routes me use karenge getnotes wale function chalne se pehle 

// response age wale function me jayega jo is function ke baad jayega 