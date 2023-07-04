import React, { useState } from "react";

const getDaysInMonth = (month, year) => {
  return new Date(year, month + 1, 0).getDate();
};

const generateCalendar = (
  currentMonth,
  currentYear,
  selectedDate,
  setSelectedDate,
  disabledFrom
) => {
  const firstDay = new Date(currentYear, currentMonth, 1).getDay();

  const daysInMonth = getDaysInMonth(currentMonth, currentYear);

  const calendarDays = [];
  let day = 1;

  for (let i = 0; i < 6; i++) {
    const week = [];

    for (let j = 0; j < 7; j++) {
      if ((i === 0 && j < firstDay) || day > daysInMonth) {
        week.push(
          <td style={{ userSelect: "none" }} key={`${i}-${j}`}>
            &nbsp;
          </td>
        );
      } else {
        const selectableDate = new Date(
          currentYear,
          currentMonth,
          day + 1
        ).getTime();
        week.push(
          <td
            className={`${
              selectableDate <= disabledFrom ? "non" : ""
            }selectable ${selectableDate === selectedDate ? "selected" : ""}`}
            key={`${i}-${j}`}
            onClick={() =>
              selectableDate > disabledFrom && setSelectedDate(selectableDate)
            }
          >
            {day}
          </td>
        );
        day++;
      }
    }

    calendarDays.push(<tr key={i}>{week}</tr>);
  }

  return calendarDays;
};

const Calendar = ({
  setSelectedDate,
  selectedDate,
  disabledFrom,
  displayedMonth: { month: currentMonth, year: currentYear },
}) => {
  return (
    <div className="calendar">
      <table className="calendar-table" dir="rtl">
        <thead>
          <tr>
            <th>א</th>
            <th>ב</th>
            <th>ג</th>
            <th>ד</th>
            <th>ה</th>
            <th>ו</th>
            <th>ש</th>
          </tr>
        </thead>
        <tbody>
          {generateCalendar(
            currentMonth,
            currentYear,
            selectedDate,
            setSelectedDate,
            disabledFrom
          )}
        </tbody>
      </table>
    </div>
  );
};
export default Calendar;
