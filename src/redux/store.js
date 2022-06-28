import { configureStore } from '@reduxjs/toolkit';
import authReduser from './auth/authSlice';
import contactsReduser from './contacts/contactsSlice';

// const store = configureStore({
//     reducer: {
//         filter: filterReduser,
//         [contactsApi.reducerPath]: contactsApi.reducer,
//     },
//     middleware: getDefaultMiddleware => [
//         ...getDefaultMiddleware(),
//         contactsApi.middleware,
//     ],
//     devTools: process.env.NODE_ENV === 'development',
// });

// export default store;
// import { persistedContactsReducer } from './contactsSlice';
import {
    persistStore,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import persistReducer from 'redux-persist/es/persistReducer';
const authPersistConfig = {
    key: 'auth',
    storage,
    whitelist: ['token'],
};
const contactsPersistConfig = {
    key: 'contats',
    storage,
    whitelist: ['token'],
};
export const store = configureStore({
    reducer: {
        contacts: persistReducer(contactsPersistConfig, contactsReduser),
        auth: persistReducer(authPersistConfig, authReduser),
    },
    middleware: getDefaultMiddleware => [
        ...getDefaultMiddleware({
            serializableCheck: {
                ignoreActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }),
    ],
    devTools: process.env.NODE_ENV === 'development',
});
export const persistor = persistStore(store);

// export const store = configureStore({
//     reducer: { contacts: persistedContactsReducer },
//     middleware(getDefaultMiddleware) {
//         return getDefaultMiddleware({
//             serializableCheck: {
//                 ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
//             },
//         });
//     },
// });

// export const persistor = persistStore(store);