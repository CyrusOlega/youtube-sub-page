import { IconContext } from "react-icons";
import { IoSettingsOutline } from "react-icons/io5";
import { IoMdNotificationsOutline } from "react-icons/io";

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
        <div id="notification-modal-body">
          <IconContext.Provider value={{ size: "120px", color: "gray" }}>
            <IoMdNotificationsOutline id="notification-icon" />
          </IconContext.Provider>
          <span id="no-notification-modal-main-message">
            Your notifications live here
          </span>
          <span id="no-notification-modal-sub-message">
            Subscribe to your favorite channels to get notified about their
            latest videos.
          </span>
        </div>
      </div>
    </div>
  );
}
