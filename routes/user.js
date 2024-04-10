const express = require('express');
const {handleGetAllusers, 
      handleGetUserById ,
      handleDeleteUserById ,
      handleUpdateUserById,
      handleCreateNewUser,} = require("../controllers/user");

const router = express.Router();


router.route("/")
.get(handleGetAllusers)
.post(handleCreateNewUser);
  
  router.route("/:id")
   .get( handleGetUserById)
   .delete(handleDeleteUserById)
   .patch( handleUpdateUserById );
  
   
  
    
     
  
      
      module.exports = router;
   
  