import express from 'express'

import { adminLogin, getApplications, addInternship, deleteInternship, adminLogout } from '../controllers/adminController.js'
import authMiddleWare from '../middleware/authMiddleware.js';




const adminRoutes = express.Router();



// POST - /api/admin/login Admin can login    (PUBLIC)
adminRoutes.post('/login', adminLogin)



// ******************* PROTECTED ROUTES**********************
// POST - /api/admin/applications Admin can view the applications
adminRoutes.get('/applications', authMiddleWare, getApplications)

// POST - /api/admin/internships Admin can post internships
adminRoutes.post('/internships', authMiddleWare, addInternship)

// POST - /api/admin/internships/:id Admin can delete the internships
adminRoutes.delete('/internships/:id', authMiddleWare, deleteInternship)

// POST - /api/admin/logout Admin can  securely logout using token blaclklisting tchnique
adminRoutes.post('/logout', authMiddleWare, adminLogout)


export default adminRoutes;