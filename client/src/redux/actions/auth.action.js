import ApiManager from "@/config/api.config";
import { createAsyncThunk } from "@reduxjs/toolkit";


export class AuthAction {
    static signup = createAsyncThunk(
        "auth/signup",

        async (payload, { rejectWithValue, fulfillWithValue }) => {
            try {
                const { data } = await ApiManager.post(`/auth/signup`, payload);

                return fulfillWithValue(data)
            } catch (error) {
                return rejectWithValue(error.response.data);
            }
        }
    )

    static login = createAsyncThunk(
        "auth/login",

        async (payload, { rejectWithValue, fulfillWithValue }) => {
            try {
                const { data } = await ApiManager.post(`/auth/login`, payload);

                return fulfillWithValue(data)
            } catch (error) {
                return rejectWithValue(error.response.data);
            }
        }
    )

    static logout = createAsyncThunk(
        "auth/logout",

        async (payload, { rejectWithValue, fulfillWithValue }) => {
            try {
                const { data } = await ApiManager.get(`/auth/logout`);

                return fulfillWithValue(data)
            } catch (error) {
                return rejectWithValue(error.response.data);
            }
        }
    )

    static session = createAsyncThunk(
        "auth/session",

        async (payload, { rejectWithValue, fulfillWithValue }) => {
            try {
                const { data } = await ApiManager.get(`/auth/session`);

                return fulfillWithValue(data)
            } catch (error) {
                return rejectWithValue(error.response.data);
            }
        }
    )


}