import cloudinary from '../config/cloudinary.js'

// upload stream is callback based so we will use promise instead of callback
const uploadResume = (buffer, filename) => {

  // Step 1: create a promise — resolve = success, reject = error
  return new Promise((resolve, reject) => {

    // Step 2: create a Cloudinary upload stream, like a pipe, put buffer and will be uploaded on cloud
    const stream = cloudinary.uploader.upload_stream(
      {
        folder: 'teyzix-resumes', // Cloudinary folder
        resource_type: 'raw',      // PDF = raw type
        public_id: filename,       // name of file
      },
      // Step 3: after uploading callback Callback
      (error, result) => {
        if (error) reject(error)      
        else resolve(result)          
      }
    )

    // Step 4: Put Buffer in stream, actual upload is here
    stream.end(buffer)
  })
}

export default uploadResume