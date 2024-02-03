import { configureStore } from "@reduxjs/toolkit";

import userReducer from "../features/user/userSlice";
import roleReducer from "../features/role/roleSlice";

export const store = configureStore({
    reducer: {
        user: userReducer,
        role: roleReducer,
    },
});
