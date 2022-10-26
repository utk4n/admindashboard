import "./sidebar.scss";
import DashboardIcon from "@mui/icons-material/Dashboard";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import DescriptionIcon from "@mui/icons-material/Description";
import PeopleIcon from "@mui/icons-material/People";
import PersonIcon from "@mui/icons-material/Person";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import DocumentScannerIcon from "@mui/icons-material/DocumentScanner";
import BugReportIcon from "@mui/icons-material/BugReport";
import BloodtypeIcon from "@mui/icons-material/Bloodtype";
const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="top">
        <span className="logo">ADMIN PANEL</span>
      </div>
      <hr />
      <div className="center">
        <ul>
          <li>
            <DashboardIcon className="icon" /> <span>Dashboard</span>
          </li>
          <li>
            <DescriptionIcon className="icon" />
            <span>Bilgi Bankası</span> <ArrowRightIcon className="arrow" />
          </li>
          <li>
            <PersonIcon className="icon" />
            <span>Kullanıcılar</span>
          </li>
          <li>
            <AccountBalanceIcon className="icon" /> <span>Bankalar</span>
          </li>
          <li>
            <PeopleIcon className="icon" /> <span>Müşteriler</span>
          </li>
          <li>
            <DocumentScannerIcon className="icon" /> <span>Taramalar</span>
          </li>
          <li>
            <BugReportIcon className="icon" /> <span>Asc Exception</span>
          </li>
          <li>
            <BloodtypeIcon className="icon" /> <span>False-Positive</span>
            <ArrowRightIcon className="arrow" />
          </li>
        </ul>
      </div>
      <div className="bottom">
        <div className="colorOpt"></div>
        <div className="colorOpt"></div>
      </div>
     <div className="login_section">
     <div className="who_login">
        <div className="login_wrapper">
        <img src="https://images.pexels.com/photos/13085461/pexels-photo-13085461.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
        <div className="login_infos">
          <p>Umur Utkan</p>
          <span>Administrator</span>
        </div>
        </div>
       <ArrowRightIcon />

      </div>
     </div>
    </div>
  );
};

export default Sidebar;
