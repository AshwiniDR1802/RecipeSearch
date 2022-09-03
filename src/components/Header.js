import React from "react";
import "../App.css";
const Header = (props) => {
  const { search, onInputChange, onSearchClick } = props;
  return (
    <div className="jumbotron">
      <h1 className="display-1">
        <i className="material-icons brand-icon">Recipe Searcher</i>
      </h1>
      <div className="input-group w-50 mx-auto">
        <input
          type="text"
          className="form-control css1"
          placeholder="Search Your Recipe..."
          value={search}
          onChange={onInputChange}
        />
        <div className="input-group-append css2">
          <button
            className="btn btn-dark"
            onClick={onSearchClick}
            style={{
              borderRadius: "10px",
              size: "200px",
              height: "30px",
              outline: "none",
            }}
          >
            Search Recipe
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
