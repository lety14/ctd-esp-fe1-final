import { Reducer } from "@reduxjs/toolkit";
import { EpisodesActions } from "../actions/episodes.actions";
import Episode from "../types/episode.types";

interface EpisodesState {
  status: "IDLE" | "LOADING" | "COMPLETED" | "FAILED";
  episodes: Episode | Episode[];
  error: string | null;
}

const initialState: EpisodesState = {
  status: "IDLE",
  episodes: [],
  error: null,
};

/**
 * Episodes reducer
 *
 * @param {State} state
 * @param {DataStore.Reducer<EpisodesState, EpisodesActions>} action
 *
 * @returns {State}
 */
const episodesReducer: Reducer<EpisodesState, EpisodesActions> = (
  state = initialState,
  action
): EpisodesState => {
  switch (action.type) {
    case "GET_EPISODES":
      return {
        ...state,
        status: "LOADING",
        episodes: [],
        error: null,
      };
    case "GET_EPISODES_SUCCESS":
      return {
        ...state,
        status: "COMPLETED",
        episodes: action.episodes,
      };
    case "GET_EPISODES_ERROR":
      return {
        ...state,
        status: "FAILED",
        error: action.error,
      };
    default:
      return { ...state };
  }
};

export default episodesReducer;
