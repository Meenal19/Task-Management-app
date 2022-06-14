import React, { useState } from "react";
import "./styles.css";
import AddTask from "./addTask";
import ProgressDropDown from "./progressDropDown";
import deleteTodo from "../mutators/deleteTodoAction";
import { MdDone, MdEditNote, MdDeleteOutline } from "react-icons/md";

const TaskDropDown = (props) => {
  const [openAddTask, setopenAddTask] = useState(false);
  const [progressDropDown, setProgressDropDown] = useState(false);

  let openUpsertDialog = () => {
    setopenAddTask(!openAddTask);
  };

  let openProgressDropDown = () => {
    setProgressDropDown(!progressDropDown);
  };

  let deleteTask = () => {
    props.dropdown(props.id);
    deleteTodo(props.addOptions.id);
  };
  return (
    <div className="col col-sm-6 optionsBox">
      <div className="dropdown-menu">
        <button className="table-button" onClick={() => openProgressDropDown()}>
          <MdDone />
          Progress
        </button>
        {progressDropDown ? (
          <ProgressDropDown
            data={props}
            progressDropDown={openProgressDropDown}
          />
        ) : null}
        <button className="table-button" onClick={() => openUpsertDialog()}>
          <MdEditNote />
          Edit
        </button>
        {openAddTask ? (
          <AddTask addTasks={openUpsertDialog} data={props} />
        ) : null}
        <button className="table-button" onClick={() => deleteTask()}>
          <MdDeleteOutline />
          delete
        </button>
      </div>
    </div>
  );
};
export default TaskDropDown;
