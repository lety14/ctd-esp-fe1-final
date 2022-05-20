import { Reducer } from "@reduxjs/toolkit";
import { CharacterActions } from "../actions/characters.actions";
import PageInfo from "../types/pageInfo.types";
import Character from "../types/character.types";

interface CharactersState {
  status: "IDLE" | "LOADING" | "COMPLETED" | "FAILED";
  characters: Character[];
  query: string;
  pageInfo: PageInfo;
  error: string | number | null;
}

const initialState: CharactersState = {
  status: "IDLE",
  characters: [],
  query: "",
  pageInfo: { count: 0, pages: 0, next: "", prev: "" },
  error: null,
};

/**
 * Characters reducer
 *
 * @param {State} state
 * @param {DataStore.Reducer<CharactersState, CharacterActions>} action
 *
 * @returns {State}
 */
const charactersReducer: Reducer<CharactersState, CharacterActions> = (
  state = initialState,
  action
): CharactersState => {
  switch (action.type) {
    case "GET_CHARACTERS":
      return {
        ...state,
        status: "LOADING",
        characters: [],
        query: action.query,
        error: null,
      };
    case "GET_CHARACTERS_SUCCESS":
      return {
        ...state,
        status: "COMPLETED",
        characters: action.characters,
        pageInfo: action.pageInfo,
      };
    case "GET_CHARACTERS_ERROR":
      return {
        ...state,
        status: "FAILED",
        characters: [],
        error: action.error,
      };
    default:
      return { ...state };
  }
};

export default charactersReducer;
