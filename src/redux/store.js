import { configureStore } from "@reduxjs/toolkit";
import { userReducer } from "./userSlice";
import { favoriteFilterReducer } from "./favoriteFilterSlice";
import { userFilterReducer } from "./userFilterSlice";

export const store = configureStore({
    reducer: {
        user: userReducer,
        favoriteFilter: favoriteFilterReducer,
        userFilter: userFilterReducer,
    }
});
