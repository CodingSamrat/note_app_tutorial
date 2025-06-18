import { Router } from 'express'
import { NoteController } from '../controllers/note.controller.js'
import { authMiddleware } from '../middlewares/auth.middleware.js'



export const NoteRouter = Router()
const C = new NoteController()

// [Protected - (auth)]
// Create Note
NoteRouter.post('/create', authMiddleware, C.create)

// Get all Note (by user)
NoteRouter.get('/get', authMiddleware, C.getAllByUser)

// Get Note By Id
NoteRouter.get('/get/:id', authMiddleware, C.getNoteById)

// Update Note
NoteRouter.patch('/update/:id', authMiddleware, C.update)

// Delete Note
NoteRouter.delete('/delete/:id', authMiddleware, C.delete)
