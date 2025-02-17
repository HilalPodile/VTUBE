import multer from "multer";

const storage = multer.diskStorage({
    destination: function(req, file, cb){
        cb(null, '/pulic/images');
    },

    filename: function(req, file, cb){
        cb(null, file.originalname);
    }
});

export const Upload = multer({ storage });