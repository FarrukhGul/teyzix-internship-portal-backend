import express from 'express'
import { adminLogin, getApplications, addInternship, deleteInternship, adminLogout, analyzeApplication } from '../controllers/adminController.js'
import authMiddleWare from '../middleware/authMiddleware.js';

const adminRoutes = express.Router();

// POST - /api/admin/login Admin can login (PUBLIC)
adminRoutes.post('/login', adminLogin)

// ******************* PROTECTED ROUTES *********************

// GET - /api/admin/applications Admin can view the applications
adminRoutes.get('/applications', authMiddleWare, getApplications)

// POST - /api/admin/applications/:id/analyze  Analyze resume from the Gemini
adminRoutes.post('/applications/:id/analyze', authMiddleWare, analyzeApplication)

// POST - /api/admin/internships Admin can post internships
adminRoutes.post('/internships', authMiddleWare, addInternship)

// DELETE - /api/admin/internships/:id Admin can delete the internships
adminRoutes.delete('/internships/:id', authMiddleWare, deleteInternship)

// POST - /api/admin/logout Admin can securely logout
adminRoutes.post('/logout', authMiddleWare, adminLogout)

export default adminRoutes;