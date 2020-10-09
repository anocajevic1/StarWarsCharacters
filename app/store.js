import { createStore, combineReducers } from "redux";
import favoritesReducer from "./reducers/favoritesReducer";
import { persistedState } from "../App";

const rootReducer = combineReducers({
  favoritesReducer: favoritesReducer,
});

const configureStore = () => createStore(rootReducer, persistedState);

export default configureStore;
