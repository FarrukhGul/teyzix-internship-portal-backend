// src/controllers/applicationController.js
import applicationModel from '../models/application.model.js'
import uploadResume from '../services/cloudinaryService.js'

const sendApplication = async (req, res) => {
  try {
    // Step 1: get form fileds from the frontend
    const { name, email, phoneNumber, selectedDomain, message } = req.body

    // Step 2: check Resume is uploaded or not
    // req.file,  multer kept file here in memory
    let resumeUrl = null
    if (req.file) {

      // Step 3: create Unique filename, avoid duplicate from same email 
      const filename = `resume_${email}_${Date.now()}`

      // Step 4: upload Cloudinary , will get a URL
      const result = await uploadResume(req.file.buffer, filename)
      resumeUrl = result.secure_url
    }

    // Step 5: save application in DB
    await applicationModel.create({
      name,
      email,
      phoneNumber,
      selectedDomain,
      message,
      resumeUrl  
    })

    return res.status(201).json({
      success: true,
      message: 'Form submitted successfully.'
    })

  } catch (e) {
    // Step 6: check duplicate  email 
    if (e.code === 11000) {
      return res.status(400).json({
        success: false,
        message: 'Application already submitted with this email'
      })
    }
    console.error('sendApplication error:', e.message)
    res.status(500).json({ success: false, error: e.message })
  }
}

export default sendApplication