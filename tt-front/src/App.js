import React, { useState, useEffect} from "react"
import Navigate from "./routes/Navigate"
import Form from "./components/addstaff/Form"
import Display from "./components/addstaff/Display";
import Logo from "./components/elements/logo/Logo";
// import StaffDash from "./components/adminDashboard/AdminDash"
import AdminDash from "./components/adminDashboard/AdminDash";
import StaffDash from "./components/staffDashboard/StaffDash";

function App() {
  let staffs = [{
    name:"Dr.R Subha",
    email:"subha.r@sece.ac.in",
    role:"Hod",
    classesHandling:[],
    subjects:[]
  },
  {
    name:"Ms. B Suchithra",
    email:"suchithra.b@sece.ac.in",
    role:"advisor",
    classesHandling:["III-CSE-B","I-IT"],
    subjects:["JAVA", "DSA"]
  }]
  const [staff, setStaffs] = useState([staffs]);
  const addStaff = (newStaff) => {
    setStaffs([...staff, newStaff]);
    console.log(staff);
  };

  return (
    <div>
      <Navigate />
      {/* <Form addStaff={addStaff} />
      <Display dataList = {staffs} /> */}
      {/* <AdminDash /> */}
      {/* <StaffDash /> */}
    </div>
  )
  }

export default App
