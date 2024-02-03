import { createSlice } from "@reduxjs/toolkit";

import {
    getUsersAction,
    postUserAction,
    deleteUserAction,
    updateUserAction,
} from "../../redux/userAction/index";

const initialState = {
    isLoading: false,
    users: [],
};

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getUsersAction.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(getUsersAction.fulfilled, (state, action) => {
                state.isLoading = false;
                state.users = action.payload;
            })
            .addCase(getUsersAction.rejected, (state, action) => {
                state.isLoading = false;
                console.error("Error code:", action.payload);
            })
            // new user
            .addCase(postUserAction.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(postUserAction.fulfilled, (state, action) => {
                state.isLoading = false;
                state.users = action.payload;
            })
            .addCase(postUserAction.rejected, (state, action) => {
                state.isLoading = false;
                console.error("Error code:", action.payload);
            })
            // delete user
            .addCase(deleteUserAction.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(deleteUserAction.fulfilled, (state, action) => {
                state.isLoading = false;
                state.users = action.payload;
            })
            .addCase(deleteUserAction.rejected, (state, action) => {
                state.isLoading = false;
                console.error("Error code:", action.payload);
            })
            // update user
            .addCase(updateUserAction.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(updateUserAction.fulfilled, (state, action) => {
                state.isLoading = false;
                state.users = action.payload;
            })
            .addCase(updateUserAction.rejected, (state, action) => {
                state.isLoading = false;
                console.error("Error code:", action.payload);
            });
    },
});

export default userSlice.reducer;
