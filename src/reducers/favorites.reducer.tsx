import { Reducer } from "@reduxjs/toolkit";
import { FavoriteActions } from "../actions/favorites.actions";
import Character from "../types/character.types";

interface StateFavorites {
  favoritesMapa: Map<number, Character>;
}

const initialState: StateFavorites = {
  favoritesMapa: new Map(),
};

const favoritesReducer: Reducer<StateFavorites, FavoriteActions> = (
  state = initialState,
  action
): StateFavorites => {
  switch (action.type) {
    case "TOGGLE_FAVORITE":
      const map = new Map<number, Character>();
      state.favoritesMapa.forEach((character) => {
        map.set(character.id, character);
      });

      state.favoritesMapa.has(action.character.id)
        ? map.delete(action.character.id)
        : map.set(action.character.id, action.character);
      return {
        ...state,
        favoritesMapa: map,
      };

    case "REMOVE_ALL_FAVORITE":
      return {
        ...initialState,
      };
    default:
      return { ...state };
  }
};

export default favoritesReducer;
