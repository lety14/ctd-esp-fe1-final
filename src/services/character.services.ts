import Episode from "../types/episode.types";
import PageInfo from "../types/pageInfo.types";
import Character from "../types/character.types";

/**
 * Function that returns all the charecters per page and filtered by name if this is required.
 *
 * @param {string | undefined} name
 * @returns {Promise<[Character[], PageInfo, number] | [any, any, number]>} returns characters and info
 */
export const getCharactersAPI = async (
  name?: string
): Promise<[Character[], PageInfo, number] | [any, any, number]> => {
  let nameParam = "";
  if (name !== "" && name !== undefined) {
    nameParam = `name=${name}`;
  }
  return fetch(`https://rickandmortyapi.com/api/character?${nameParam}`).then(
    function (response) {
      return response
        .json()
        .then((data) => [data.results, data.info, response.status]);
    }
  );
};

/**
 *  Function that returns characters per page.
 *
 * @param {string }url
 * @returns {Promise<[Character[], PageInfo]>} returns characters and info
 */
export const changePage = async (
  url: string
): Promise<[Character[], PageInfo]> => {
  return fetch(url)
    .then((data) => data.json())
    .then((data) => [data.results, data.info]);
};

/**
 * Function that returns all the episodes of a character.
 *
 * @param {Array<number>} arrayEpisodeID
 * @returns {Promise<Episode | Episode[]>} returns all episodes of one character
 */
export const fetchEpisodes = async (
  arrayEpisodeID: (string | undefined)[]
): Promise<Episode | Episode[]> => {
  return (
    await fetch(`https://rickandmortyapi.com/api/episode/${arrayEpisodeID}`)
  ).json();
};
