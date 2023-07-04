import React, { useState } from "react";
import Calendar from "./Calendar";
import Dropdown from "./Dropdown";
import {
  getCurrentMonth,
  getNextMonth,
  getPreviousMonth,
  createOptions,
} from "../helpers";

const Datepicker = ({ value, setValue, title, disabledFrom = Date.now() }) => {
  const [displayedMonth, setDisplayedMonth] = useState(getCurrentMonth());
  return (
    <div className="datepicker-container">
      <h1 className="calendar-title">{title}</h1>
      <div className="row">
        <div
          className="left-arrow"
          onClick={() =>
            setDisplayedMonth((displayedMonth) =>
              getPreviousMonth(displayedMonth)
            )
          }
        >
          <span>V</span>
        </div>
        <Dropdown
          value={displayedMonth}
          options={createOptions()}
          onClick={setDisplayedMonth}
        />
        <div
          className="right-arrow"
          onClick={() =>
            setDisplayedMonth((displayedMonth) => getNextMonth(displayedMonth))
          }
        >
          <span>V</span>
        </div>
      </div>
      <Calendar
        disabledFrom={disabledFrom}
        selectedDate={value}
        setSelectedDate={setValue}
        displayedMonth={displayedMonth}
      />
    </div>
  );
};

export default Datepicker;
