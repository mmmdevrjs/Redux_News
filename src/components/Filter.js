import React from "react";
import { useDispatch } from "react-redux";
import { newsFiltered } from "../redux/actions";

function Filter(props) {
  const dispatch = useDispatch();

  return (
    <div className="filterCategory">
      <label htmlFor="filtertn">Filter by category</label>
      <br />
      <div className="btngropu">
        <button
          onClick={() => {
            dispatch(newsFiltered(""));
          }}
          className="btn btn-secondary"
        >
          All
        </button>
        <button
          onClick={(e) => {
            dispatch(newsFiltered(e.target.textContent));
          }}
          className="btn btn-info"
        >
          O'zbekiston
        </button>
        <button
          onClick={(e) => {
            dispatch(newsFiltered(e.target.textContent));
          }}
          className="btn btn-danger"
        >
          Jahon
        </button>
        <button
          onClick={(e) => {
            dispatch(newsFiltered(e.target.textContent));
          }}
          className="btn btn-warning"
        >
          Iqtisod
        </button>
      </div>
    </div>
  );
}

export default Filter;
