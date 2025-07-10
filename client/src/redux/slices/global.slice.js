import { createSlice } from '@reduxjs/toolkit';

export const globalSlice = createSlice({
    name: "global",
    initialState: {
        searchQuery: '',
    },
    // Action - for non async task
    reducers: {
        setSearchQuery: (state, action) => {
            state.searchQuery = action.payload;
        },
    },
    // Extra Actions - for async task
    extraReducers: (builder) => {
    }

});

