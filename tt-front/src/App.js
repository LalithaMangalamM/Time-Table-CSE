import React, { useState, useEffect} from "react"
import Navigate from "./routes/Navigate"
// import Form from "./components/addstaff/Form"
import Display from "./components/addstaff/Display";
import Logo from "./components/elements/logo/Logo";
// import StaffDash from "./components/adminDashboard/AdminDash"
import AdminDash from "./components/adminDashboard/AdminDash";
import StaffDash from "./components/staffDashboard/StaffDash";
import Profile from "./components/profile/Profile";

function App() {

  return (
    <div>
      {/* <Navigate /> */}
      {/* <Form addStaff={addStaff} />
      <Display dataList = {staffs} /> */}
      {/* <AdminDash /> */}
      {/* <StaffDash /> */}
      {/* <Display /> */}
      <Profile />
    </div>
  )
  }

export default App
