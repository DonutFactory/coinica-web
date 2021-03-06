import { createStore, applyMiddleware, compose } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage" ;
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "../reducers";

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['platform']
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

let store = createStore(persistedReducer, composeWithDevTools())

let persistor = persistStore(store)

export {store, persistor}
