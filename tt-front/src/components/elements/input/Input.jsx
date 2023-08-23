import send from "../../asstes/send 1.png"

const Input = (props) => {
    return (
        <div className="dash">
            <p>{props.text}</p>
            <div className="tabs">
                <div>
                    <img src={send} />
                </div>
                <div>
                    <button className="button" onClick={props.onClick}>{props.bt}</button>
                </div>
            </div>

        </div>
    )
}

export default Input;