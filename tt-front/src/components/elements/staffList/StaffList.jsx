import React from "react";
import "./staffList.css"

const StaffList = ({ staff }) => {
  return (
    <div>
        <div className="outerBox">
          {staff.map((staff, index) => (
              <div className="staffName">{staff}</div>
          ))}
        </div>
    </div>
  );
};

export default StaffList;