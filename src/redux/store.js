import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import thunk from 'redux-thunk';
import AsyncStorage from '@react-native-async-storage/async-storage';

// Reducers
import videoListReducer from './videoListSlice';

// Combine all reducers into a single root reducer
const reducers = combineReducers({
    videoListReducer
});

// Configuration for data persistence with Redux
const persistConfig = {
    key: 'root',             // Key for the persisted data in storage
    storage: AsyncStorage,    // Storage method for persisting data (AsyncStorage)
};

// Create a persisted reducer using the combined reducers and persistConfig
const persistedReducer = persistReducer(persistConfig, reducers);

// Configure and create the Redux store
const store = configureStore({
    reducer: persistedReducer,  // Use the persisted reducer
    devTools: false,            // Disable Redux DevTools in production
    middleware: [thunk],       // Use Redux Thunk middleware for handling asynchronous actions
});

export default store;