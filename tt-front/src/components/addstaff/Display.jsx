// ListDisplay.js
import React from 'react';
import Form from './Form';
import  "./display.css"

const Display = ({ dataList }) => {
  return (
    <div>
    
    <div className='list'>

      <table className='tableList' border={"5px"}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
            <th>Classes Handling</th>
            <th>Subjects</th>
          </tr>
        </thead>
        <tbody>
          {dataList.map((item, index) => (
            <tr key={index}>
              <td>{item.name}</td>
              <td>{item.email}</td>
              <td>{item.role}</td>
              <td>{item.classesHandling.join(', ')}</td>
              <td>{item.subjects.join(', ')}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </div>
  );
}

export default Display;
