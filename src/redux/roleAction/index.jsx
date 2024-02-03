import { createAsyncThunk } from "@reduxjs/toolkit";
import * as service from "../../service";

const getRolesAction = createAsyncThunk(
    "roles/getRoles",
    async (data, { rejectWithValue }) => {
        try {
            const response = await service.getRoles();
            return response.data;
        } catch (e) {
            rejectWithValue(e);
        }
    }
);

export { getRolesAction };
