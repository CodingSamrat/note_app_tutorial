import { sendResponse } from "../lib/response.js";

export default class UserController {
    /**
     * Update user avatar. Update if existing or Upload new one.
     * 
     * @method: POST
     * @access: Protected [authMiddleware]
     * @route /api/user/update/avatar
     */
    async updateAvatar(req, res) {
        try {
            const avatar = req.file
            const { title, content } = req.body

            console.log(body)

            // Move avatar to static

            sendResponse(res, 200, { message: "Avatar Updated", avatar })
        } catch (error) {
            console.error(error.message);
            sendResponse(res, 500, { error: "Internal Server Error" })
        }
    }
}

// static/avatar/avatar-1753186661258-258189327.jpg