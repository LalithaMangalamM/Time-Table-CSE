import send from "../../asstes/send 1.png"

const Input = (props) => {
    let { text, bt , onClick} = props;
    return (
        <div className="dash">
            <p>{text}</p>
            <div className="tabs">
                <div>
                    <img src={send} />
                </div>
                <div>
                    <button className="button" onClick={onClick}>{bt}</button>
                </div>
            </div>

        </div>
    )
}

export default Input;