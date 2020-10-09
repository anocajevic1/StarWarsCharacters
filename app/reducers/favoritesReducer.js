import { ADD_FAVORITE, DELETE_FAVORITE } from "../actions/types";

const initialState = {
  favoritesList: [],
};

const favoritesReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_FAVORITE:
      return {
        ...state,
        favoritesList: state.favoritesList.concat({
          key: Math.random(),
          name: action.data,
        }),
      };

    case DELETE_FAVORITE:
      return {
        ...state,
        favoritesList: state.favoritesList.filter(
          (item) => item.key !== action.key
        ),
      };
    default:
      return state;
  }
};

export default favoritesReducer;
