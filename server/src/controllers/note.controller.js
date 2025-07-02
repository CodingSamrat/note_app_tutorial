import { sendResponse } from "../lib/response.js";
import { NoteModel } from "../models/note.model.js";

export class NoteController {
    async create(req, res) {
        try {

            const userId = req.user._id
            const { title, content } = req.body;
            if (!title || !content) return sendResponse(res, 401, { error: "Missing required params" })

            // create note to database
            const note = await NoteModel.create({ userId, title, content })

            sendResponse(res, 200, { message: "Note Created", note })
        } catch (error) {
            console.error(error.message);
            sendResponse(res, 500, { error: "Internal Server Error" })
        }
    }


    async getAllByUser(req, res) {
        try {
            const userId = req.user._id

            const allNote = await NoteModel.find({ userId })

            sendResponse(res, 200, { message: "All Notes Fetched", allNote })
        } catch (error) {
            console.error(error.message);
            sendResponse(res, 500, { error: "Internal Server Error" })
        }
    }


    async getNoteById(req, res) {
        try {
            const id = req.params.id;

            const note = await NoteModel.findById(id)
            if (!note) return sendResponse(res, 404, { error: "Note not found" })

            sendResponse(res, 200, { message: "Note Fetched By Id", note })
        } catch (error) {
            console.error(error.message);
            sendResponse(res, 500, { error: "Internal Server Error" })
        }
    }

    async update(req, res) {
        try {
            const id = req.params.id;

            // Validate params
            const { title, content } = req.body;
            if (!title || !content) return sendResponse(res, 401, { error: "Missing required params" })

            // update note 
            const note = await NoteModel.findByIdAndUpdate(id, { $set: { title, content } }, { new: true })


            sendResponse(res, 200, { message: "Note Updated", note })
        } catch (error) {
            console.error(error.message);
            sendResponse(res, 500, { error: "Internal Server Error" })
        }
    }

    async delete(req, res) {
        try {
            const id = req.params.id;

            // update note 
            const note = await NoteModel.findByIdAndDelete(id)

            sendResponse(res, 200, { message: "Note Deleted", note })
        } catch (error) {
            console.error(error.message);
            sendResponse(res, 500, { error: "Internal Server Error" })
        }
    }
}