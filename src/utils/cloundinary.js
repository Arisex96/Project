import {v2 as cloudinary} from 'cloudinary';
import fs from 'fs';

cloudinary.config({ 
    cloud_name: process.env.CLOUDINARY_NAME, 
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
    // Click 'View API Keys' above to copy your API secret
});

const uploadOncloundinary = async (localFilePath) => {  
    try {
        if(!localFilePath)
        //const result = await cloudinary.uploader.upload(file.path);
        return null;
        const response = await cloudinary.uploader.upload(localFilePath,
            {
                resource_type: "auto"
            }
        )
        console.log("file has been uploaded",response.url);
        return response;
}catch(error){
    fs.unlinkSync(localFilePath);
}
}
export {uploadOncloundinary}