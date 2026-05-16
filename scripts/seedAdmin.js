import 'dotenv/config'
import mongoose from 'mongoose'
import bcrypt from 'bcryptjs'
import adminModel from '../src/models/admin.model.js'
import env from '../src/config/env.js'

const seedAdmin = async () => {
    try {
        await mongoose.connect(env.MONGO_URI)
        console.log("MongoDB Connected!")

        // Check if admin already exists
        const existingAdmin = await adminModel.findOne({ username: env.ADMIN_USERNAME })
        if (existingAdmin) {
            console.log("Admin already exists!")
            process.exit(0)
        }

        // Hash password
        const hashedPassword = await bcrypt.hash(env.ADMIN_PASSWORD, 10)

        // Create admin
        await adminModel.create({
            username: env.ADMIN_USERNAME,
            password: hashedPassword
        })

        console.log("Admin created successfully!")
        process.exit(0)

    } catch (e) {
        console.error("Seed error:", e.message)
        process.exit(1)
    }
}

seedAdmin()