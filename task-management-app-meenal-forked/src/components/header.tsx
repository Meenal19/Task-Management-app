import React, { useState } from "react";
import "./styles.css";
import { IoIosArrowDown } from "react-icons/io";
import FilterDropDown from "./filterDropDown";
import OutsideClickHandler from "react-outside-click-handler";

function Header(props) {
  const [open, setOpen] = useState(false);

  let openFilterDropDown = () => {
    setOpen(!open);
  };

  return (
    <div className="header">
      <nav className="nav">
        <div className="nav-left">Tasks</div>
        <div className="nav-right">
          <div className="tabs">filter</div>
        </div>
        <div>
          <button className="dropIcon" onClick={() => openFilterDropDown()}>
            {" "}
            <IoIosArrowDown />
            {open ? (
              <OutsideClickHandler
                onOutsideClick={() => {
                  openFilterDropDown();
                }}
              >
                <FilterDropDown
                  data={props}
                  FilterDropDown={openFilterDropDown}
                />
              </OutsideClickHandler>
            ) : null}
          </button>
        </div>
      </nav>
    </div>
  );
}

export default Header;
