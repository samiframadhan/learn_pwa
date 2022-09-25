import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const dbUri = "http://localhost:5000"
const initialState = {
    user: null,
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: ""
}

export const LoginUser = createAsyncThunk("user/LoginUser", async(user, thunkAPI) => {
    try {
        const response = await axios.post(`${dbUri}/login`, {
            email: user.email,
            password: user.password
        });
        return response.data;
    } catch (error) {
        const message = error.message.data.msg;
        return thunkAPI.rejectWithValue(message);
    }
})

export const getMe = createAsyncThunk("user/getMe", async(_, thunkAPI) => {
    try {
        const response = await axios.get(`${dbUri}/me`);
        return response.data;
    } catch (error) {
        const message = error.message.data.msg;
        return thunkAPI.rejectWithValue(message);
    }
})

export const register = createAsyncThunk("user/register", async(user, thunkAPI) => {
    try {
        const response = await axios.post(`${dbUri}/users`,{
            name: user.name,
            email: user.email,
            password: user.password,
            confPassword: user.confPassword,
            role: user.role
        })
        return response.data;
    } catch (error) {
        const message = error.message.data.msg;
        return thunkAPI.rejectWithValue(message);
    }
})

export const LogOut = createAsyncThunk("user/Logout", async() => {
    await axios.delete(`${dbUri}/logout`);
})

export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers:{
        reset: (state) => initialState
    },
    extraReducers:(builder) => {
        builder.addCase(LoginUser.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(LoginUser.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isSuccess = true;
            state.user = action.payload;
        });
        builder.addCase(LoginUser.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.message = action.payload;
        });

        // Get User Login
        builder.addCase(getMe.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(getMe.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isSuccess = true;
            state.user = action.payload;
        });
        builder.addCase(getMe.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.message = action.payload;
        });

        //Register new user
        builder.addCase(register.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(register.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isSuccess = true;
            state.user = action.payload;
        });
        builder.addCase(register.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.message = action.payload;
        });
    }
})

export const {reset} = authSlice.actions;
export default authSlice.reducer;