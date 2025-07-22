import { Router } from 'express'
import UserController from '../controllers/user.controller.js'
import { upload } from '../middlewares/multer.middleware.js';



export const UserRouter = Router();
const user = new UserController();
// Get User Profile
// Update User (name, email, password, avatar)
// Delete user account

UserRouter.post('/update/avatar', upload.single('avatar'), user.updateAvatar)


