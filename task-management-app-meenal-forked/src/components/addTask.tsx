import React from "react";
import "./styles.css";
import { useState } from "react";
import TableDatePicker from "./datePicker";
import addTodo from "../mutators/addTodoAction";
import editTodo from "../mutators/editTodoAction";

const AddTask = (props) => {
  let inintialPriority = "Medium";
  let initialTitle = "";
  let initialDate = new Date();
  let id = "";
  let progress = "Active";
  let headerText = "Add Task";
  if (props.data != null) {
    inintialPriority = props.data.addOptions.priority;
    initialTitle = props.data.addOptions.title;
    initialDate = new Date(props.data.addOptions.date);
    id = props.data.addOptions.id;
    progress = props.data.addOptions.progress;
    headerText = "Edit Task";
  }
  const [priority, setPriority] = useState(inintialPriority);
  const [title, setTitle] = useState(initialTitle);
  const [date, setDate] = useState(initialDate);

  function addTaskToList() {
    if (props.data != null) {
      editTodo({ id, title, priority, date, progress });
    } else {
      addTodo({ title, priority, date });
    }
    props.addTasks();
    if (props.data != null) {
      props.data.dropdown(props.data.id);
    }
  }

  function onClose() {
    if (props.data != null) {
      props.data.dropdown(props.data.id);
    }
    props.addTasks();
  }
  return (
    <div className="popup-box">
      <div className="box">
        <h1>{headerText}</h1>
        <div>
          <label>Title:</label>
          <input
            className="input-width"
            value={title}
            type="text"
            name="title"
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Priority:</label>
          <select
            className="input-width"
            value={priority}
            onChange={(e) => setPriority(e.target.value)}
          >
            <option value="Medium">Medium</option>
            <option value="Important">Important</option>
          </select>
        </div>
        <div>
          <label>Due Date:</label>
          <TableDatePicker date={date} setDate={setDate} />
        </div>
        <div className="form-button">
          <button onClick={onClose}>Close</button>
          <button onClick={addTaskToList}>Save</button>
        </div>
      </div>
    </div>
  );
};
export default AddTask;
