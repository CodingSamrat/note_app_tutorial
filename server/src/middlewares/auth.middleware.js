import { sendResponse } from "../lib/response.js";
import { UserModel } from "../models/user.model.js";


export async function authMiddleware(req, res, next) {
    try {
        // get cookie (userId)
        const sessionKey = req.cookies["session"] || req.headers["session"];

        if (!sessionKey) return sendResponse(res, 403, { error: "Session is not valid" })

        // Find user
        const user = await UserModel.findById(sessionKey);
        if (!user) return sendResponse(res, 403, { error: "Session is not valid" })

        // add user to request
        req.user = user;

        next()
    } catch (error) {
        console.error(error.message);
        sendResponse(res, 500, { error: "Internal Server Error" })
    }
}