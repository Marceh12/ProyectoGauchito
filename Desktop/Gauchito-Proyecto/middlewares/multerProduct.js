const multer = require('multer');
const path = require('path');

let storage = multer.diskStorage({
    destination:(req, file, cb) => {
        cb(null, path.join(__dirname, '../public/images') )
    },
    filename: (req, file, cb) => {
        console.log(file)
        const prodctName = file.originalname;
        cb(null,  prodctName)
    }
});

const uploadFile = multer({storage})

module.exports = uploadFile;