import { FC } from "react";
import {
  TypedUseSelectorHook,
  useDispatch,
  useSelector as useReduxSelector,
} from "react-redux";
import CharacterCard from "../components/characters/card-character.component";
import { IRootState } from "../store/store";
import { removeAllFavorite } from "../actions/favorites.actions";

/**
 * Favorites page
 *
 * @returns {React.ReactElement} JSX element
 */
const FavoritePage: FC = () => {
  const dispatch = useDispatch();
  const useSelector: TypedUseSelectorHook<IRootState> = useReduxSelector;
  const favoriteMap = useSelector((state) => state.favorites.favoritesMapa);

  return (
    <div className="container">
      <div className="actions">
        <h3>CharactersFavoritos</h3>
        <button
          className="danger"
          onClick={() => dispatch(removeAllFavorite())}
        >
          Eliminar todos
        </button>
      </div>
      {favoriteMap.size === 0 ? (
        <>No hay favoritos</>
      ) : (
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr 1fr",
            gridGap: "20px",
            justifyItems: "center",
          }}
        >
          {Array.from(favoriteMap.values()).map((character, index) => {
            return (
              <div key={character.id}>
                <CharacterCard character={character} />
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default FavoritePage;
