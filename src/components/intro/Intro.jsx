import "./Intro.scss";
import { useEffect, useRef } from "react";
// import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import { init } from "ityped";
const Intro = () => {
  const textRef = useRef();
  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      backDelay: 1000,
      strings: ["Software Engineer", "Web Designer & Developer"],
    });
  }, []);
  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="imgContainer">
          <img src={require("../../assets/yanal.png")} alt="Avatar"></img>
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Hi there, I'm</h2>
          <h1>Yanal Sabbagh</h1>
          <h2>
            <span ref={textRef}></span>
          </h2>
        </div>
        <a href="#portfolio">
          <ExpandMoreIcon className="expand" />
        </a>
      </div>
    </div>
  );
};

export default Intro;

//<ExpandMoreIcon className="expand"/>
