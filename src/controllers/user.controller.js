import {asyncHandler} from '../utils/asyncHandler.js';
//src\middlewares\multer.middleware.js
//src\utils\asyncHandler.js src\utils\asyncHandler.js
const registerUser = asyncHandler(async (req, res, next) => {
    res.status(200).json({
        success: true,
        message: "User registered successfully",
    });
})

export {registerUser}