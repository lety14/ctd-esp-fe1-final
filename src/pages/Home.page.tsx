import Filters from "../components/characters/filters.component";
import GridCharacters from "../components/characters/grid-characters.component";
import Pagination from "../components/pagination/pagination.component";
import { fetchCharactersThunk } from "../actions/characters.actions";
import { FC } from "react";
import { useDispatch } from "react-redux";

/**
 * Home page
 *
 * @returns {React.ReactElement} JSX element
 */
const HomePage: FC = () => {
  const dispatch = useDispatch();

  /**
   * Function that removes the filters
   */
  const deleteFiltersOnClick = () => {
    dispatch(fetchCharactersThunk(""));
  };

  return (
    <div className="container">
      <div className="actions">
        <h3>Catálogo de Personajes</h3>
        <button className="danger" onClick={deleteFiltersOnClick}>
          Limpiar filtros
        </button>
      </div>
      <Filters />
      <Pagination />
      <GridCharacters />
      <Pagination />
    </div>
  );
};

export default HomePage;
