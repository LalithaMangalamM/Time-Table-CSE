import React from 'react';
import './profiledis.css';

const ProfileDis = ({ data }) => {
  return (
    <div className='a'>
      {data.map((datum, index) => (
        <div key={index} className="field">
          <p>
            {datum.label} {datum.value}
          </p>
        </div>
      ))}
    </div>
  );
};

export default ProfileDis;
