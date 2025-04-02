const cloudinary = require('cloudinary').v2;

const upload = cloudinary.config({
    cloud_name: "dvmm2y2vw",
    api_key: "752661968657896",
    api_secret: "231DXpo4rteTAs55cmZyExyax6w",
    secure: true
});


module.exports = upload;