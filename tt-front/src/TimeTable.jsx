import Subject from "./Subject";
import Table from "./Table";
import Logo from "./components/elements/logo/Logo";
import StaffList from "./components/elements/staffList/StaffList";
import "./timeTable.css"

const Timetable = () => {
  const name = ['Suchithra', 'Saranya', 'Yuvaraj', 'Keerthika', 'Sampath', 'Janaki']
  const sub = ['Artificial Inteeligence', 'Internet Programming', 'FullStackTechnologies', 'Computer Architecture', 'Computer Nentworks', 'User Experience Design', 'FST Lab', 'IP Lab', 'CN Lab']
  console.log({ name });
  return (
    <div className="design">
      <div className="tableLogo">
        <Logo />
        <div><h1>Class Name</h1></div>
      </div>
      <div className="content">
        <div className="sub">
          <Subject subject={sub} />
        </div>
        <div className="staffWrapper">
          <div className="staffsss">
            <StaffList staff={name} />
          </div>
          <div>
            <Table />
          </div>
        </div>


      </div>
    </div>
  )
}
export default Timetable;