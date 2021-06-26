import "./Portfolio.scss";
import { useState } from "react";
import PortfolioData from "../../PortfolioData";
import KeyboardArrowLeftIcon from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';
const Portfolio = () => {
    const [currentSlide,setCurrentSlide]= useState(0);

    const handleClick = (direction) => {
        direction === "left" ? setCurrentSlide(currentSlide > 0 ? currentSlide-1 : 3) :
        setCurrentSlide(currentSlide < 3 ? currentSlide+1 : 0);
    }
    return (
        
        <div className="portfolio" id="portfolio">
            <div className="portfolioHeader">
                <h1>My Recent Work</h1>
            </div>
            
            <div className="slider" style={{transform:`translateX(-${currentSlide * 100}vw)`}}>
                
                {PortfolioData.map(project =>(

                
                <div className="container" key={project.id}>
                    <div className="item">
                        
                        <div className="left">
                            <div className="leftContainer">
                                
                                <h2 
                                style={currentSlide === 0 ? {color:"orange"} :
                                currentSlide===1 ? {color:"green"} :
                                currentSlide===2 ? {color:"red"} :
                                {color:"yellow"}} >
                                {project.name}
                                </h2>

                                <p>
                                    {project.description}
                                </p>
                                <div className="btnContainer">
                                <a className="btn btnDemo"  href={project.demoLink}>project demo</a> 
                                <a className="btn btnCode"  href={project.githubLink}>source code</a>  
                                </div>
                                
                            </div>
                        </div>
                        <div className="right">
                            <img src={project.img} alt="project"></img>
                        </div>
                    </div>
                    
                </div>
                ))}
            </div>
            <KeyboardArrowLeftIcon className="arrow left" onClick={()=>handleClick("left")}/>
            <KeyboardArrowRightIcon className="arrow right" onClick={()=>handleClick("right")}/>
            
        </div>
    );
}

export default Portfolio;
