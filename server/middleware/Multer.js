import multer from 'multer';
import fs from 'fs';
import path from 'path';

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    const uploadPath = path.join('uploads');
    
    // Check if folder exists, if not create it
    if (!fs.existsSync(uploadPath)) {
      fs.mkdirSync(uploadPath, { recursive: true }); // recursive allows nested dirs
    }

    cb(null, uploadPath);
  },

  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname);
  },
});

export const uploads = multer({ storage });
