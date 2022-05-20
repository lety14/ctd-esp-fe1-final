import { FC } from "react";
import Episode from "../../types/episode.types";
import "./card-episode.css";

/**
 * Character episode card
 *
 * @param {{string}} episode
 * @returns {React.ReactElement} JSX element
 */
const CardEpisode: FC<{ episode: Episode }> = ({ episode }) => {
  return (
    <div className="card-episode">
      <h4>{episode.name}</h4>
      <div>
        <span>{episode.episode}</span>
        <span>Lanzado el: {episode.air_date}</span>
      </div>
    </div>
  );
};

export default CardEpisode;
