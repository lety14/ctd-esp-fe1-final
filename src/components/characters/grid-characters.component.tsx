import { FC, useEffect } from "react";
import {
  TypedUseSelectorHook,
  useDispatch,
  useSelector as useReduxSelector,
} from "react-redux";
import { IRootState } from "../../store/store";
import { fetchCharactersThunk } from "../../actions/characters.actions";
import CharacterCard from "./card-character.component";
import "./grid-characters.css";

/**
 * Character grid for the home page
 *
 * @returns {React.ReactElement} JSX element
 */
const GridCharacters: FC = () => {
  const useSelector: TypedUseSelectorHook<IRootState> = useReduxSelector;
  const { status, characters } = useSelector((state) => state.characters);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCharactersThunk(""));
  }, [dispatch]);

  if (status === "LOADING") return <div>Cargando personajes...</div>;
  if (status === "FAILED") return <div>No se pudo cargar los personajes.</div>;
  if (!characters || characters.length === 0) return <></>;

  return (
    <div className="grid-characters">
      {characters.map((character) => {
        return (
          <div key={character.id}>
            <CharacterCard character={character} />
          </div>
        );
      })}
    </div>
  );
};

export default GridCharacters;
