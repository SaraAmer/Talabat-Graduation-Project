import React, { useState } from 'react';
import DateTimePicker from 'react-datetime-picker';


function Dates() {
    const [value, onChange] = useState(new Date());
  
    let today= new Date();
    let currentYear= today.getFullYear();
    let currentMonth= today.getMonth();
    let date = today.getDate();
    const min = new Date(currentYear, currentMonth,date, 0, 0, 0);
    const max = new Date(currentYear, currentMonth, 30, 0, 0, 0);
  


  return (
    <div>
      <DateTimePicker maxDate={max}
        minDate={min}  
        onChange={onChange}
        clearIcon
        
        value={value}
      />
    </div>
  );
}
export default Dates;