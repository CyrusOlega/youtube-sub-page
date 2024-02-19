import { IconContext } from "react-icons";
import { IoSettingsOutline } from "react-icons/io5";

export default function Modal() {
  return (
    <div id="notification-modal">
      <div id="notification-modal-container">
        <div id="notification-modal-header">
          <div>Notifications</div>
          <IconContext.Provider value={{ size: "25px", color: "white" }}>
            <IoSettingsOutline />
          </IconContext.Provider>
        </div>
      </div>
    </div>
  );
}
