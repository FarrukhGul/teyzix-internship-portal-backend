import express from 'express'
import sendApplication from '../controllers/applicationController.js'
import validate from '../middleware/validateMiddleware.js'
import {applicationValidator} from '../validators/applicationValidator.js'
import upload from '../middleware/uploadMiddleware.js' 

const applicationRouter = express.Router();

applicationRouter.post('/',upload.single('resume'),validate(applicationValidator),sendApplication)



export default applicationRouter;

