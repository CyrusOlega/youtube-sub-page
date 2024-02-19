import { IconContext } from "react-icons";
import {
  generalData,
  YouData,
  ExploreData,
  moreData,
  otherData,
  links1,
  links2,
} from "./SidebarData";

function Sidebar() {
  return <SideBarOpen />;
}

function SideBarOpen() {
  return (
    <div className="sidebar">
      <IconContext.Provider value={{ size: "25px", color: "white" }}>
        <div className="sidebarGroups">{generalData.map(SidebarButton)}</div>
        <div className="sidebarGroups">
          <div className="sidebarLabels">You</div>
          {YouData.map(SidebarButton)}
        </div>
        <div className="sidebarGroups">
          <div className="sidebarLabels">Explore</div>
          {ExploreData.map(SidebarButton)}
        </div>
        <div className="sidebarGroups">
          <div className="sidebarLabels">More from YouTube</div>
          {moreData.map(SidebarButton)}
        </div>
        <div className="sidebarGroups">{otherData.map(SidebarButton)}</div>
      </IconContext.Provider>
      <div className="info">
        {links1.map((link) => (
          <a key={link} href="/">
            {link}
          </a>
        ))}
      </div>
      <div className="info">
        {links2.map((link) => (
          <a key={link} href="/">
            {link}
          </a>
        ))}
      </div>
      <div className="copyright">© 2024 Google LLC</div>
    </div>
  );
}

function SideBarClose() {
  return <div id="sidebar-close"></div>;
}
function SidebarButton(props) {
  if (props.selected) {
    return (
      <button className="sidebarButtonsSelected" key={props.text}>
        <div className="rowContainers">
          <div className="sidebarIcons">{props.icon}</div>
          <div className="sidebarTextSelected">{props.text}</div>
        </div>
      </button>
    );
  } else {
    return (
      <button className="sidebarButtons" key={props.text}>
        <div className="rowContainers">
          <div className="sidebarIcons">{props.icon}</div>
          <div className="sidebarText">{props.text}</div>
        </div>
      </button>
    );
  }
}

export default Sidebar;
