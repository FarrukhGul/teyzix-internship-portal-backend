import multer from 'multer'

// step1: store the file in memory (buffer) instead of disk

const storage = multer.memoryStorage();

// Step 2: Only allow PDF files
const fileFilter = (req, file, cb)=>{
    if(file.mimetype === 'application/pdf'){
        cb(null, true) // accept the file.
    }
    else{
        cb(new Error('Only PDF files are allowed'), false);
    }
};

// Step 3: Create multer instance with our config
const upload = multer({
  storage,    
  fileFilter,
  limits: { fileSize: 5 * 1024 * 1024 } // max 5MB
})

export default upload