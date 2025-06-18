import { clearSessionCookie, setSessionCookie } from "../lib/cookie.js";
import { comparePassword, hashPassword } from "../lib/hash.js";
import { sendResponse } from "../lib/response.js";
import { UserModel } from "../models/user.model.js";


export class AuthController {
    async register(req, res) {
        try {
            // Validate params
            const { name, email, password } = req.body;
            if (!name || !email || !password) return sendResponse(res, 401, { error: "Missing required params" })

            // Check existing email
            const eUser = await UserModel.findOne({ email })

            if (eUser) return sendResponse(res, 403, { error: "Email already in use" })

            const user = await UserModel.create({ name, email, password: hashPassword(password) })

            sendResponse(res, 200, { message: "Registration Successful", user })
        } catch (error) {
            console.error(error.message);
            sendResponse(res, 500, { error: "Internal Server Error" })
        }
    }


    /**
     * 
     * @param {*} req 
     * @param {import("express").Response} res 
     * @returns 
     */
    async login(req, res) {
        try {
            // Validate params
            const { email, password } = req.body;
            if (!email || !password) return sendResponse(res, 401, { error: "Missing required params" })

            // Check existing email
            const user = await UserModel.findOne({ email })
            if (!user) return sendResponse(res, 404, { error: "Invalid credentials" })

            // Validate password
            const isValid = comparePassword(password, user.password);
            if (!isValid) return sendResponse(res, 404, { error: "Invalid credentials" })

            setSessionCookie(res, user._id);

            sendResponse(res, 200, { message: "Login Successful" })
        } catch (error) {
            console.error(error.message);
            sendResponse(res, 500, { error: "Internal Server Error" })
        }
    }

    async logout(req, res) {
        try {
            clearSessionCookie(res)
            sendResponse(res, 200, { message: "Logout Successful" })
        } catch (error) {
            console.error(error.message);
            sendResponse(res, 500, { error: "Internal Server Error" })
        }
    }


    async session(req, res) {
        try {
            const user = req.user;

            if (!user) return sendResponse(res, 500, { error: "Internal Server Error" });

            sendResponse(res, 200, { message: "Valid Session", user })
        } catch (error) {
            console.error(error.message);
            sendResponse(res, 500, { error: "Internal Server Error" })
        }
    }

}