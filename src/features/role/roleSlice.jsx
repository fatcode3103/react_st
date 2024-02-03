import { createSlice } from "@reduxjs/toolkit";

import { getRolesAction } from "../../redux/roleAction";

const initialState = {
    isLoading: false,
    roles: [],
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
            });
    },
});

export default roleSlice.reducer;
