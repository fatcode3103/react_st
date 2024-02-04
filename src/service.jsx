import axios from "./config/api";

export const getUsers = async () => {
    let res = await axios.get(`get-users`);
    return res;
};

export const getRoles = async () => {
    let res = await axios.get(`get-roles`);
    return res;
};

export const addNewUser = async (data) => {
    let res = await axios.post(`add-new-user`, data);
    return res;
};

export const deleteUser = async (userId) => {
    let res = await axios.delete(`delete-user?id=${userId}`);
    return res;
};

export const updateUser = async (data) => {
    let res = await axios.put(`update-user`, data);
    return res;
};

export const addNewRole = async (data) => {
    let res = await axios.post(`add-new-role`, data);
    return res;
};

export const getPermissons = async () => {
    let res = await axios.post(`get-permissions`);
    return res;
};

export const deleteRole = async (roleId) => {
    let res = await axios.delete(`delete-role?roleId=${roleId}`);
    return res;
};
