import validator from "validator"
import bcrypt from 'bcrypt'
import {v2 as cloudinary}from "cloudinary"
// import {cloudinary} from "../config/cloudinary.js"
import doctorModel from "../models/doctorModel.js"
const addDoctors =async (req,res)=>{
    try{
const{name, email, password, speciality, degree, experience, about, fees, address }=req.body
const imageFile = req.file

//cheaking for all data to add dr
if(!name || !email || !password || !speciality || !degree || !about || !fees || !address) {   
return res.json({success:false,message:"missing details"})

}
// validating email format

if(!validator.isEmail(email)){
return res.json({success:false,message:"plz enter the valid email"})


}
//validating strong pssword

if(password.length < 8){
return res.json({success:false,message:"plz enter the strong password"})

}
//hasing fr password

const salt =await bcrypt.genSalt(10)
const hashedPassword=await bcrypt.hash(password, salt)


//uploasd image to cloudanary
const imageUpload =await cloudinary.uploader.upload(imageFile.path,{resource_type:"image"})
const imageUrl = imageUpload.secure_url

const doctorData ={
    name,
    email,
    image:imageUrl,
    password:hashedPassword,
    speciality,
    degree,
    experience,
    about,
    fees,
    address:JSON.parse(address),
    date:Date.now()

}

const newDoctor = new doctorModel(doctorData)
await newDoctor.save()

res.json({success:true,message:"Doctor Added" })

}catch(error){
    console.log(error);
    res.json({success:false,message:error.message})
    

    }
}
export {addDoctors}