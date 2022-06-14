import React, { useState } from "react";
import "./styles.css";
import getStore from "../store/store";
import TaskDropDown from "./taskDropDown";
import { IoIosArrowRoundUp } from "react-icons/io";
import OutsideClickHandler from "react-outside-click-handler";

function Table(props) {
  const [openDropwDown, setopenDropwDown] = useState();
  let openDropwDownFunc = (id) => {
    setopenDropwDown(id !== openDropwDown ? id : null);
  };
  return (
    <div>
      <div className="table-div">
        <table>
          <tr>
            <th>Task Title</th>
            <th>
              Priority
              <IoIosArrowRoundUp />{" "}
            </th>
            <th>Due</th>
          </tr>
          {getStore().todos.length === 0 ? (
            <div className="noTask">No Task added</div>
          ) : (
            getStore()
              .todos.slice()
              .sort((a, b) => {
                if (a.priority === b.priority) {
                  return a.date < b.date ? -1 : 1;
                } else {
                  return a.priority < b.priority ? -1 : 1;
                }
              })
              .filter((e) => e.progress === props.selecetedOption)
              .map((val, key) => {
                return (
                  <tr className="border-bottom" key={key}>
                    <td className="title">{val.title}</td>
                    <td className="priority">
                      <strong>{val.priority === "Important" ? "!" : ""}</strong>
                    </td>
                    <td>{val.date.slice(5, 10)}</td>
                    <td>
                      <button
                        onClick={() => openDropwDownFunc(key)}
                        className="table-button"
                      >
                        ...
                      </button>
                      {openDropwDown === key && (
                        <OutsideClickHandler
                          onOutsideClick={() => {
                            openDropwDownFunc(openDropwDown);
                          }}
                        >
                          <TaskDropDown
                            addOptions={val}
                            dropdown={openDropwDownFunc}
                            id={openDropwDown}
                          />
                        </OutsideClickHandler>
                      )}
                    </td>
                  </tr>
                );
              })
          )}
        </table>
      </div>
    </div>
  );
}

export default Table;
