import env from '../config/env.js'
import jwt from 'jsonwebtoken'
import applicationModel from '../models/application.model.js'
import internshipModel from '../models/internship.model.js'
import blacklistModel from '../models/blacklist.model.js'
import bcrypt from 'bcryptjs'
import adminModel from '../models/admin.model.js'

export const adminLogin = async (req, res) => {
    try {
        const { username, password } = req.body

        // find admin from  DB 
        const admin = await adminModel.findOne({ username })
        if (!admin) {
            return res.status(401).json({
                success: false,
                message: "Invalid Username or Password"
            })
        }

        // compare Password
        const isMatch = await bcrypt.compare(password, admin.password)
        if (!isMatch) {
            return res.status(401).json({
                success: false,
                message: "Invalid Username or Password"
            })
        }

        // make  Token 
        const token = jwt.sign(
            { role: 'admin', id: admin._id },
            env.JWT_SECRET,
            { expiresIn: env.JWT_SECRET_EXPIRE }
        )

        return res.status(200).json({
            success: true,
            token
        })

    } catch (e) {
        console.error("adminLogin error:", e.message)
        return res.status(500).json({
            success: false,
            message: "Server Error."
        })
    }
}
export const getApplications = async (req, res) => {
    try {
        // find all applications
        const applications = await applicationModel.find();
        // check if applications doesnot exists
        if (applications.length !== 0) {
            return res.status(200).json({
                success: true,
                data: applications
            })
        }

        else {
            return res.status(404).json({
                success: false,
                message: "Application does not exists.",
            })
        }

    }
    catch (e) {
        console.error("Application error:", e.message)
        return res.status(500).json({
            success: false,
            message: "Server Error."
        })
    }
}

export const addInternship = async (req, res) => {
    try {
        const { title, description, domain, duration, stipend, slots, isOpen } = req.body

        const internships = await internshipModel.create({
            title,
            description,
            domain,
            duration,
            stipend,
            slots,
            isOpen
        });

        return res.status(201).json({
            success: true,
            data: internships
        })
    }
    catch (e) {
        console.error("Application error:", e.message)
        return res.status(500).json({
            success: false,
            message: "Server Error."
        })
    }
}

export const deleteInternship = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedInternship = await internshipModel.findByIdAndDelete(id);

        // 404 check if internship does not exist
        if (!deletedInternship) {
            return res.status(404).json({
                success: false,
                message: "Internship not found"
            })
        }


        return res.status(200).json({
            success: true,
            message: " Internship deleted successfully",
            deletedInternship
        })

    }

    catch (e) {
        console.error("Delete Internship erro.", e.message);
        return res.status(500).json({
            success: false,
            message: " Server Error",
        })
    }
}

export const adminLogout = async (req, res) => {
    try {
        // get token from headers
        const token = req.headers.authorization?.split(" ")[1];

        // save in db token blacklist.
        await blacklistModel.create({ token })

        return res.status(200).json({
            success: true,
            message: "Logged out successfully"
        })

    }

    catch (e) {
        console.error("Logout error:", e.message)
        return res.status(500).json({
            success: false,
            message: "Server Error"
        })
    }
}