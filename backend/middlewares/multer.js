import multer from "multer";
const storage=multer.diskStorage({
    filename: function(req,file,callback){
        callback(null,file.originalname)
    }
})

const upload = multer({storage})

export default upload





// chat gpt 
// import multer from "multer";

// const storage = multer.diskStorage({
//   destination: function (req, file, callback) {
//     callback(null, "uploads");   // folder name
//   },
//   filename: function (req, file, callback) {
//     callback(null, Date.now() + "-" + file.originalname);
//   }
// });

// const upload = multer({ storage });

// export default upload;




