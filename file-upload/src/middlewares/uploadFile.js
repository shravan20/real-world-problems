import multer from 'multer';
import path from 'path';

const __dirname = path.resolve(path.dirname('')); 


const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, path.join(__dirname,'/src/uploads'))
    },
    filename: (req, file, cb) => {
      cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
    }
});

const upload = multer({storage: storage});


export { upload };
