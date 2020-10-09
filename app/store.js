import { createStore, combineReducers } from "redux";
import favoritesReducer from "./reducers/favoritesReducer";

const rootReducer = combineReducers({
  favoritesReducer: favoritesReducer,
});

const configureStore = () => createStore(rootReducer);

export default configureStore;
