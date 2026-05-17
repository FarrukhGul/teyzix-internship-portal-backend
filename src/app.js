import express from 'express';
import cors from 'cors'
import helmet from 'helmet'

import internshipRoutes from './routes/internshipRoutes.js'
import applicationRoutes from './routes/applicationRoutes.js'
import adminRoutes from './routes/adminRoutes.js'

const app = express();

app.use(cors({
  origin: process.env.FRONTEND_URL || 'https://teyzix-internship-portal-frontend.vercel.app',
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization']
}))
app.use(helmet({
  crossOriginResourcePolicy: { policy: "cross-origin" }
}))
app.use(express.json())

app.use('/api/internships', internshipRoutes);
app.use('/api/applications', applicationRoutes);
app.use('/api/admin', adminRoutes)

app.get('/', (req, res) => {
  res.json({ status: 'ok', message: 'Teyzix Core API running' })
})

export default app;