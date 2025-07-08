import { createSlice } from '@reduxjs/toolkit';
import { AuthAction } from '../actions/auth.action';

export const authSlice = createSlice({
    name: "auth",
    initialState: {
        user: null,
        searchQuery: '',
        loading: false,
    },
    reducers: {
        setSearchQuery: (state, { payload }) => {
            state.searchQuery = payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(AuthAction.signup.pending, (state, action) => {
                state.loading = true;
            })
            .addCase(AuthAction.signup.fulfilled, (state, action) => {
                state.loading = false;
            })
            .addCase(AuthAction.signup.rejected, (state, action) => {
                state.loading = false;
                state.user = null;
            })


        builder
            .addCase(AuthAction.login.pending, (state, action) => {
                state.loading = true;
            })
            .addCase(AuthAction.login.fulfilled, (state, action) => {
                state.loading = false;
                state.user = action.payload.user;
            })
            .addCase(AuthAction.login.rejected, (state, action) => {
                state.loading = false;
                state.user = null;
            })

        builder
            .addCase(AuthAction.logout.pending, (state, action) => {
                state.loading = true;
            })
            .addCase(AuthAction.logout.fulfilled, (state, action) => {
                state.loading = false;
                state.user = action.payload.user;
            })
            .addCase(AuthAction.logout.rejected, (state, action) => {
                state.loading = false;
                state.user = null;
            })

        builder
            .addCase(AuthAction.session.pending, (state, action) => {
                state.loading = true;
            })
            .addCase(AuthAction.session.fulfilled, (state, action) => {
                state.loading = false;
                state.user = action.payload.user;
            })
            .addCase(AuthAction.session.rejected, (state, action) => {
                state.loading = false;
                state.user = null;
            })
    }
});

