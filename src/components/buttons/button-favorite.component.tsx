import { FC } from "react";
import { IRootState } from "../../store/store";
import Character from "../../types/character.types";
import { toggleFavorite } from "../../actions/favorites.actions";
import "./button-favorite.css";
import {
  TypedUseSelectorHook,
  useDispatch,
  useSelector as useReduxSelector,
} from "react-redux";

/**
 * Button to set favorite state of a character.
 *
 * @param {Character} character
 * @returns {React.ReactElement} JSX element
 *
 */
const FavoriteButton: FC<{ character: Character }> = ({ character }) => {
  const useSelector: TypedUseSelectorHook<IRootState> = useReduxSelector;
  const favoriteMap = useSelector((state) => state.favorites.favoritesMapa);
  const dispatch = useDispatch();

  const src = require(favoriteMap.has(character.id)
    ? "../../Assets/star-filled.png"
    : "../../Assets/star.png");

  /**
   * Function that updates the Favorites status, adding or removing the character
   * @param {event} event
   */
  const toggleFavorites = (event: React.MouseEvent<HTMLElement>) => {
    event.preventDefault();
    dispatch(toggleFavorite(character));
  };

  return (
    <button className="button-favorite" onClick={toggleFavorites} type="button">
      <img src={src} alt={"favorite"} />
    </button>
  );
};

export default FavoriteButton;
