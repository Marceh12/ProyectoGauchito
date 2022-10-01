const multer = require('multer');
const path = require('path');

let storage = multer.diskStorage({
    destination:(req, file, cb) => {
        cb(null, path.join(__dirname, '../public/images') )
    },
    filename: (req, file, cb) => {
        console.log(file)
        const userName = file.originalname;
        cb(null,  userName)
    }
});

const fileFilter = (req, file, cb) => {
    if ((file.mimetype).includes('jpeg') || (file.mimetype).includes('png') || (file.mimetype).includes('jpg')){
        
        cb (null, true);
    }

    else {
        
        cb(null,false)
        req.fileError = 'ppp'
    }
}

const upload = multer({fileFilter: fileFilter,storage})

module.exports = upload