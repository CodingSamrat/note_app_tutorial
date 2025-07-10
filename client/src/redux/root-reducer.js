import { combineReducers } from "@reduxjs/toolkit";
import { authSlice } from "./slices/auth.slice";
import { noteSlice } from "./slices/note.slice";
import { globalSlice } from "./slices/global.slice";

export const RootReduce = combineReducers({
    // Slice.reducer - state values
    auth: authSlice.reducer,
    note: noteSlice.reducer,
    global: globalSlice.reducer
})