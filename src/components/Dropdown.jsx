import React, { useState } from "react";
import { getFormattedYearMonth } from "../helpers";

const Dropdown = ({ options, onClick, value }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="dropdown">
      <div
        className={`${isOpen ? "open" : ""} dropdown-button`}
        onClick={toggleDropdown}
      >
        {value ? getFormattedYearMonth(value) : "Select an options"}
        <span className="dropdown-arrow">&#9662;</span>
      </div>
      {isOpen && (
        <ul className="dropdown-menu">
          {options.map(({ month, year }) => (
            <li
              key={`${month}-${year}`}
              onClick={() => onClick({ month, year })}
            >
              <div>{getFormattedYearMonth({ month, year })}</div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
