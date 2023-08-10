import Sides from "../elements/Sides";
import Logo from "../elements/logo/Logo";
import Input from "../elements/input/Input";

let AdminMenu = () => {
    return (
        <div>
            <div>
                <Logo />
            </div>
            <div className="menu">
                <Sides source={"../assets/dashboard.png"} />
               
                    <Input text="Here, you will create a new time table for Individual Classes." bt="Create Table" />
        
            </div>

        </div>
    )
}
export default AdminMenu;