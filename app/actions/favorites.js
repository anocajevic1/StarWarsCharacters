import { ADD_FAVORITE, DELETE_FAVORITE } from "./types";

export const addFavorite = (character) => ({
  type: ADD_FAVORITE,
  data: character,
});

export const deleteFavorite = (key) => ({
  type: DELETE_FAVORITE,
  data: key,
});
