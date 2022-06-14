import React from "react";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function TableDatePicker({ date, setDate }) {
  return (
    <DatePicker
      className="input-width"
      selected={date}
      onChange={(date) => setDate(date)} 
      minDate={new Date()}
    />
  );
}
