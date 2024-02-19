import { IconContext } from "react-icons";
import { IoSettingsOutline } from "react-icons/io5";
import { IoMdNotificationsOutline } from "react-icons/io";
import { forwardRef } from "react";

const Modal = forwardRef(function Modal(props, ref) {
  return (
    <div id="notification-modal-container">
      <div id="notification-modal" ref={ref}>
        <div id="notification-modal-header">
          <div>Notifications</div>
          <button id="notification-modal-gear-button">
            <IconContext.Provider value={{ size: "25px", color: "white" }}>
              <IoSettingsOutline id="notification-modal-gear-icon" />
            </IconContext.Provider>
          </button>
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
});

export default Modal;
