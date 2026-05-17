import dotenv from 'dotenv';
dotenv.config();

const env = {
    MONGO_URI: process.env.MONGO_URI,
    ADMIN_USERNAME: process.env.ADMIN_USERNAME,
    ADMIN_PASSWORD: process.env.ADMIN_PASSWORD,
    JWT_SECRET: process.env.JWT_SECRET,
    PORT: process.env.PORT || 3000,
    JWT_SECRET_EXPIRE: process.env.JWT_SECRET_EXPIRE,
    FRONTEND_URL: process.env.FRONTEND_URL,
    CLOUDINARY_CLOUD_NAME: process.env.CLOUDINARY_CLOUD_NAME,
    CLOUDINARY_API_KEY: process.env.CLOUDINARY_API_KEY,
    CLOUDINARY_API_SECRET: process.env.CLOUDINARY_API_SECRET,
    GEMINI_API_KEY: process.env.GEMINI_API_KEY
}

// validation.. like if any variable is missing, we can throw the error for better debugging.
if (!env.MONGO_URI) throw new Error("MONGO DB URI is missing in .env")
if (!env.ADMIN_USERNAME) throw new Error("ADMIN USERNAME is missing in .env")
if (!env.ADMIN_PASSWORD) throw new Error("ADMIN PASSWORD is missing in .env")
if (!env.JWT_SECRET) throw new Error("JWT SECRET Key is missing in .env")
if (!env.PORT) throw new Error("PORT is missing in .env")
if (!env.JWT_SECRET_EXPIRE) throw new Error("JWT SECRET EXPIRY is missing in .env")
if (!env.FRONTEND_URL) throw new Error("Front end url is missing in .env")
if (!env. CLOUDINARY_CLOUD_NAME) throw new Error("CLOUDINARY CLOUD NAME is missing in .env")
if (!env.CLOUDINARY_API_KEY) throw new Error("CLOUDINARY API KEY is missing in .env")
if (!env.CLOUDINARY_API_SECRET) throw new Error(" CLOUDINARY API SECRET is missing in .env")
if (!env.GEMINI_API_KEY) throw new Error("GEMINI_API KEY url is missing in .env")


export default env;