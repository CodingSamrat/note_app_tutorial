import { combineReducers } from "@reduxjs/toolkit";
import { authSlice } from "./slices/auth.slice";
import { noteSlice } from "./slices/note.slice";

export const RootReduce = combineReducers({
    auth: authSlice.reducer,
    note: noteSlice.reducer
})