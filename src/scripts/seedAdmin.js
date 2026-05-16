import mongoose from 'mongoose'
import bcrypt from 'bcryptjs'
import adminModel from '../models/admin.model.js'
import env from '../config/env.js'
import connectDB from '../config/db.js'

const seedAdmin = async () => {
  await connectDB()
  
  const existing = await adminModel.findOne({ username: env.ADMIN_USERNAME })
  if (existing) {
    console.log('Admin already exists')
    process.exit(0)
  }

  const hashedPassword = await bcrypt.hash(env.ADMIN_PASSWORD, 10)
  await adminModel.create({
    username: env.ADMIN_USERNAME,
    password: hashedPassword
  })

  console.log('Admin created successfully')
  process.exit(0)
}

seedAdmin()