const multer = require("multer");

const MIME_TIPES = {
  "image/jpg": "jpg",
  "image/jpeg": "jpeg",
  "image/png": "png",
};

const storage = multer.diskStorage({
  destination: (req, file, callback) => {
    callback(null, "images");
  },
  filename: (res, file, callback) => {
    const name = file.originalname.split(" ").join("_");
    const extension = MIME_TIPES[file.mimetype];
    callback(null, name + Date.now() + "." + extension);
  },
});

module.exports = multer({ storage }).single("image");
