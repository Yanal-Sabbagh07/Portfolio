


const SkillsList = (props) => {
    return (
        <li 
            className={props.active ? "active" : ""} 
            onClick={()=>{
                props.onChecked(props.id)
            }} >
                {props.title}
        </li>
    );
}

export default SkillsList;
