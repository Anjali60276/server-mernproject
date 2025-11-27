const multer = require('multer');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'Uploads/'); // Folder name kept same
    },
    filename: function (req, file, cb) { // fixed argument name (was 'res' instead of 'file')
        const uniqueName = Date.now() + '-' + Math.round(Math.random() * 1E9);
        cb(null, file.fieldname + '-' + uniqueName); // file.originalname (not file.filename)
    }
});

const upload = multer({ storage: storage }); // Exporting 'upload' object

module.exports = upload;
