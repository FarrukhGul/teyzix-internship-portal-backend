import express from 'express'
import sendApplication from '../controllers/applicationController.js'
import validate from '../middleware/validateMiddleware.js'
import {applicationValidator} from '../validators/applicationValidator.js'

const applicationRouter = express.Router();


applicationRouter.post('/', validate(applicationValidator),sendApplication);


export default applicationRouter;

