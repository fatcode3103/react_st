import { createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

import * as service from "../../service";

const getUsersAction = createAsyncThunk(
    "users/getUsers",
    async (data, { rejectWithValue }) => {
        try {
            const response = await service.getUsers();
            return response.data;
        } catch (e) {
            toast.error(e || "failed");
            rejectWithValue(e);
        }
    }
);

const postUserAction = createAsyncThunk(
    "users/postUser",
    async (data, { rejectWithValue }) => {
        try {
            const response = await service.addNewUser(data);
            toast.success(response.message || "successful");
            return response.data;
        } catch (e) {
            toast.error(e || "failed");
            rejectWithValue(e);
        }
    }
);

const deleteUserAction = createAsyncThunk(
    "users/deleteUser",
    async (data, { rejectWithValue }) => {
        try {
            const response = await service.deleteUser(data);
            toast.success(response.message || "successful");
            return response.data;
        } catch (e) {
            toast.error(e || "failed");
            rejectWithValue(e);
        }
    }
);

const updateUserAction = createAsyncThunk(
    "users/updateUser",
    async (data, { rejectWithValue }) => {
        try {
            const response = await service.updateUser(data);
            toast.success(response.message || "successful");
            return response.data;
        } catch (e) {
            toast.error(e || "failed");
            rejectWithValue(e);
        }
    }
);

export { getUsersAction, postUserAction, deleteUserAction, updateUserAction };
