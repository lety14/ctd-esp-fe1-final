import { FC, useState } from "react";
import {
  TypedUseSelectorHook,
  useDispatch,
  useSelector as useReduxSelector,
} from "react-redux";
import { changePageThunk } from "../../actions/characters.actions";
import { IRootState } from "../../store/store";
import "./pagination.css";

/**
 * Pagination component
 *
 * @returns {React.ReactElement} JSX element
 */
const Pagination: FC = () => {
  const useSelector: TypedUseSelectorHook<IRootState> = useReduxSelector;
  const dispatch = useDispatch();

  const pageInfo = useSelector((state) => state.characters.pageInfo);
  const { count, next, pages, prev } = pageInfo;

  const previusPage = () => {
    dispatch(changePageThunk(prev));
  };

  const nextPage = () => {
    dispatch(changePageThunk(next));
  };

  return (
    <div className="pagination">
      <button
        onClick={previusPage}
        disabled={prev === null ? true : false}
        className={"primary"}
      >
        Anterior
      </button>
      <button
        onClick={nextPage}
        disabled={next === null ? true : false}
        className={"primary"}
      >
        Siguiente
      </button>
    </div>
  );
};

export default Pagination;
