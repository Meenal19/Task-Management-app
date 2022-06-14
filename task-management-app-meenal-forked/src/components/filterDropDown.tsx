import React from "react";
import "./styles.css";

const FilterDropDown = (props) => {
  function setProgess(prog) {
    props.data.filter(prog);
    props.FilterDropDown();
  }
  return (
    <div className="col col-sm-6 optionsBox">
      <div className="dropdown-menu">
        <button className="table-button" onClick={() => setProgess("Active")}>
          Active
        </button>
        <button
          className="table-button"
          onClick={() => setProgess("Completed")}
        >
          Completed
        </button>
      </div>
    </div>
  );
};
export default FilterDropDown;
