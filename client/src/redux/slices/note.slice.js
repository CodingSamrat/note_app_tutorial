import { createSlice } from '@reduxjs/toolkit';
import { NoteAction } from '../actions/note.action';

export const noteSlice = createSlice({
    name: "note",
    initialState: {
        note: null,
        allNote: null,
        loading: false,
    },
    reducers: {
        setSearchQuery: (state, { payload }) => {
            state.searchQuery = payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(NoteAction.create.pending, (state, action) => {
                state.loading = true;
            })
            .addCase(NoteAction.create.fulfilled, (state, action) => {
                state.loading = false;
                state.note = action.payload.note
            })
            .addCase(NoteAction.create.rejected, (state, action) => {
                state.loading = false;
                state.user = null;
            })


        builder
            .addCase(NoteAction.getAll.pending, (state, action) => {
                state.loading = true;
            })
            .addCase(NoteAction.getAll.fulfilled, (state, action) => {
                state.loading = false;
                state.allNote = action.payload.allNote
            })
            .addCase(NoteAction.getAll.rejected, (state, action) => {
                state.loading = false;
                state.user = null;
            })

        builder
            .addCase(NoteAction.getById.pending, (state, action) => {
                state.loading = true;
            })
            .addCase(NoteAction.getById.fulfilled, (state, action) => {
                state.loading = false;
                state.note = action.payload.note
            })
            .addCase(NoteAction.getById.rejected, (state, action) => {
                state.loading = false;
                state.user = null;
            })

    }
});

