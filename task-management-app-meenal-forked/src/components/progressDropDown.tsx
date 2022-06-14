import React from "react";
import "./styles.css";
import editTodo from "../mutators/editTodoAction";

const ProgressDropDown = (props) => {
  function setProgess(prog) {
    let id = props.data.addOptions.id;
    let title = props.data.addOptions.title;
    let date = props.data.addOptions.date;
    let priority = props.data.addOptions.priority;
    let progress = prog;
    editTodo({ id, title, priority, date, progress });
    props.data.dropdown(props.data.id);
    props.progressDropDown();
  }
  return (
    <div className="col col-sm-6 optionsBox">
      <div className="dropdown-menu">
        <button className="table-button" onClick={() => setProgess("Active")}>
          Not Started
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
export default ProgressDropDown;
