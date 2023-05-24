import "./Topbar.scss";
// import { Person,Mail } from "@material-ui/icons";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";

const Topbar = (props) => {
  return (
    <div className={"topbar " + (props.menu && "active")} id="top">
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">
            Yanal
          </a>
          <div className="itemContainer">
            {/* <Person className="icon"/> */}
            <PhoneIcon className="icone" />
            <span>+49 15732 1177 24</span>
          </div>
          <div className="itemContainer">
            {/* <Mail className="icon"/> */}
            <EmailIcon className="icon" />

            <span>yanal.o.sabbagh@gmail.com</span>
          </div>
        </div>
        <div className="right">
          <div className="ham" onClick={() => props.setMenu(!props.menu)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
