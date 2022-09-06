import userReducer from "./Reducers";
import { configureStore } from "@reduxjs/toolkit";

import {
	persistReducer,
	FLUSH,
	REHYDRATE,
	PAUSE,
	PERSIST,
	PURGE,
	REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
	key: "root",
	version: 1,
	storage,
};


const persistedReducer = persistReducer(persistConfig, userReducer);

export const Store = configureStore({
  reducer: {
    persistedReducer
  },

  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware({
      serializableCheck: {
          ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
  }),
});
