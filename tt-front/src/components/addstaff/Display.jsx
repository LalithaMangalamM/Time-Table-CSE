// ListDisplay.js
import React from 'react';
import Logo from '../elements/logo/Logo';
import Form from '../elements/Form';
import "./display.css"
import Scrollbars from 'react-custom-scrollbars';
import { useState, useEffect } from 'react';
import profile from "../asstes/profilepic.png"
import warn from '../elements/warn';
const Display = () => {

  const [data, setData] = useState([]);
  const [name, setName] = useState("");
  const [department, setDepartment] = useState("")
  const [email, setEmail] = useState("")
  const [year, setYear] = useState("")
  const [cls, setCls] = useState("")
  const [subject, setSubject] = useState("")



  useEffect(() => {
    fetch('http://localhost:5000/list')
      .then(response => response.json())
      .then(data => { console.log(data); setData(Object.values(data)); })
      .catch(error => console.log(error.message));

  }, []);
  const displayHandleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log({ name, department, year, email, cls, subject });
      const response = await fetch("http://localhost:5000/insert", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, department, year, email, cls, subject })

      })
      const newData = await response.json();
      setData((prevData) => [...prevData, newData]);
      // location.reload();

      // Clear the form fields after successful submission
      setName("");
      setDepartment("");
      setEmail("");
      setYear("");
      setCls("");
      setSubject("");

    } catch (error) {
      console.log(error);
    }

  }
  const handleName = (e) => {
    setName(e.target.value);
  }
  const handleDepartment = (e) => {
    setDepartment(e.target.value);
  }
  const handleEmail = (e) => {
    setEmail(e.target.value);
  }
  const handleYear = (e) => {
    setYear(e.target.value);
  }
  const handleCls = (e) => {
    setCls(e.target.value);
  }
  const handleSubject = (e) => {
    setSubject(e.target.value);
  }

  const addFields = [
    { type: "text", placeholder: "Name", onChange: handleName },
    { type: "text", placeholder: "Department", onChange: handleDepartment },
    { type: "text", placeholder: "Email", onChange: handleEmail },
    { type: "text", placeholder: "Year", onChange: handleYear },
    { type: "text", placeholder: "Class", onChange: handleCls },
    { type: "text", placeholder: "Subject", onChange: handleSubject }
  ]


  return (
    <div className='display'>
      <div>
        <Logo />
      </div>
      <div className='displaycontainer' >
        <div className='displayleft'>
          <div className='displayform'>
            <Form fields={addFields} onSubmit={displayHandleSubmit} txt="ADD" marginBottom="10px" />
          </div>
        </div>
        <div className='displayright'>
          <div className='scrollable'>
            <Scrollbars >
              <ul style={{ listStyleType: "none" }} className='list'>
                {data.map((faculty, index) => (
                  <li key={index} className='faculty'>
                    <img src={profile} />
                    <div className='print'>
                      <p>Name: {faculty.name}</p>
                      <p>Department: {faculty.department}</p>
                    </div>

                  </li>
                ))}
              </ul>
            </Scrollbars>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Display;