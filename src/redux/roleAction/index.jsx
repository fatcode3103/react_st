import { createAsyncThunk } from "@reduxjs/toolkit";
import * as service from "../../service";
import { toast } from "react-toastify";

const getRolesAction = createAsyncThunk(
    "roles/getRoles",
    async (data, { rejectWithValue }) => {
        try {
            const response = await service.getRoles();
            return response.data;
        } catch (e) {
            toast.error(e || "failed");
            rejectWithValue(e);
        }
    }
);

const postNewRoleAction = createAsyncThunk(
    "roles/postNewRole",
    async (data, { rejectWithValue }) => {
        try {
            const response = await service.addNewRole(data);
            toast.success(response.message || "success");
            return response.data;
        } catch (e) {
            toast.error(e || "failed");
            rejectWithValue(e);
        }
    }
);

const getPermissionAction = createAsyncThunk(
    "roles/getPermissions",
    async (data, { rejectWithValue }) => {
        try {
            const response = await service.getPermissons();
            return response.data;
        } catch (e) {
            toast.error(e || "failed");
            rejectWithValue(e);
        }
    }
);

const deleteRoleAction = createAsyncThunk(
    "roles/deleteRole",
    async (data, { rejectWithValue }) => {
        try {
            const response = await service.deleteRole(data);
            toast.success(response.message || "success");
            return response.data;
        } catch (e) {
            toast.error(e || "failed");
            rejectWithValue(e);
        }
    }
);

const updateRoleAction = createAsyncThunk(
    "roles/updateRole",
    async (data, { rejectWithValue }) => {
        try {
            const response = await service.updateRole(data);
            toast.success(response.message || "success");
            return response.data;
        } catch (e) {
            toast.error(e || "failed");
            rejectWithValue(e);
        }
    }
);

const postNewPermissionAction = createAsyncThunk(
    "roles/newPermission",
    async (data, { rejectWithValue }) => {
        try {
            const response = await service.postNewPermission(data);
            toast.success(response.message || "success");
            return response.data;
        } catch (e) {
            toast.error(e || "failed");
            rejectWithValue(e);
        }
    }
);

const deletePermissionAction = createAsyncThunk(
    "roles/deletePermission",
    async (data, { rejectWithValue }) => {
        try {
            const response = await service.deletePermission(data);
            toast.success(response.message || "success");
            return response.data;
        } catch (e) {
            toast.error(e || "failed");
            rejectWithValue(e);
        }
    }
);

const updatePermissionAction = createAsyncThunk(
    "roles/updatePermission",
    async (data, { rejectWithValue }) => {
        try {
            const response = await service.updatePermission(data);
            toast.success(response.message || "success");
            return response.data;
        } catch (e) {
            toast.error(e || "failed");
            rejectWithValue(e);
        }
    }
);

export {
    getRolesAction,
    postNewRoleAction,
    getPermissionAction,
    deleteRoleAction,
    updateRoleAction,
    postNewPermissionAction,
    deletePermissionAction,
    updatePermissionAction,
};
