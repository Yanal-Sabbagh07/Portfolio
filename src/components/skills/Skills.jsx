import "./Skills.scss";
import List from "../../SkillsListData";
import SkillsList from "./SkillsList";
import ListItem from "./ListItem";
import { useState } from "react";
const Skills = () => {
  const [catSelected, setCatSelected] = useState(0);
  const renderItems = (id) => {
    return setCatSelected(id);
  };
  return (
    <div className="skills" id="skills">
      <div className="skills-top-container">
        <h1>Area Of Interest</h1>
        <ul>
          {List.map((item, indx) => (
            <SkillsList
              key={item.id}
              title={item.title}
              id={indx}
              onChecked={renderItems}
              active={catSelected === indx}
            />
          ))}
        </ul>
      </div>
      <div className="container">
        {List[catSelected].content.map((item) => (
          <ListItem key={item.id} img={item.img} name={item.name} />
        ))}
      </div>
    </div>
  );
};

export default Skills;
