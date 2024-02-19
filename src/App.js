import "./App.css";
import Header from "./components/Header.js";
import Sidebar from "./components/Sidebar.js";
import Body from "./components/Body.js";
import Modal from "./components/Modal.js";

function App() {
  return (
    <div className="App">
      <Modal />
      <Header />
      <div className="sidebarBody">
        <Sidebar />
        <Body />
      </div>
    </div>
  );
}

export default App;
