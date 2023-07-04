import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import Datepicker from "./components/Datepicker";

const App = () => {
  const [startDate, setStartDate] = useState();
  const [endDate, setEndDate] = useState();

  useEffect(
    () => {
      if (startDate > endDate) {
        setEndDate();
      }
    },
    [startDate]
  );

  return (
    <>
      <div className="App" dir="rtl">
        <Datepicker
          value={startDate}
          setValue={setStartDate}
          title="תאריך יציאה"
        />
        <Datepicker
          value={endDate}
          setValue={setEndDate}
          disabledFrom={startDate}
          title="תאריך חזרה"
        />
      </div>
      {startDate &&
        endDate && (
          <>
            <div>{new Date(startDate).toJSON()}</div>
            <div>{new Date(endDate).toJSON()}</div>
          </>
        )}
    </>
  );
};

export default App;
