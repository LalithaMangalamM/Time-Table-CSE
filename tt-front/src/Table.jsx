import React from 'react';
import "./Table.css"

const Table = () => {
  const daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const hours = ['I', 'II', 'III', 'Break', 'IV', 'Mentoring', 'Lunch', 'V', 'VI', 'VII'];
  const timeSlots = [
    '8:40AM - 9:35AM',
    '9:35AM - 10:30AM',
    '10:30AM - 11:25AM',
    '11:25AM - 11:45AM', // Break
    '11:45AM - 12:40PM', // IV
    '12:40PM - 12:55PM', // Mentoring
    '12:55PM - 1:40PM',  // Lunch
    '1:40PM - 2:30PM',   // V
    '2:30PM - 3:20PM',   // VI
    '3:20PM - 4:10PM',   // VII
  ];

  return (
    <div className="college-timetable">
      <table style={{ borderCollapse: 'collapse' }}>
        <thead>
          <tr>
            <th>Time</th>
            {hours.map((hour, index) => (
              <th key={index}>{hour}</th>
            ))}
          </tr>
          <tr>
            <th>Time</th>
            {timeSlots.map((slot, index) => (
              <th key={index}>{slot}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {daysOfWeek.map((day, dayIndex) => (
            <tr key={dayIndex}>
              <td>{day}</td>
              {hours.map((hour, hourIndex) => (
                <td
                  key={hourIndex}
                  style={
                    hourIndex === 3 || hourIndex === 5 || hourIndex === 6
                      ? { border: 'none', borderLeft: '1px solid black' }
                      : { border: '1px solid black' }
                  }
                ></td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
