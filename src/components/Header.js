import { RxHamburgerMenu } from "react-icons/rx";
import { IconContext } from "react-icons";
import { PiMagnifyingGlassLight } from "react-icons/pi";
import { FaMicrophone } from "react-icons/fa6";
import { GoDeviceCameraVideo } from "react-icons/go";
import { IoIosNotificationsOutline } from "react-icons/io";
import { RxAvatar } from "react-icons/rx";
import { useState } from "react";
import Modal from "./Modal.js";
import { IoIosNotifications } from "react-icons/io";
import useOnClickOutside from "../hooks/useOnClickOutside.js";
import { useRef } from "react";

function Header() {
  const [modal, setModal] = useState(false);
  const toggleModal = () => {
    setModal(!modal);
  };
  const ref = useRef();
  useOnClickOutside(ref, toggleModal);

  return (
    <div className="container">
      {modal && <Modal ref={ref} />}
      <div className="start">
        <IconContext.Provider
          value={{
            size: "25px",
            color: "white",
          }}
        >
          <button id="hamburger">
            <RxHamburgerMenu style={{ marginTop: "2px" }} />
          </button>
          <button id="youtubeButton">
            <img src="\icons\YouTube_dark_logo_2017.svg" alt="youtube" />
          </button>
        </IconContext.Provider>
      </div>
      <div className="center">
        <div className="inputContainer">
          <form id="searchForm">
            <input type="text" className="input" placeholder={"Search"} />
            <IconContext.Provider
              value={{
                size: "25px",
                color: "white",
                style: { marginRight: "6px", marginTop: "2px" },
              }}
            >
              <button id="searchButton">
                <PiMagnifyingGlassLight />
              </button>
            </IconContext.Provider>
            <IconContext.Provider
              value={{
                size: "18px",
                color: "white",
                style: { marginTop: "2px" },
              }}
            >
              <button id="micButton">
                <FaMicrophone />
              </button>
            </IconContext.Provider>
          </form>
        </div>
      </div>
      <div className="end">
        <IconContext.Provider value={{ color: "white", size: "25px" }}>
          <button className="endButtons">
            <GoDeviceCameraVideo />
          </button>
          <button onClick={toggleModal} className="endButtons">
            {!modal ? <IoIosNotificationsOutline /> : <IoIosNotifications />}
          </button>
          <button className="endButtons">
            <RxAvatar />
          </button>
        </IconContext.Provider>
      </div>
    </div>
  );
}

export default Header;
