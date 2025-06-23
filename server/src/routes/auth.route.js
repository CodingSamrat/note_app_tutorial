import { Router } from 'express'
import { AuthController } from '../controllers/auth.controller.js'
import { authMiddleware } from '../middlewares/auth.middleware.js';



export const AuthRouter = Router()

const C = new AuthController();

// Register
AuthRouter.post('/signup', C.signup)
// Login
AuthRouter.post('/login', C.login)
// Logout
AuthRouter.get('/logout', authMiddleware, C.logout)
// Session
AuthRouter.get('/session', authMiddleware, C.session)
