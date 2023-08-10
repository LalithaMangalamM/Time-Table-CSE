import "./input.css";
import send from  "../../asstes/send 1.png"

const Input = (props) => {
    let { text, bt } = props;
    return (
           <div className="dash">
             <div className="dashboard">
                <div className="text">
                    <p>{text}</p>
                </div>
                <div className="arrow">
                    <img className="arrimg" src={send} alt="arrow" />
                    <button className="btn" type="button">{bt}</button>
                </div>
            </div>
      
           </div>
    )
}

export default Input;