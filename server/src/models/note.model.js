import { Schema, Types, model } from "mongoose";


const NoteSchema = new Schema({
    userId: {
        type: Types.ObjectId,
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
    content: {
        type: String,
        required: true,
    },
},
    {
        timestamps: true,
    }
);


export const NoteModel = model("notes", NoteSchema);