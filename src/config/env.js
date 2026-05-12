import dotenv from 'dotenv';
dotenv.config();

const env = {
    MONGO_URI: process.env.MONGO_URI,
    ADMIN_USERNAME: process.env.ADMIN_USERNAME,
    ADMIN_PASSWORD: process.env.ADMIN_PASSWORD,
    JWT_SECRET: process.env.JWT_SECRET,
    PORT: process.env.PORT || 3000,
    JWT_SECRET_EXPIRE : process.env.JWT_SECRET_EXPIRE
}

// validation.. like if any variable is missing, we can throw the error for better debugging.
if (!env.MONGO_URI) throw new Error("MONGO DB URI is missing in .env")
if (!env.ADMIN_USERNAME) throw new Error("ADMIN USERNAME is missing in .env")
if (!env.ADMIN_PASSWORD) throw new Error("ADMIN PASSWORD is missing in .env")
if (!env.JWT_SECRET) throw new Error("JWT SECRET Key is missing in .env")
if (!env.PORT) throw new Error("PORT is missing in .env")
if (!env.JWT_SECRET_EXPIRE) throw new Error("JWT SECRET EXPIRY is missing in .env")
    

export default env;