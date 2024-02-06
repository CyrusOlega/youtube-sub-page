import "./App.css";
import Header from "./components/Header.js";
import Sidebar from "./components/Sidebar.js";
import Body from "./components/Body.js";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="sidebarBody">
        <Sidebar />
        <Body />
      </div>
    </div>
  );
}

export default App;
