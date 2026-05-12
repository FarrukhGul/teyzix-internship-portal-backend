import env from '../config/env.js'
import jwt from 'jsonwebtoken'


export const adminLogin = async(req, res)=>{

    try{
        const {username, password} = req.body;

        const adminUsername = env.ADMIN_USERNAME
        const adminPassword = env.ADMIN_PASSWORD

        if(username !== adminUsername && adminPassword !== env.ADMIN_PASSWORD){
            return res.status(401).json({
                success : false,
                message : "Ivalid Username or Password,,,"
            })
        }
    }
}

export const getApplications = async(req, res)=>{
    
}

export const addInternship = async(req, res)=>{
    
}

export const deleteInternship = async(req, res)=>{
    
}