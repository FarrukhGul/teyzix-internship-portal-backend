import express from 'express'

import { adminLogin, getApplications, addInternship, deleteInternship } from '../controllers/adminController.js'




const adminRoutes = express.Router();



// POST - /api/admin/login Admin can login
adminRoutes.post('/login', adminLogin)


// POST - /api/admin/applications Admin can view the applications
adminRoutes.get('/applications', getApplications)


// POST - /api/admin/internships Admin can post internships
adminRoutes.post('/internships', addInternship)


// POST - /api/admin/internships/:id Admin can delete the internships
adminRoutes.delete('/internships/:id', deleteInternship)

export default adminRoutes;