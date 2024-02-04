import { createSlice } from "@reduxjs/toolkit";

import {
    getRolesAction,
    postNewRoleAction,
    getPermissionAction,
    deleteRoleAction,
} from "../../redux/roleAction";

const initialState = {
    isLoading: false,
    roles: [],
    permissions: [],
};

export const roleSlice = createSlice({
    name: "role",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getRolesAction.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(getRolesAction.fulfilled, (state, action) => {
                state.isLoading = false;
                state.roles = action.payload;
            })
            .addCase(getRolesAction.rejected, (state, action) => {
                state.isLoading = false;
                console.error("Error code:", action.payload);
            })
            // new role
            .addCase(postNewRoleAction.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(postNewRoleAction.fulfilled, (state, action) => {
                state.isLoading = false;
                state.roles = action.payload;
            })
            .addCase(postNewRoleAction.rejected, (state, action) => {
                state.isLoading = false;
                console.error("Error code:", action.payload);
            })
            // get all permission
            .addCase(getPermissionAction.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(getPermissionAction.fulfilled, (state, action) => {
                state.isLoading = false;
                state.permissions = action.payload;
            })
            .addCase(getPermissionAction.rejected, (state, action) => {
                state.isLoading = false;
                console.error("Error code:", action.payload);
            })
            // delete role
            .addCase(deleteRoleAction.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(deleteRoleAction.fulfilled, (state, action) => {
                state.isLoading = false;
                state.roles = action.payload;
            })
            .addCase(deleteRoleAction.rejected, (state, action) => {
                state.isLoading = false;
                console.error("Error code:", action.payload);
            });
    },
});

export default roleSlice.reducer;
