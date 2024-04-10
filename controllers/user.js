const User = require("../models/user");

async function handleGetAllusers(req,res) {
    const allDBusers = await  User.find({});
    return res.json(allDBusers);
} 


async function handleGetUserById(req,res){
  try{
    const user = await User.findById(req.params.id)
       
    return res.json(user);
  }
  catch (error) {
    // if id is incorrect
   console.error("user not found:", error);
   return res.status(500).json({ status: "user not found" });
 }
}


async function handleDeleteUserById(req,res){
    const deletedId = req.params.id;
    
    try{
      const deletedUser = await User.findByIdAndDelete(deletedId);
    
      return res.json(`the user with id ${deletedId} has been deleted successfully`);
    }
    catch (error) {
       // if id is incorrect
      console.error("Error deleting user:", error);
      return res.status(500).json({ status: "error deleting user" });
    }
}


async function handleUpdateUserById (req,res){
    await User.findByIdAndUpdate(req.params.id , {lastName: "changed"});
    
  
    if(!User){
        return res.status(400).json({status : "user not found"});
    } 
     return res.json({status :"pending" });
}


async function handleCreateNewUser(req,res){
    const body = req.body;
      if(!body.first_name || !body.last_name || !body.email || !body.job_title || !body.gender )
       return res.status(400).json({ msg: "all fields are required"});
  
    const result =await User.create({
      firstName : body.first_name,
      lastName: body.last_name,
      email: body.email,
      gender: body.gender,
      jobTitle: body.job_title,
    });
  return res.status(201).json({msg: "User created succesfully" , id: result._id});
}


module.exports ={
    handleGetAllusers,
    handleGetUserById,
    handleDeleteUserById,
    handleUpdateUserById,
    handleCreateNewUser,
}