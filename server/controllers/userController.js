import userModel from '../models/userModel.js';
import validator from 'validator';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

const createToken = (id) => {
    return jwt.sign({id},process.env.JWT_SECRET)
}

//user login
const loginUser = async(req,res) => {
    try{
       const {email, password} = req.body;

       const user = await userModel.findOne({email});
       if(!user){
        return res.json({success:false, message:"User does not exists"})
       }
       
       const isMatch = await bcrypt.compare(password, user.password)
       if(isMatch){
            const token = createToken(user.id)
            res.json({success:true, token})
       }else{
            res.json({success:false, message:'Invalid credentials'})
       }

    }catch(err){
        console.log(err);
        res.json({success:false, message:err.message})
    }
}

//user register
const registerUser = async (req,res) => {
        try{
            const {name, email, password} = req.body;
            //checking email 
            const exists = await userModel.findOne({email})
            if(exists){
                return res.json({success:false, message:"User already exists"})
            }
            //validate email & password
            if(!validator.isEmail(email)){
                return res.json({success:false, message:"Please enter a valid email"})
            }
            if(password.length < 8){
                return res.json({success:false, message:"Please enter a strong password"})
            }
            //hash password
            const salt = await bcrypt.genSalt(10)
            const hashedPassword = await bcrypt.hash(password,salt);

            const newUser = new userModel({
                name, email, password:hashedPassword
            })

            const user = await newUser.save()

            const token = createToken(user.id)

            res.json({success:true, token})
        }catch(err){
            console.log(err);
            res.json({success:false, message:err.message})
        }
}



export {loginUser, registerUser}