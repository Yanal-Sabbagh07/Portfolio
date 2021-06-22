import "./app.scss";
import {useState} from "react";
import Topbar from "./components/topbar/Topbar";
import Menu from "./components/menu/Menu";
import Intro from "./components/intro/Intro";
import Portfolio from "./components/portfolio/Portfolio";
import Skills from "./components/skills/Skills";
import Contact from "./components/contact/Contact";
function App() {
  const [menuOpen,setMenuOpen] = useState(false);
  
  return (
    <div className="app">
      <Topbar 
        menu={menuOpen}
        setMenu={setMenuOpen}
      />
      <Menu 
      	menu={menuOpen}
        setMenu={setMenuOpen}
      />
      <div className="sections">
      <Intro />
      <Portfolio/>
      <Skills />
      <Contact />
      </div>
    </div>
  );
}

export default App;
