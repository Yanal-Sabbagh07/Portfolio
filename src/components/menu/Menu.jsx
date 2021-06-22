import "./Menu.scss"
import ListItem from "./ListItem";

const Menu = (props) => {
    return (
        <div className={"menu "+(props.menu && "active")}>
            <ul>
                <ListItem setMenu={props.setMenu} />
            </ul>
        </div>
    );
}

export default Menu;
