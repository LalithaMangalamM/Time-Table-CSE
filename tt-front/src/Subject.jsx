import "./subject.css"
const Subject = (props) => {
    const subjects = props.subject;
    return(
        <div>
        <div className="subList">
        {subjects.map((subject, index) => (
                <div key={index} className="subName">{subject}</div>
              ))}
        </div>

        </div>
       
    )
}
export default Subject;
