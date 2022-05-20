import { Action, ActionCreator, ThunkAction } from "@reduxjs/toolkit";
import { fetchEpisodes } from "../services/character.services";
import { IRootState } from "../store/store";
import Episode from "../types/episode.types";

interface getEpisodesAccion extends Action {
  type: "GET_EPISODES";
  query: string;
}
interface getEpisodesSuccessAccion extends Action {
  type: "GET_EPISODES_SUCCESS";
  episodes: Episode | Episode[];
}
interface getEpisodesErrorAccion extends Action {
  type: "GET_EPISODES_ERROR";
  error: string;
}

const getEpisodes: ActionCreator<getEpisodesAccion> = (query: string) => {
  return {
    type: "GET_EPISODES",
    query: query,
  };
};

const getEpisodesSuccess: ActionCreator<getEpisodesSuccessAccion> = (
  episodes: Episode | Episode[]
) => {
  return {
    type: "GET_EPISODES_SUCCESS",
    episodes: episodes,
  };
};

const getEpisodesError: ActionCreator<getEpisodesErrorAccion> = (
  mensaje: string
) => {
  return {
    type: "GET_EPISODES_ERROR",
    error: mensaje,
  };
};

export type EpisodesActions =
  | ReturnType<typeof getEpisodes>
  | ReturnType<typeof getEpisodesSuccess>
  | ReturnType<typeof getEpisodesError>;

interface FetchEpisodesThunkAction
  extends ThunkAction<void, IRootState, unknown, EpisodesActions> {}

export const getEpisodesThunk = (
  arrayEpisodeID: (string | undefined)[]
): FetchEpisodesThunkAction => {
  return async (dispatch, getState) => {
    try {
      const response = await fetchEpisodes(arrayEpisodeID);
      if (response !== undefined) {
        dispatch(getEpisodesSuccess(response));
      }
    } catch (e) {
      dispatch(getEpisodesError(e));
    }
  };
};
