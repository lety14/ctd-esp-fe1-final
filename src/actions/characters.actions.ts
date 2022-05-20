import { Action, ActionCreator, ThunkAction } from "@reduxjs/toolkit";
import { getCharactersAPI, changePage } from "../services/character.services";
import { IRootState } from "../store/store";
import PageInfo from "../types/pageInfo.types";
import Character from "../types/character.types";

interface getCharactersAccion extends Action {
  type: "GET_CHARACTERS";
  query: string;
}
interface getCharactersSuccessAccion extends Action {
  type: "GET_CHARACTERS_SUCCESS";
  characters: Character[];
  pageInfo: PageInfo;
}
interface getCharactersErrorAccion extends Action {
  type: "GET_CHARACTERS_ERROR";
  error: string | number;
}

const getCharacters: ActionCreator<getCharactersAccion> = (query: string) => {
  return {
    type: "GET_CHARACTERS",
    query: query,
  };
};

const getCharactersSuccess: ActionCreator<getCharactersSuccessAccion> = (
  characters: Character[],
  pageInfo: PageInfo
) => {
  return {
    type: "GET_CHARACTERS_SUCCESS",
    characters: characters,
    pageInfo: pageInfo,
  };
};

const getCharactersError: ActionCreator<getCharactersErrorAccion> = (
  mensaje: string | number
) => {
  return {
    type: "GET_CHARACTERS_ERROR",
    error: mensaje,
  };
};

export type CharacterActions =
  | ReturnType<typeof getCharacters>
  | ReturnType<typeof getCharactersSuccess>
  | ReturnType<typeof getCharactersError>;

interface FetchCharactersThunkAction
  extends ThunkAction<void, IRootState, unknown, CharacterActions> {}

export const fetchCharactersThunk = (
  query: string
): FetchCharactersThunkAction => {
  return async (dispatch, getState) => {
    dispatch(getCharacters(query));
    try {
      const response = await getCharactersAPI(query);
      const [characters, info, status] = response;
      if (status === 200) {
        dispatch(getCharactersSuccess(characters, info));
      } else {
        dispatch(getCharactersError(status));
      }
    } catch (e) {
      dispatch(getCharactersError(e));
    }
  };
};

export const changePageThunk = (url: string): FetchCharactersThunkAction => {
  return async (dispatch, getState) => {
    try {
      const [characters, info] = await changePage(url);
      dispatch(getCharactersSuccess(characters, info));
    } catch (e) {
      dispatch(getCharactersError(e));
    }
  };
};
