import {configureStore} from "@reduxjs/toolkit";
import user from "./slices/user";

/**
 * Глобальное хранилище ----------------
 */
const makeStore = () => {
    const store = configureStore({
        reducer: {
            user,
        },
    });
    return store;
};

export const store = makeStore();
export type RootStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<RootStore["getState"]>;

