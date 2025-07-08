import ApiManager from "@/config/api.config";
import { createAsyncThunk } from "@reduxjs/toolkit";


export class NoteAction {
    static create = createAsyncThunk(
        "note/create",

        async (payload, { rejectWithValue, fulfillWithValue }) => {
            try {
                const { data } = await ApiManager.post(`/note/create`, payload);

                return fulfillWithValue(data)
            } catch (error) {
                return rejectWithValue(error.response.data);
            }
        }
    )


    static getAll = createAsyncThunk(
        "note/getAll",

        async (payload, { rejectWithValue, fulfillWithValue }) => {
            try {
                const { data } = await ApiManager.get(`/note/get`,);

                return fulfillWithValue(data)
            } catch (error) {
                return rejectWithValue(error.response.data);
            }
        }
    )


    static getById = createAsyncThunk(
        "note/getById",

        async (payload, { rejectWithValue, fulfillWithValue }) => {
            try {
                const { data } = await ApiManager.get(`/note/get/${payload.id}`,);

                return fulfillWithValue(data)
            } catch (error) {
                return rejectWithValue(error.response.data);
            }
        }
    )

}



/**
 * Provider
 * Store
 * RootReducer
 * Reducers/slice - A full feature. like - authentication / note / ...
 * Actions - function to Api call
 * 
 * to use / hooks --
 * const dispatch = useDispatch()
 * const {note, allNote} = useSelector(state=>state.note)
 */