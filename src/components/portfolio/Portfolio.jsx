import "./Portfolio.scss";
import { useState, useRef, useEffect } from "react";
import PortfolioData from "../../PortfolioData";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const Portfolio = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [delay, setDelay] = useState(10000);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);
  const minSwipeDistance = 50;
  const onTouchStart = (e) => {
    setTouchEnd(null); // otherwise the swipe is fired even with usual touch events
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e) => setTouchEnd(e.targetTouches[0].clientX);

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;
    if (isLeftSwipe) {
      setCurrentSlide(currentSlide < 4 ? currentSlide + 1 : 4);
      setDelay(500000);
    } else if (isRightSwipe) {
      setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 0);
      setDelay(500000);
    }
  };
  function useInterval(callback, delay) {
    const savedCallback = useRef();

    // Remember the latest callback.
    useEffect(() => {
      savedCallback.current = callback;
    }, [callback]);

    // Set up the interval.
    useEffect(() => {
      let id = setInterval(() => {
        savedCallback.current();
      }, delay);
      return () => clearInterval(id);
    }, [delay]);
  }

  const handleClick = (direction) => {
    setDelay(500000);
    direction === "left"
      ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 4)
      : setCurrentSlide(currentSlide < 4 ? currentSlide + 1 : 0);
  };
  useInterval(() => {
    if (currentSlide < 4) {
      setCurrentSlide(currentSlide + 1);
    } else {
      setCurrentSlide(0);
    }
  }, delay);
  return (
    <div className="portfolio" id="portfolio">
      <div className="portfolioHeader">
        <h1>My Recent Work</h1>
      </div>

      <div
        className="slider"
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
        style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
      >
        {PortfolioData.map((project) => (
          <div className="container" key={project.id}>
            <div className="item">
              <div className="left">
                <div className="leftContainer">
                  <h2>{project.name}</h2>

                  <p>{project.description}</p>
                  <div className="btnContainer">
                    <a className="btn btnDemo" href={project.demoLink}>
                      project demo
                    </a>
                    <a className="btn btnCode" href={project.githubLink}>
                      source code
                    </a>
                  </div>
                </div>
              </div>
              <div className="right">
                <img
                  src={require(`../../assets/${project.img}.png`)}
                  alt="project"
                ></img>
              </div>
            </div>
          </div>
        ))}
      </div>
      <ArrowBackIosNewIcon
        className="arrow left"
        onClick={() => handleClick("left")}
      />
      <ArrowForwardIosIcon
        className="arrow right"
        onClick={() => handleClick("right")}
      />
    </div>
  );
};

export default Portfolio;
