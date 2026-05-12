import express from 'express'

import {getInternships, getInternshipsById} from '../controllers/internshipController.js'

const internshipRouter = express.Router();


// GET - /api/internships -> all internships
internshipRouter.get('/', getInternships)

// GET - /api/internships/:id -> only one internship
internshipRouter.get('/:id', getInternshipsById)


export default internshipRouter;