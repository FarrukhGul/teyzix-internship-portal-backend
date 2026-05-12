import applicationModel from "../models/application.model.js";


export const sendApplication = async (req, res) => {
    try {
        const { name, email, phoneNumber, selectedDomain, message } = req.body

        await applicationModel.create({
            name,
            email,
            phoneNumber,
            selectedDomain,
            message
        })
        return res.status(201).json({
            success: true,
            message : "Form submitted successfully."
        })
    }
    catch (e) {
         if(e.code === 11000){ 
        return res.status(400).json({
            success: false,
            message: "Application already submitted with this email"
        })
    }
    console.error("sendApplication error:", e.message)
    res.status(500).json({
        success: false,
        error: e.message
    })
    }
}