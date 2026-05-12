import express from 'express';
import cors from 'cors'
import helmet from 'helmet'

import internshipRoutes from './routes/internshipRoutes.js'
import applicationRoutes from './routes/applicationRoutes.js'
import adminRoutes from './routes/adminRoutes.js'



const app = express();


//middlewares
app.use(helmet())
app.use(cors());
app.use(express.json())
// Api endpoints 
app.use('/api/internships', internshipRoutes);
app.use('/api/applications', applicationRoutes);
app.use('/api/admin', adminRoutes)


export default app;