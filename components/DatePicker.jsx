import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const ReactDatePicker = ({placeHolerText}) => {
    const [startDate, setStartDate] = useState(null);
  
    // const handleChange = (date) => {
    //   setStartDate(date);
    // };
  
    return (
      <div className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 px-3 leading-8 transition-colors duration-200 ease-in-out">
        
        <DatePicker
          selected={startDate}
          onChange={handleChange}
          dateFormat="dd/MMMM/yyyy"
          placeholderText={placeHolerText}
          
          
        />
      </div>
    );
  };
  
  export default ReactDatePicker;