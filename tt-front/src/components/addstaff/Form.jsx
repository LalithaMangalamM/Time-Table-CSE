import React, { useState } from 'react';
import "./form.css"

const Form = ({addStaff}) => {
  const [users, setUsers] = useState([]);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('');
  const [classHandling, setClassHandling] = useState('');
  const [subjects, setSubjects] = useState('');

  const handleSubmit = (e) => {
    const newUser = {
      name,
      email,
      password,
      role,
      classHandling: classHandling.split(','),
      subjects: subjects.split(','),
    };
    addStaff(newUser);
    setName('');
    setEmail('');
    setPassword('');
    setRole('');
    setClassHandling('');
    setSubjects('');
  };

  return (
    <div className='adduser'>
      <div className='userform'>
      <form className="add" onSubmit={handleSubmit}>
        <div>
        <label>Name</label>
        <input className="inputs" type="text" value={name} onChange={(e) => setName(e.target.value)} />
        <br />
        </div>
       <div>
       <label>Email</label>
        <input className="inputs" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <br />
       </div>
       {/* <div> */}
       {/* <label>Password</label>
        <input className="inputs" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <br />
       </div> */}
       <div>
       <label>Role</label>
        <select value={role} onChange={(e) => setRole(e.target.value)} >
        {/* <option value="">Select role</option> */}
        <option value="Hod" >Staff</option>
        <option value="Timetable Co-ordinator" >Timetable Co-ordinator</option>
        <option value="Advisor" >Advisor</option>
        <option value="Tutor" >Tutor</option>
        <option value="Staff" >HoD</option>
        </select>
        <br />
       </div>
        <div>
        <label>Classes</label>
        <input className ="inputs"type="text" value={classHandling} onChange={(e) => setClassHandling(e.target.value)} />
        <br />
        </div>
       <div>
       <label>Subjects</label>
        <input className ="inputs"type="text" value={subjects} onChange={(e) => setSubjects(e.target.value)} />
        <br />
       </div>
        <button className='addbutton' >Add Faculty</button>
      </form>
      </div>
    </div>
  );
}

export default Form;
