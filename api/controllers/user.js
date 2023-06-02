import User from "../models/User.js";

//update
export const updatedUser = async ( req, res, next)=>{
    try{
        const updatedHotel = await User.findByIdAndUpdate(req.params.id, {$set: req.body}, { new: true})
        res.status(200).json(updatedUser)
    }catch(err){
        next(err);
    }

};


//delete
export const deleteUser = async ( req, res, next)=>{
    try{
        await User.findByIdAndDelete(
            req.params.id)
        res.status(200).json("User has beeing deleted")
    }catch(err){
        res.status(500).json(err)
    }
};
//get
export const getUser = async ( req, res, next)=>{
    try{
        const user = await User.findByIde(
          req.params.id)
          res.status(200).json(user)
      }catch(err){
          next(err)
      }
};

//get all
export const getUsers = async ( req, res, next)=>{
    
    try{
        const users = await User.find()
          res.status(200).json(users)
      }catch(err){
          next(err)
      }
}