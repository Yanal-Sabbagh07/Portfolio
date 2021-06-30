import "./Intro.scss";
import { useEffect, useRef } from "react";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import { init } from 'ityped';
const Intro = () => {
    const textRef = useRef();
    useEffect(() => {
        init(textRef.current, { 
            showCursor: true, 
            backDelay:1500,
            strings: ['Software Engineer', 'Freelance Web Developer', 'Former Professional Swimmer' ] })
    }, [])
    return (
        <div className="intro" id="intro">
        <div className="left">
            <div className="imgContainer">
                <img src="assets/yanal.png" alt="Avatar"></img>
            </div>
        </div>
        <div className="right">
            <div className="wrapper">
                <h2>Hi there, I'm</h2>
                <h1>YANAL SABBAGH</h1>
                <h3><span ref={textRef}>Software Engineer</span></h3>
            </div>
            <a href="#portfolio">
                <ExpandMoreIcon className="expand"/>
            </a>
        </div>
        </div>
    );
}

export default Intro;

//<ExpandMoreIcon className="expand"/>