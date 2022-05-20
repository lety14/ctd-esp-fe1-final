import { Action, ActionCreator } from "@reduxjs/toolkit";
import Character from "../types/character.types";

interface FavoriteAction extends Action {
  type: "TOGGLE_FAVORITE";
  character: Character;
}

interface FavoriteRemoveAllAction extends Action {
  type: "REMOVE_ALL_FAVORITE";
}

export const toggleFavorite: ActionCreator<FavoriteAction> = (
  character: Character
) => ({
  type: "TOGGLE_FAVORITE",
  character,
});

export const removeAllFavorite: ActionCreator<
  FavoriteRemoveAllAction
> = () => ({
  type: "REMOVE_ALL_FAVORITE",
});

export type FavoriteActions =
  | ReturnType<typeof toggleFavorite>
  | ReturnType<typeof removeAllFavorite>;
